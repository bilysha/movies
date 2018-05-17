import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RequestService } from '../services/request.service';
import { StorageService } from '../services/storage.service';

@Component({
  moduleId: module.id,
  selector: 'films-list',
  templateUrl: 'films-list.component.html',
  styleUrls: ['films-list.component.css']
})
export class FilmsListComponent {

  @Output() notify: EventEmitter<number> = new EventEmitter<number>();

  type: String = 'Popular';
  films: any;
  genres: any;
  totalPages: number;
  activePage: number;

  title: string;

  possiblePages;
  showFirstPart: boolean;
  showSecondPart: boolean;

  filters: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private requestService: RequestService,
              private storage: StorageService
            ) {
    this.films = [];
    this.filters = [
      {
        name: 'Popular',
        key: 'popular'
      },
      {
        name: 'Top rated',
        key: 'top_rated'
      },
      {
        name: 'Upcoming',
        key: 'upcoming'
      }
    ];
  }

  ngOnInit() {
    this.activatedRoute.params.forEach((params) => {
      this.films = [];
      let originalPage;
      let filter;
      const page = params['page'];

      if (this.activatedRoute.snapshot.url[0].path === 'genres') {
        filter = params['genreId'];
      }
      else {
        filter = params['filter'];
      }

      const films = this.storage.getFilms(filter, page);

      if (!films) {
        if (page % 2 === 0) {
          originalPage = page / 2;
        }
        else {
          originalPage = page / 2 + 0.5;
        }

        if (this.activatedRoute.snapshot.url[0].path === 'genres') {
          this.requestService.uploadByGenre(filter, originalPage)
          .then(res => this.parseRequest(res.json(), page, filter, originalPage));
        }
        else {
          this.requestService.uploadList(filter, originalPage)
          .then(res => this.parseRequest(res.json(), page, filter, originalPage));
        }
      }
      else {
        this.films = films;
      }

      this.pagesControl(+page);

    });
  }

  parseRequest(res: any, page: number, filter: string, originalPage: number) {
    this.totalPages = res.total_pages * 2;
    this.storage.setFilms(filter, originalPage, res.results);
    this.films = this.storage.getFilms(filter, page);
  }

  pagesControl(page: number) {
    this.activePage = +page;
    if (this.activePage < 5) {
      this.showFirstPart = false;
      this.showSecondPart = true;
      this.possiblePages = [2, 3, 4, 5];
      return;
    }
    else {
      this.showFirstPart = true;
    }

    if (this.activePage > this.totalPages - 4) {
      this.showSecondPart = false;
      this.possiblePages = [
        this.totalPages - 4,
        this.totalPages - 3,
        this.totalPages - 2,
        this.totalPages - 1];
      return;
    }
    else {
      this.showSecondPart = true;
    }

    this.possiblePages = [
      this.activePage - 2,
      this.activePage - 1,
      this.activePage,
      this.activePage + 1,
      this.activePage + 2
    ];
  }

  setPage(page: number) {
    let filter = this.activatedRoute.snapshot.url[0].path;
    if (filter === 'genres') {
      filter = this.activatedRoute.snapshot.url[1].path;
      this.router.navigate(['genres', filter, 'page', page]);
    }
    else {
      this.router.navigate([filter, 'page', page]);
    }
  }

  changeFilter(filter: string) {
    this.router.navigate([filter, 'page', 1]);
  }

}

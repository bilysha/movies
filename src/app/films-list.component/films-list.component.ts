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

  films: any;
  genres: any;
  totalPages: number;
  totalResults: number;
  activePage: number;
  favorites: any;
  searchResults: Number;

  title: string;

  possiblePages;
  showFirstPart: boolean;
  showSecondPart: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private requestService: RequestService,
              private storage: StorageService
            ) {
    this.films = [];
    this.favorites = [];
    this.searchResults = 0;
  }

  ngOnInit() {
    this.activatedRoute.params.forEach((params) => {
      this.films = [];
      let originalPage;
      let filter;
      const page = params['page'];

      const firstParam = this.activatedRoute.snapshot.url[0].path;

      switch (firstParam) {
        case 'favorite':
          filter = 'favorite';
          this.title = 'favorite';
          document.title = 'Filmsy: favorite';
          break;
        case 'search':
          filter = params['query'];
          this.title = 'search';
          document.title = 'Search: ' + filter;
          break;
        case 'genres':
          filter = params['genreId'];
          this.title = filter;
          document.title = 'Filmsy: ' + filter;
          break;
        default:
          filter = params['filter'];
          this.title = filter;
          document.title = 'Filmsy: ' + filter;
          break;
      }

      const films = this.storage.getFilms(filter, page);

      if (!films) {
        if (page % 2 === 0) {
          originalPage = page / 2;
        }
        else {
          originalPage = page / 2 + 0.5;
        }

        switch (firstParam) {
          case 'favorite':
            this.films = [];
            this.favorites = this.storage.getFavorite();
            this.totalResults = this.favorites.length;
            for (let i = 0; i < this.favorites.length; i++) {
              this.requestService.uploadFilm(this.favorites[i])
              .then(res => this.films.push(res.json()));
            }
            break;
          case 'search':
            this.requestService.findFilms(filter, originalPage)
            .then(res => this.parseRequest(res.json(), page, filter, originalPage));
            break;
          case 'genres':
            this.requestService.uploadByGenre(filter, originalPage)
            .then(res => this.parseRequest(res.json(), page, filter, originalPage));
            break;
          default:
            this.requestService.uploadList(filter, originalPage)
            .then(res => this.parseRequest(res.json(), page, filter, originalPage));
            break;
        }

      }
      else {
        this.films = films;
        this.totalPages = this.storage.getTotalPages(filter);
        this.totalResults = this.storage.getTotalResults(filter);
        this.pagesControl(+page);
      }

    });
  }

  parseRequest(res: any, page: number, filter: string, originalPage: number) {
    this.storage.setFilms(filter, originalPage, res.results, res.total_pages * 2, res.total_results);
    this.films = this.storage.getFilms(filter, page);
    this.totalPages = this.storage.getTotalPages(filter);
    this.totalResults = this.storage.getTotalResults(filter);
    this.pagesControl(+page);
  }

  pagesControl(page: number) {
    this.activePage = +page;
    this.possiblePages = [];
    this.showFirstPart = false;
    this.showSecondPart = false;

    if (this.totalPages < 10) {
      for (let i = 1; i < this.totalPages; i++) {
        this.possiblePages.push(i);
      }
      return;
    }

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
    const filter = this.activatedRoute.snapshot.url[0].path;

    switch (filter) {
      case 'genres': {
        const genreId = this.activatedRoute.snapshot.url[1].path;
        this.router.navigate(['genres', genreId, 'page', page]);
        break;
      }
      case 'search': {
        const query = this.activatedRoute.snapshot.url[1].path;
        this.router.navigate(['search', query, 'page', page]);
        break;
      }
      default: {
        this.router.navigate([filter, 'page', page]);
        break;
      }
    }
  }

  changeFilter(filter: string) {
    this.router.navigate([filter, 'page', 1]);
  }

}

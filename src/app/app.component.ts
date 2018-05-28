import { Component } from '@angular/core';
import { RequestService } from './services/request.service';
import { StorageService } from './services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  genres: any;

  query: string = '';

  filters: any;

  counter: Number = 0;
  results: any;
  constructor(private router: Router,
              private requestService: RequestService,
              private storage: StorageService
            ) {
    this.genres = this.storage.getGenres();
    this.results = [];
    this.filters = [
      {
        name: 'Favorite',
        key: 'favorite'
      },
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
    if (!this.genres.length) {
      this.requestService.uploadGenres()
      .then(res => {
        this.storage.setGenres(res.json().genres);
        this.genres = this.storage.getGenres();
      });
    }
  }

  findFilms() {
    if (this.query.length > 2) {
      this.router.navigate(['search', this.query, 'page', 1]);
    }
    this.query = '';
  }

  openFilm(id: Number) {
    this.router.navigate(['detail', id]);
    this.query = '';
  }

  doSearch() {
    if (this.query.length > 2) {
      this.requestService.findFilms(this.query, 1)
      .then(res => {
        this.results = res.json().results;
        this.normalizeImgPath();
      });
    }
  }

  normalizeImgPath() {
    for (let i = 0; i < this.results.length; i++) {
      if (!this.results[i].poster_path) {
        this.results[i].poster_path = 'resourses/no-photo-14.jpg';
      }
      else {
        this.results[i].poster_path = 'https://image.tmdb.org/t/p/w200' + this.results[i].poster_path;
      }
    }
  }
}

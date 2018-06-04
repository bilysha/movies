import { Component, OnInit, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RequestService } from './services/request.service';
import { StorageService } from './services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppModule } from './../app/app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genres: any;
  query: string;
  filters: any;
  counter: Number = 0;
  results: any;

  activeLang: string;

  isOpenedCategory: Boolean = false;
  isOpenedGenres: Boolean = false;

  cms: any;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private requestService: RequestService,
              private storage: StorageService,
              private zone: NgZone
            ) {
    this.query = '';
    this.activeLang = this.storage.getLanguage();
    this.cms = this.storage.getLangFile();
    this.genres = this.storage.getGenres();
    this.results = [];
    this.filters = this.cms.filters;
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
      } else {
        this.results[i].poster_path = 'https://image.tmdb.org/t/p/w200' + this.results[i].poster_path;
      }
    }
  }

  toggleBlock(param: string) {
    switch (param) {
      case 'category':
        this.isOpenedCategory = !this.isOpenedCategory;
        break;
      case 'genres':
        this.isOpenedGenres = !this.isOpenedGenres;
        break;
      default:
        break;
    }
  }

  switchLang(param: string) {
    if (this.activeLang === param) {
      return;
    }

    this.activeLang = param;
    this.storage.setLanguage(this.activeLang);
    this.cms = this.storage.getLangFile();

    this.zone.runOutsideAngular(() => {
      platformBrowserDynamic().bootstrapModule(AppModule);
    });
  }

}

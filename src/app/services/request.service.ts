import { Injectable } from '@angular/core';

import { url, apiKey, langEn, langRu } from '../../shared/constants';
import { Http, Response } from '@angular/http';
import { StorageService } from './storage.service';

@Injectable()
export class RequestService {

  films: any;
  lang: string;

  constructor(private http: Http,
              private storage: StorageService
            ) {
    this.films = [];
    switch (this.storage.getLanguage()) {
      case 'English':
        this.lang = langEn;
        break;
      case 'Russian':
        this.lang = langRu;
        break;
      default:
        this.lang = langEn;
        break;
    }
  }

  uploadGenres() {
    return this.http.get(`${url}/genre/movie/list?${this.lang}&${apiKey}`)
    .toPromise();
  }

  uploadList(filter: String, page: Number) {
    return this.http.get(`${url}/movie/${filter}?page=${page}&${this.lang}&region=RU&${apiKey}`)
    .toPromise();
  }

  uploadFilm(id: Number) {
    return this.http.get(`${url}/movie/${id}?${this.lang}&${apiKey}`)
    .toPromise();
  }

  uploadVideos(id: Number) {
    return this.http.get(`${url}/movie/${id}/videos?${this.lang}&${apiKey}`)
    .toPromise();
  }

  uploadCollection(id: Number) {
    return this.http.get(`${url}/collection/${id}?${this.lang}&${apiKey}`)
    .toPromise();
  }

  uploadSimilarFilms(id: Number) {
    return this.http.get(`${url}/movie/${id}/recommendations?${this.lang}&${apiKey}`)
    .toPromise();
  }

  uploadByGenre(id: Number, page: Number) {
    return this.http.get(`${url}/genre/${id}/movies?page=${page}&sort_by=created_at.asc&${this.lang}&${apiKey}`)
    .toPromise();
  }

  findFilms(key: string, page: Number) {
    return this.http.get(`${url}/search/movie?query=${key}&page=${page}&${this.lang}&${apiKey}`)
    .toPromise();
  }

  uploadCredits(id: Number) {
    return this.http.get(`${url}/movie/${id}/credits?${this.lang}&${apiKey}`)
    .toPromise();
  }

  uploadFavorites(mass: Number[]) {
    this.films = [];
    for (let i = 0; i < mass.length; i++) {
      this.uploadFilm(mass[i])
      .then(res => this.films.push(res.json()));
    }
    return this.films;
  }
}

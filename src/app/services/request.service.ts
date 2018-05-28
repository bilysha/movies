import { Injectable } from '@angular/core';

import { url, apiKey, lang } from '../../shared/constants';
import { Http, Response } from '@angular/http';

@Injectable()
export class RequestService {

  films: any;

  constructor(private http: Http) {
    this.films = [];
  }

  uploadGenres() {
    return this.http.get(`${url}/genre/movie/list?${lang}&${apiKey}`)
    .toPromise();
  }

  uploadList(filter: String, page: Number) {
    return this.http.get(`${url}/movie/${filter}?page=${page}&${lang}&${apiKey}`)
    .toPromise();
  }

  uploadFilm(id: Number) {
    return this.http.get(`${url}/movie/${id}?${lang}&${apiKey}`)
    .toPromise();
  }

  uploadVideos(id: Number) {
    return this.http.get(`${url}/movie/${id}/videos?${lang}&${apiKey}`)
    .toPromise();
  }

  uploadCollection(id: Number) {
    return this.http.get(`${url}/collection/${id}?${lang}&${apiKey}`)
    .toPromise();
  }

  uploadSimilarFilms(id: Number) {
    return this.http.get(`${url}/movie/${id}/recommendations?${lang}&${apiKey}`)
    .toPromise();
  }

  uploadByGenre(id: Number, page: Number) {
    return this.http.get(`${url}/genre/${id}/movies?page=${page}&sort_by=created_at.asc&${lang}&${apiKey}`)
    .toPromise();
  }

  findFilms(key: string, page: Number) {
    return this.http.get(`${url}/search/movie?query=${key}&page=${page}&${lang}&${apiKey}`)
    .toPromise();
  }

  uploadCredits(id: Number) {
    return this.http.get(`${url}/movie/${id}/credits?${lang}&${apiKey}`)
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

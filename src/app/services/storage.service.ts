import { Injectable } from '@angular/core';

import { eng } from './../../shared/eng';
import { rus } from './../../shared/rus';

@Injectable()
export class StorageService {

  genres: any;
  films: any;
  activeGenre: number;

  favoriteMovies: any;

  engObj: any;
  rusObj: any;

  constructor() {
    this.engObj = eng;
    this.rusObj = rus;
    this.favoriteMovies = localStorage.getItem('favorite') || [];
    if (this.favoriteMovies.length > 0) {
      this.favoriteMovies = JSON.parse(this.favoriteMovies);
    }
    this.genres = [];
    this.films = {'popular': {},
                  'top_rated': {},
                  'upcoming': {}
                };
    this.activeGenre = -1;
  }

  setGenres(genres: any) {
    this.genres = genres;
  }

  getGenres() {
    return this.genres;
  }

  setFilms(filter: string, page: number, list: any, totalPages: number, totalResults: number) {
    this.films[filter][(page * 2 - 1).toString()] = list.slice(0, 10);
    this.films[filter][(page * 2).toString()] = list.slice(10, 20);
    this.films[filter]['totalPages'] = totalPages;
    this.films[filter]['totalResults'] = totalResults;
  }

  getFilms(filter: string, page: number) {
    if (typeof this.films[filter] === 'undefined') {
      this.films[filter] = {};
    }
    return this.films[filter][page.toString()];
  }

  getTotalPages(filter: string) {
    return this.films[filter]['totalPages'] || 0;
  }

  getTotalResults(filter: string) {
    return this.films[filter]['totalResults'] || 0;
  }

  setActiveGenre(id: number) {
    this.activeGenre = id;
  }

  getActiveGenre() {
    return this.activeGenre;
  }

  getFavorite() {
    return this.favoriteMovies;
  }

  updateFavorite(id: Number) {
    const index = this.favoriteMovies.indexOf(id);
    if (index < 0) {
      this.favoriteMovies.push(id);
    } else {
      this.favoriteMovies.splice(index, 1);
    }
    localStorage.setItem('favorite', JSON.stringify(this.favoriteMovies));
  }

  getLanguage() {
    return localStorage.getItem('lang') || 'Russian';
  }

  setLanguage(lang: string) {
    localStorage.setItem('lang', lang);
  }

  getLangFile() {
    const lang = this.getLanguage();
    if (lang === 'English') {
      return this.engObj;
    } else {
      return this.rusObj;
    }
  }
}

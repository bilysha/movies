import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  genres: any;
  films: any;
  activeGenre: number;

  constructor() {
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

  setFilms(filter: string, page: number, list: any) {
    console.log(arguments);
    this.films[filter][(page * 2 - 1).toString()] = list.slice(0, 10);
    this.films[filter][(page * 2).toString()] = list.slice(10, 20);
    console.log(this.films);
  }

  getFilms(filter: string, page: number) {
    if (typeof this.films[filter] === 'undefined') {
      this.films[filter] = {};
    }
    return this.films[filter][page.toString()];
  }

  setActiveGenre(id: number) {
    this.activeGenre = id;
  }

  getActiveGenre() {
    return this.activeGenre;
  }
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../services/request.service';
import { StorageService } from '../services/storage.service';

@Component({
  moduleId: module.id,
  selector: 'film-item',
  templateUrl: 'film-item.component.html',
  styleUrls: ['film-item.component.css']
})
export class FilmItemComponent {
  @Input() film: any;
  genres = [];
  favoriteMovies: any;
  isFavorite: Boolean = false;

  constructor(private router: Router,
              private requestService: RequestService,
              private storage: StorageService
            ) {
    this.favoriteMovies = storage.getFavorite();
  }

  ngOnInit() {
    this.genres = this.storage.getGenres();
    if (!this.film.genres) {
      this.film.genres = this.film.genre_ids;
    }
    if (this.genres.length === 0) {
      this.requestService.uploadGenres()
      .then(res => this.genres = res.json().genres)
      .then(() => this.parseGenres());
    }
    if (typeof this.film.parsed === 'undefined') {
      if (!this.film.poster_path) {
        this.film.poster_path = 'resourses/no-photo-14.jpg';
      }
      else {
        this.film.poster_path = 'https://image.tmdb.org/t/p/w200' + this.film.poster_path;
      }
    }

    if (this.film.overview) {
      if (this.film.overview.length > 300) {
        this.film.overview = this.film.overview.slice(0, 300).concat('...');
      }
    }
    else {
      this.film.overview = 'Sorry, this movie has no overview.';
    }

    if (!this.film.parsed) {
      this.parseReleaseDate();
    }

    this.parseGenres();

    this.setFavoriteState();

  }

  parseGenres() {
    for (let j = 0; j < this.film.genres.length; j++) {
      for (let k = 0; k < this.genres.length; k++) {
        if (this.film.genres[j] === this.genres[k].id) {
          this.film.genres[j] = {};
          this.film.genres[j].id = this.genres[k].id;
          this.film.genres[j].name = this.genres[k].name;
          break;
        }
      }
    }
  }

  parseReleaseDate() {
    const months = {
      '01': 'January',
      '02': 'Febrary',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'Jule',
      '08': 'August',
      '09': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December',
    };

    let newReleaseDate;

    let day = this.film.release_date.slice(8, 10);
    if (day[0] === '0') {
      day = day.slice(1, 2);
    }
    const month = months[this.film.release_date.slice(5, 7).toString()];
    const year = this.film.release_date.slice(0, 4);

    newReleaseDate = day + ' ' + month + ' ' + year;

    this.film.release_date = newReleaseDate;
    this.film.parsed = true;
  }

  setFavoriteState() {
    if (this.favoriteMovies.indexOf(this.film.id) < 0) {
      this.isFavorite = false;
    }
    else {
      this.isFavorite = true;
    }
  }

  toggleFavorite(id: Number) {
    this.storage.updateFavorite(id);
    this.setFavoriteState();
  }
}

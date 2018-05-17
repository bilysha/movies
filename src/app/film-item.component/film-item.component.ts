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

  constructor(private router: Router,
              private requestService: RequestService,
              private storage: StorageService
            ) {}

  ngOnInit() {
    this.genres = this.storage.getGenres();
    if (this.genres.length === 0) {
      this.requestService.uploadGenres()
      .then(res => this.genres = res.json().genres)
      .then(() => this.parseGenres());
    }
    if (typeof this.film.parsed == 'undefined') {
      if (!this.film.poster_path) {
        this.film.poster_path = 'resourses/no-photo-14.jpg';
      }
      else {
        this.film.poster_path = 'https://image.tmdb.org/t/p/w200' + this.film.poster_path;
      }
      this.film.parsed = true;
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

  }

  parseGenres() {
    for (let j = 0; j < this.film.genre_ids.length; j++) {
      for (let k = 0; k < this.genres.length; k++) {
        if (this.film.genre_ids[j] === this.genres[k].id) {
          this.film.genre_ids[j] = {};
          this.film.genre_ids[j].id = this.genres[k].id;
          this.film.genre_ids[j].name = this.genres[k].name;
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

}

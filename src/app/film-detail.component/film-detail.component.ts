import { Component } from '@angular/core';
import { RequestService } from '../services/request.service';
import { ActivatedRoute, Router } from '@angular/router';

import '../../shared/lang';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'film-detail',
  templateUrl: 'film-detail.component.html',
  styleUrls: ['film-detail.component.css']
})
export class FilmDetailComponent {

  film: any;
  collection: any;
  videos: any;
  casts: any;
  similarFilms: any;

  videoUrl: any;
  videoName: string;

  isEmptyFilm: Boolean;
  isEmptyCollection: Boolean;
  isEmptyVideos: Boolean;
  isEmptySimilar: Boolean;
  isEmptyCasts: Boolean;

  isOpenedGeneral: Boolean;
  isOpenedTrailer: Boolean;
  isOpenedCollection: Boolean;
  isOpenedCompanies: Boolean;
  isOpenedRecomendations: Boolean;


  constructor(private requestService: RequestService,
              private router: Router,
              private activatedRoute: ActivatedRoute
              ) {
    this.setDefolt();
  }


  ngOnInit() {
    this.activatedRoute.params.forEach((params) => {
      this.setDefolt();
      const filmId: any = +params['id'];
      this.requestService.uploadFilm(filmId)
      .then(res => {
        this.film = res.json();
        document.title = this.film.title;
        this.parseReleaseDate();
        if (!this.film.backdrop_path) {
          this.film.backdrop_path = 'resourses/no-photo-13.jpg';
        }
        else {
          this.film.backdrop_path = 'https://image.tmdb.org/t/p/original' + this.film.backdrop_path;
        }
        this.isEmptyFilm = false;
      })
      .then(() => {
        this.requestService.uploadCredits(this.film.id)
        .then(res => {
          this.casts = res.json().cast;
          this.isEmptyCasts = false;
        });

        this.requestService.uploadVideos(this.film.id)
        .then(res => {
          this.videos = res.json().results;
          if (this.videos.length > 0) {
            for (let i = this.videos.length - 1; i >= 0; i--) {
              if ((this.videos[i].name).indexOf('Trailer') >= 0) {
                this.videoUrl = 'https://www.youtube.com/embed/' + this.videos[i].key;
                this.videoName = this.videos[i].name;
                this.isEmptyVideos = false;
                break;
              }
            }
            if (!this.videoUrl.length) {
              this.videoName = this.videos[0].name;
              this.videoUrl = 'https://www.youtube.com/embed/' + this.videos[0].key;
              this.isEmptyVideos = false;
            }
          }
        });

        if (this.film.belongs_to_collection) {
          this.requestService.uploadCollection(this.film.belongs_to_collection.id)
          .then(res => {
            this.collection = res.json();
            for (let i = 0; i < this.collection.parts.length; i++) {
              if (!this.collection.parts[i].poster_path) {
                this.collection.parts[i].poster_path = './resourses/no-photo-14.jpg';
              }
              else {
                this.collection.parts[i].poster_path = 'https://image.tmdb.org/t/p/w200' + this.collection.parts[i].poster_path;
              }
            }
            this.isEmptyCollection = false;
          });
        }

        this.requestService.uploadSimilarFilms(this.film.id)
        .then(res => {
          this.similarFilms = res.json().results;
          if (this.similarFilms.length > 0) {
            this.isEmptySimilar = false;
          }
        });
      });
    });
  }

  openFilm(id: Number) {
    this.router.navigate(['detail', id]);
  }

  openCollection(id: Number) {
    this.router.navigate(['collection', id]);
  }

  setDefolt() {
    this.isEmptyFilm = true;
    this.isEmptyCollection = true;
    this.isEmptyVideos = true;
    this.isEmptySimilar = true;
    this.isEmptyCasts = true;

    this.isOpenedGeneral = false;
    this.isOpenedTrailer = false;
    this.isOpenedCollection = false;
    this.isOpenedCompanies = false;
    this.isOpenedRecomendations = false;

    this.film = [];
    this.videos = [];
    this.collection = [];
    this.similarFilms = [];
    this.casts = [];

    this.videoUrl = '';
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

  openArticle(param: string) {
    switch (param) {
      case 'general':
        this.isOpenedGeneral = !this.isOpenedGeneral;
        break;
      case 'trailer':
        this.isOpenedTrailer = !this.isOpenedTrailer;
        break;
      case 'collection':
        this.isOpenedCollection = !this.isOpenedCollection;
        break;
      case 'companies':
        this.isOpenedCompanies = !this.isOpenedCompanies;
        break;
      case 'recomendations':
        this.isOpenedRecomendations = !this.isOpenedRecomendations;
        break;
    }
  }

}

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
  isEmptyFilm: Boolean;
  isEmptyCollection: Boolean;
  isEmptyVideos: Boolean;
  isEmptySimilar: Boolean;
  collection: any;
  videos: any;
  similarFilms: any;

  videoUrl: any;
  videoName: string;


  constructor(private requestService: RequestService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private sanitizer: DomSanitizer
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
        if (!this.film.backdrop_path) {
          this.film.backdrop_path = 'resourses/no-photo-13.jpg';
        }
        else {
          this.film.backdrop_path = 'https://image.tmdb.org/t/p/original' + this.film.backdrop_path;
        }
        this.isEmptyFilm = false;
      })
      .then(() => {

        this.requestService.uploadVideos(this.film.id)
        .then(res => {
          this.videos = res.json().results;
          console.log(this.videos);
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
          this.isEmptySimilar = false;
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

    this.film = [];
    this.videos = [];
    this.collection = [];
    this.similarFilms = [];
  }

}

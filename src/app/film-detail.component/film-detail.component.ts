import { Component } from '@angular/core';
import { RequestService } from '../services/request.service';
import { ActivatedRoute, Router } from '@angular/router';

import '../../shared/lang';

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
  collection: any;

  constructor(private requestService: RequestService,
              private router: Router,
              private activatedRoute: ActivatedRoute
              ) {
    this.isEmptyFilm = true;
    this.isEmptyCollection = true;
  }

  ngOnInit() {
    this.film = [];
    const filmId: any = this.activatedRoute.snapshot.url[1];
    this.requestService.uploadFilm(filmId)
    .then(res => {
      this.film = res.json();
      if (this.film.belongs_to_collection) {
        this.requestService.uploadCollection(this.film.belongs_to_collection.id)
        .then(res => {
          this.collection = res.json();
          console.log(this.collection);
          this.isEmptyCollection = false;
        });
      }
      this.isEmptyFilm = false;
    });
  }

  openFilm(id: Number) {
    //this.router.navigate(['detail', id]);
    console.log('openfilm')
    //this.ngOnInit();
  }

  openCollection(id: Number) {
    this.router.navigate(['collection', id]);
  }

}

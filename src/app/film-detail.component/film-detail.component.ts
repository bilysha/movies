import { Component } from '@angular/core';
import { RequestService } from '../services/request.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'film-detail',
  templateUrl: 'film-detail.component.html',
  styleUrls: ['film-detail.component.css']
})
export class FilmDetailComponent {

  film: any;
  isEmpty: Boolean;
  constructor(private requestService: RequestService,
              private activatedRoute: ActivatedRoute
            ) {
    this.isEmpty = true;
  }

  ngOnInit() {
    const filmId: any = this.activatedRoute.snapshot.url[1];
    this.requestService.uploadFilm(filmId)
    .then(res => {
      this.film = res.json();
      console.log(this.film);
      this.isEmpty = false;
    });
  }
}

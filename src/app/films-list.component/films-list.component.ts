import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RequestService } from '../services/request.service';

@Component({
  moduleId: module.id,
  selector: 'films-list',
  templateUrl: 'films-list.component.html',
  styleUrls: ['films-list.component.css']
})
export class FilmsListComponent {

  type: String = 'Popular';
  films: any;
  genres: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private requestService: RequestService) {
    this.films = [];
    this.genres = [];

  }

  ngOnInit() {
    const params: any = this.activatedRoute.snapshot.url[0];
    console.log(params);
    Promise.all([
      this.requestService.sendRequest(params.path),
      this.requestService.uploadGenres()
    ])
    .then(res => {
      this.films = res[0].json().results;
      this.genres = res[1].json().genres;
      console.log(this.films);
      this.decodeGenres();
    });
  }

  decodeGenres() {
    for (let i = 0; i < this.films.length; i++) {
      for (let j = 0; j < this.films[i].genre_ids.length; j++) {
        for (let k = 0; k < this.genres.length; k++) {
          if(this.films[i].genre_ids[j] === this.genres[k].id) {
            this.films[i].genre_ids[j] = this.genres[k].name;
            break;
          }
        }
      }
    }
  }

  openFilm(id: Number) {
    this.router.navigate(['detail', id]);
    console.log(id);
    this.requestService.uploadFilm(id);
  }

}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../services/request.service';

@Component({
  moduleId: module.id,
  selector: 'film-item',
  templateUrl: 'film-item.component.html',
  styleUrls: ['film-item.component.css']
})
export class FilmItemComponent {
  @Input() film: any;

  constructor(private router: Router,
              private requestService: RequestService
            ) {}

  ngOnInit() {
    if (this.film.overview) {
      if (this.film.overview.length > 300) {
        this.film.overview = this.film.overview.slice(0, 300).concat('...');
      }
    }
    else {
      this.film.overview = 'У данного фильма отсутствует описание.';
    }
  }

  openFilm(id: Number) {
    this.router.navigate(['detail', id]);
    console.log(id);
    this.requestService.uploadFilm(id);
  }

}

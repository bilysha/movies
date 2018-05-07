import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'film-item',
  templateUrl: 'film-item.component.html',
  styleUrls: ['film-item.component.css']
})
export class FilmItemComponent {
  @Input() film: any;

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
}

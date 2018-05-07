import { Component } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  moduleId: module.id,
  selector: 'genres-list',
  templateUrl: 'genres-list.conponent.html',
  styleUrls: ['genres-list.conponent.css']
})
export class GenresListComponent {

  genres: any;

  constructor(private requestService: RequestService) {
    this.genres = [];
  }

  ngOnInit() {
    this.requestService.uploadGenres()
    .then(res => this.genres = res.json().genres);
  }
}

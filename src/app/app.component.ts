import { Component } from '@angular/core';
import { RequestService } from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  genres: any;

  constructor(private requestService: RequestService) {
    this.genres = [];
  }

  ngOnInit() {
    if (!this.genres.length) {
      this.requestService.uploadGenres()
      .then(res => this.genres = res.json().genres);
    }
  }
}

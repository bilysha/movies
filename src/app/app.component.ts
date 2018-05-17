import { Component } from '@angular/core';
import { RequestService } from './services/request.service';
import { StorageService } from './services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  genres: any;

  constructor(private requestService: RequestService,
              private storage: StorageService
            ) {
    this.genres = this.storage.getGenres();
  }

  ngOnInit() {
    if (!this.genres.length) {
      this.requestService.uploadGenres()
      .then(res => {
        this.storage.setGenres(res.json().genres);
        this.genres = this.storage.getGenres();
      });
    }
  }
}

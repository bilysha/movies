import { Injectable } from '@angular/core';

import '../../shared/constants';
import { Http, Response } from '@angular/http';

@Injectable()
export class RequestService {

  constructor(private http: Http) {

  }

  uploadGenres() {
    console.log('Uploading genres ... ');
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=07dc8f6435c41ca3ef4a46c9a0f91344')
    .toPromise();
  }

  sendRequest(filter: String) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + filter + '?page=1&language=en-US&api_key=07dc8f6435c41ca3ef4a46c9a0f91344')
    .toPromise();
  }

  uploadFilm(id: Number) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?external_source=imdb_id&language=en-US&api_key=07dc8f6435c41ca3ef4a46c9a0f91344')
    .toPromise();
  }

  uploadVideos(id: Number) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US&api_key=07dc8f6435c41ca3ef4a46c9a0f91344')
    .toPromise();
  }

  uploadCollection(id: Number) {
    return this.http.get('https://api.themoviedb.org/3/collection/' + id + '?language=en-US&api_key=07dc8f6435c41ca3ef4a46c9a0f91344')
    .toPromise();
  }

}

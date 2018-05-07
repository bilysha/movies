import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
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

  constructor(private activatedRoute: ActivatedRoute,
              private requestService: RequestService) {
    this.films = [];
    const params: any = this.activatedRoute.snapshot.url[0];
    console.log(params);
    this.requestService.sendRequest(params.path)
    .then(res => this.films = res.json())
    .then(() => console.log(this.films));
  }

}

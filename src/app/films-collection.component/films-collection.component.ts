import { Component } from '@angular/core';
import { RequestService } from '../services/request.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'films-collection',
  templateUrl: 'films-collection.component.html',
  styleUrls: ['films-collection.component.css']
})
export class FilmsCollectionComponent {

  collection: any;
  isEmptyCollection: Boolean;

  constructor(private requestService: RequestService,
              private router: Router,
              private activatedRoute: ActivatedRoute
              ) {
    this.collection = {};
    this.isEmptyCollection = true;
  }

  ngOnInit() {
    const collectionId: any = this.activatedRoute.snapshot.url[1];
    console.log(collectionId);
    this.requestService.uploadCollection(collectionId)
    .then(res => {
      this.collection = res.json();
      this.isEmptyCollection = false;
    });
  }


}

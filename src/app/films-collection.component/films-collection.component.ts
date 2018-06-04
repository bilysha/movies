import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  moduleId: module.id,
  selector: 'films-collection',
  templateUrl: 'films-collection.component.html',
  styleUrls: ['films-collection.component.css']
})
export class FilmsCollectionComponent implements OnInit{

  collection: any;
  isEmptyCollection: Boolean;
  cms: any;

  constructor(private requestService: RequestService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private storage: StorageService
              ) {
    this.cms = this.storage.getLangFile();
    this.collection = {};
    this.isEmptyCollection = true;
  }

  ngOnInit() {
    const collectionId: any = this.activatedRoute.snapshot.url[1];
    this.requestService.uploadCollection(collectionId)
    .then(res => {
      this.collection = res.json();
      if (this.collection.overview.length === 0) {
        this.collection.overview = this.cms.noOverview;
      }
      this.isEmptyCollection = false;
    });
  }


}

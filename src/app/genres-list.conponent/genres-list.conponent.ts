import { Component, Input, Output } from '@angular/core';
import { RequestService } from '../services/request.service';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  moduleId: module.id,
  selector: 'genres-list',
  templateUrl: 'genres-list.conponent.html',
  styleUrls: ['genres-list.conponent.css']
})
export class GenresListComponent {

  @Input() genres: any;

  constructor(private storage: StorageService) {}

}

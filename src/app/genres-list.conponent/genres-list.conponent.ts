import { Component, Input } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  moduleId: module.id,
  selector: 'genres-list',
  templateUrl: 'genres-list.conponent.html',
  styleUrls: ['genres-list.conponent.css']
})
export class GenresListComponent {

  @Input() genres: any;

}

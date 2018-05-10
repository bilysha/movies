import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'films-collection',
  templateUrl: 'films-collection.component.html',
  styleUrls: ['films-collection.component.css']
})
export class FilmsCollectionComponent {

  @Input() collection: any;

}

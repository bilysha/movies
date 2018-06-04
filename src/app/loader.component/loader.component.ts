import { Component, Input } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  moduleId: module.id,
  selector: 'loader',
  templateUrl: 'loader.component.html',
  styleUrls: ['loader.component.css']
})
export class LoaderComponent {

  @Input() title: string;

  cms: any;

  constructor(private storage: StorageService) {
    this.cms = this.storage.getLangFile();
  }

}

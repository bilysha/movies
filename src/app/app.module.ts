import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FilmsCollectionComponent } from './films-collection.component/films-collection.component';
import { FilmsListComponent } from './films-list.component/films-list.component';
import { FilmItemComponent } from './film-item.component/film-item.component';
import { FilmDetailComponent } from './film-detail.component/film-detail.component';
import { LoaderComponent } from './loader.component/loader.component';

import { RequestService } from './services/request.service';
import { StorageService } from './services/storage.service';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilmsCollectionComponent,
    FilmsListComponent,
    FilmItemComponent,
    FilmDetailComponent,
    LoaderComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'favorite/page/:page', component: FilmsListComponent},
      {path: 'search/:query/page/:page', component: FilmsListComponent},
      {path: 'genres/:genreId', component: FilmsListComponent},
      {path: 'genres/:genreId/page/:page', component: FilmsListComponent},
      {path: ':filter', component: FilmsListComponent},
      {path: ':filter/page/:page', component: FilmsListComponent},
      {path: 'top_rated', component: FilmsListComponent},
      {path: 'latest', component: FilmsListComponent},
      {path: 'detail/:id', component: FilmDetailComponent},
      {path: 'collection/:id', component: FilmsCollectionComponent},
      {path: '', pathMatch: 'full', redirectTo: 'popular/page/1'}
    ])
  ],
  providers: [
    RequestService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

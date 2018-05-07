import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GenresListComponent } from './genres-list.conponent/genres-list.conponent';
import { FilmsListComponent } from './films-list.component/films-list.component';

import { RequestService } from './services/request.service';

@NgModule({
  declarations: [
    AppComponent,
    GenresListComponent,
    FilmsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'popular', component: FilmsListComponent},
      {path: 'popular/:id', component: FilmsListComponent},
      {path: 'top_rated', component: FilmsListComponent},
      {path: 'latest', component: FilmsListComponent},
      {path: '', pathMatch: 'full', redirectTo: 'popular'}
    ])
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

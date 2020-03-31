import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbunsComponent } from 'src/app/albuns/albuns.component';
import { PostagensComponent } from 'src/app/postagens/postagens.component';
import { TodosComponent } from 'src/app/todos/todos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { HomeComponent } from 'src/app/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbunsComponent,
    PostagensComponent,
    TodosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

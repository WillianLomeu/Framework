import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbunsComponent } from 'src/app/albuns/albuns.component';
import { PostagensComponent } from 'src/app/postagens/postagens.component';
import { TodosComponent } from 'src/app/todos/todos.component';
import { HomeComponent } from 'src/app/home/home.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'albuns', component: AlbunsComponent},
  {path:'postagens', component: PostagensComponent},
  {path:'todos', component: TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: object;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getTodos().subscribe(data => {
      this.todos = data
      console.log(this.todos);
    })
  }
}

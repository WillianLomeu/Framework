import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.scss']
})
export class PostagensComponent implements OnInit {

  posts: object;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getPosts().subscribe(data => {
      this.posts = data
      console.log(this.posts);
    })
  }

}

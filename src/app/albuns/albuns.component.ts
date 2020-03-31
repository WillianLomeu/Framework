import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.scss']
})
export class AlbunsComponent implements OnInit {

  albums: object;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getAlbums().subscribe(data => {
      this.albums = data
      console.log(this.albums);
    })
  }
}

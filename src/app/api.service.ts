import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums')
  }

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
}
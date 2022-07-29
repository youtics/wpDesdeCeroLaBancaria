import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioApiService {

  constructor(private http: HttpClient) { }

  urlApi = 'https://labancaria.obliviondev.com.ar/wp-json/wp/v2/posts?categories=1'
  urlApiDeportes = 'https://labancaria.obliviondev.com.ar/wp-json/wp/v2/posts?categories=28'
  urlApiComercios = 'https://labancaria.obliviondev.com.ar/wp-json/wp/v2/posts?categories=34'
  urlApiEducacion = 'https://labancaria.obliviondev.com.ar/wp-json/wp/v2/posts?categories=27'
  urlApiGastronomia = 'https://labancaria.obliviondev.com.ar/wp-json/wp/v2/posts?categories=25'
  urlApiId = 'https://labancaria.obliviondev.com.ar/wp-json/wp/v2/posts/';

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.urlApi, {
      params: {
        per_page: '15'
      } 
    });
  }
  getPostsDeportes(): Observable<any[]> {
    return this.http.get<any[]>(this.urlApiDeportes, {
      params: {
        per_page: '15'
      } 
    });
  }

  

  getPostsComercios(): Observable<any[]> {
    return this.http.get<any[]>(this.urlApiComercios, {
      params: {
        per_page: '15'
      } 
    });
  }

  getPostsEducacion(): Observable<any[]> {
    return this.http.get<any[]>(this.urlApiEducacion, {
      params: {
        per_page: '15'
      } 
    });
  }
  getPostsGastronomia(): Observable<any[]> {
    return this.http.get<any[]>(this.urlApiGastronomia, {
      params: {
        per_page: '15'
      } 
    });
  }
  
  getPost(id:number):Observable<any>{
    return this.http.get<any>(this.urlApiId+id);
  }
}

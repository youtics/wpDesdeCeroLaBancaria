import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioApiService {

  constructor(private http: HttpClient) { }

  urlApi = 'https://asociacion.bancariamdp.org.ar/wp-json/wp/v2/posts?categories=8&_embed'
  urlApiDeportes = 'https://asociacion.bancariamdp.org.ar/wp-json/wp/v2/posts?categories=21&_embed'
  urlApiComercios = 'https://asociacion.bancariamdp.org.ar/wp-json/wp/v2/posts?categories=18&_embed'
  urlApiEducacion = 'https://asociacion.bancariamdp.org.ar/wp-json/wp/v2/posts?categories=26&_embed'
  urlApiGastronomia = 'https://asociacion.bancariamdp.org.ar/wp-json/wp/v2/posts?categories=17&_embed'
  urlApiId = 'https://asociacion.bancariamdp.org.ar/wp-json/wp/v2/posts/'

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.urlApi, {
      params: {
        per_page: '10'
      } 
    });
  }
  getPostsDeportes(): Observable<any[]> {
    return this.http.get<any[]>(this.urlApiDeportes, {
      params: {
        per_page: '10'
      } 
    });
  }
  getPostsComercios(): Observable<any[]> {
    return this.http.get<any[]>(this.urlApiComercios, {
      params: {
        per_page: '10'
      } 
    });
  }

  getPostsEducacion(): Observable<any[]> {
    return this.http.get<any[]>(this.urlApiEducacion, {
      params: {
        per_page: '10'
      } 
    });
  }
  getPostsGastronomia(): Observable<any[]> {
    return this.http.get<any[]>(this.urlApiGastronomia, {
      params: {
        per_page: '10'
      } 
    });
  }
  
  getPost(id:number):Observable<any>{
    return this.http.get<any>(this.urlApiId+id+'?_embed');
  }
}

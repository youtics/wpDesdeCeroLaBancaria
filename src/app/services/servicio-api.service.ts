import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioApiService {

  constructor(private http: HttpClient) { }

  urlApi = 'https://bancariamdp.org.ar/wp-json/wp/v2/posts?filter[cat]=34';
  urlApiId = 'https://bancariamdp.org.ar/wp-json/wp/v2/posts/';

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.urlApi, {
      params: {
        per_page: '9'
      } 
    });
  }

  getPost(id:number):Observable<any>{
    return this.http.get<any>(this.urlApiId+id);
  }
}

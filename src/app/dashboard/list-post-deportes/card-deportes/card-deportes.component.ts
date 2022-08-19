import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-deportes',
  templateUrl: './card-deportes.component.html',
  styleUrls: ['./card-deportes.component.css']
})
export class CardDeportesComponent implements OnInit {

  @Input() post: any;

  id?:number;
  img?:string;
  contenido?:string;
  titulo?:string;
  fecha?:string;

  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
    this.ApiCategoria();
  }

  ApiCategoria()
  {
    this.id = this.post.id;
    //this.img = this.post.custom.featured_image;
    //this.img = this.post._links['wp:featuredmedia']['0'].embeddable.media_details
    this.img = this.post._embedded['wp:featuredmedia']['0'].source_url;
    console.log(this.post);
    this.contenido = this.post.excerpt.rendered;
    this.titulo = this.post.title.rendered;
    this.fecha = this.post.date;
  }

  ApiPlugin()
  {
    this.id = this.post.id;
    this.img = this.post.image;
    this.contenido = this.post.content;
    this.titulo = this.post.title;
    this.fecha = this.post.date;
  }

}

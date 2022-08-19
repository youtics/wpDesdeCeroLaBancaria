import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-gastronomia',
  templateUrl: './card-gastronomia.component.html',
  styleUrls: ['./card-gastronomia.component.css']
})
export class CardGastronomiaComponent implements OnInit {

  @Input() post: any;

  id?:number;
  img?:string;
  contenido?:string;
  titulo?:string;
  fecha?:string;

  constructor() { 
  }

  ngOnInit() {
    this.ApiCategoria();
  }

  ApiCategoria()
  {
    this.id = this.post.id;
    //this.img = this.post.custom.featured_image;
    this.img = this.post._embedded['wp:featuredmedia']['0'].source_url;
    this.contenido = this.post.excerpt.rendered;
    this.titulo = this.post.title.rendered;
    this.fecha = this.post.date;
  }
}

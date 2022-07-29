import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { 
  }

  ngOnInit() {
    this.ApiCategoria();
  }

  ApiCategoria()
  {
    this.id = this.post.id;
    this.img = this.post.custom.featured_image;
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

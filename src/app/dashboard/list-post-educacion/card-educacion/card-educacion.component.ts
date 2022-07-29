import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-educacion',
  templateUrl: './card-educacion.component.html',
  styleUrls: ['./card-educacion.component.css']
})
export class CardEducacionComponent implements OnInit {

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

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioApiService } from 'src/app/services/servicio-api.service';

@Component({
  selector: 'app-posteo',
  templateUrl: './posteo.component.html',
  styleUrls: ['./posteo.component.css']
})
export class PosteoComponent implements OnInit {

  id:number;
  img?:string;
  contenido?:string;
  titulo?:string;
  fecha?:string;

  constructor(private aRoute: ActivatedRoute, private servivioApi: ServicioApiService) {
    this.id = this.aRoute.snapshot.params['id'];
  }

  ngOnInit() { 
    this.ApiCategoria();
  }

  ApiCategoria(): void {
    this.servivioApi.getPost(this.id).subscribe(data => {
      console.log(data);
      this.id = data.id;
      //this.img = data.custom.featured_image;
      this.img = data._embedded['wp:featuredmedia']['0'].source_url;
      this.contenido = data.content.rendered;
      this.titulo = data.title.rendered;
      this.fecha = data.date;
      //console.log("Imagen "+this.contenido);
    });
  }

}

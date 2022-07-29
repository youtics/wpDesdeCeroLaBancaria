import { Component, OnInit } from '@angular/core';
import { ServicioApiService } from 'src/app/services/servicio-api.service';

@Component({
  selector: 'app-list-post-educacion',
  templateUrl: './list-post-educacion.component.html',
  styleUrls: ['./list-post-educacion.component.css']
})
export class ListPostEducacionComponent implements OnInit {

  listPost: any[] = [];
  loading = true;
  constructor(private apiService: ServicioApiService) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.apiService.getPostsEducacion().subscribe(data => {
      this.listPost = data;
      this.loading = false;
    });
  }

}

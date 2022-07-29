import { Component, OnInit } from '@angular/core';
import { ServicioApiService } from 'src/app/services/servicio-api.service';

@Component({
  selector: 'app-list-post-gastronomia',
  templateUrl: './list-post-gastronomia.component.html',
  styleUrls: ['./list-post-gastronomia.component.css']
})
export class ListPostGastronomiaComponent implements OnInit {

  listPost: any[] = [];
  loading = true;
  constructor(private apiService: ServicioApiService) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.apiService.getPostsGastronomia().subscribe(data => {
      this.listPost = data;
      this.loading = false;
    });
  }

}

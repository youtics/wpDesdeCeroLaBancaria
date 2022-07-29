import { Component, OnInit } from '@angular/core';
import { ServicioApiService } from 'src/app/services/servicio-api.service';

@Component({
  selector: 'app-list-post-deportes',
  templateUrl: './list-post-deportes.component.html',
  styleUrls: ['./list-post-deportes.component.css']
})
export class ListPostDeportesComponent implements OnInit {

  listPost: any[] = [];
  loading = true;
  constructor(private apiService: ServicioApiService) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.apiService.getPostsDeportes().subscribe(data => {
      this.listPost = data;
      this.loading = false;
    });
  }

}

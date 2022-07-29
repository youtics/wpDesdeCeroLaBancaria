import { Component, OnInit } from '@angular/core';
import { ServicioApiService } from 'src/app/services/servicio-api.service';

@Component({
  selector: 'app-list-post-comercios',
  templateUrl: './list-post-comercios.component.html',
  styleUrls: ['./list-post-comercios.component.css']
})
export class ListPostComerciosComponent implements OnInit {

  listPost: any[] = [];
  loading = true;
  constructor(private apiService: ServicioApiService) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.apiService.getPostsComercios().subscribe(data => {
      this.listPost = data;
      this.loading = false;
    });
  }

}

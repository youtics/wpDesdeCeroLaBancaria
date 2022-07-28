import { Component, OnInit } from '@angular/core';
import { ServicioApiService } from 'src/app/services/servicio-api.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  listPost: any[] = [];
  loading = true;
  constructor(private apiService: ServicioApiService) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.apiService.getPosts().subscribe(data => {
      this.listPost = data;
      console.log("No hay data: "+ data);
      this.loading = false;
    });
  }

}

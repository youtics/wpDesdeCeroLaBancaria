import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { ListPostComponent } from './dashboard/list-post/list-post.component';
import { PosteoComponent } from './dashboard/posteo/posteo.component';
import { CardPostComponent } from './dashboard/list-post/card-post/card-post.component';
import { ListPostDeportesComponent } from './dashboard/list-post-deportes/list-post-deportes.component';
import { CardDeportesComponent } from './dashboard/list-post-deportes/card-deportes/card-deportes.component';
import { ListPostComerciosComponent } from './dashboard/list-post-comercios/list-post-comercios.component';
import { CardComerciosComponent } from './dashboard/list-post-comercios/card-comercios/card-comercios.component';
import { ListPostEducacionComponent } from './dashboard/list-post-educacion/list-post-educacion.component';
import { CardEducacionComponent } from './dashboard/list-post-educacion/card-educacion/card-educacion.component';
import { ListPostGastronomiaComponent } from './dashboard/list-post-gastronomia/list-post-gastronomia.component';
import { CardGastronomiaComponent } from './dashboard/list-post-gastronomia/card-gastronomia/card-gastronomia.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    ListPostComponent,
    PosteoComponent,
    CardPostComponent,
    ListPostDeportesComponent,
    CardDeportesComponent,
    ListPostComerciosComponent,
    CardComerciosComponent,
    ListPostEducacionComponent,
    CardEducacionComponent,
    ListPostGastronomiaComponent,
    CardGastronomiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

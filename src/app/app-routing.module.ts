import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListPostComerciosComponent } from './dashboard/list-post-comercios/list-post-comercios.component';
import { ListPostDeportesComponent } from './dashboard/list-post-deportes/list-post-deportes.component';
import { ListPostEducacionComponent } from './dashboard/list-post-educacion/list-post-educacion.component';
import { ListPostGastronomiaComponent } from './dashboard/list-post-gastronomia/list-post-gastronomia.component';
import { ListPostComponent } from './dashboard/list-post/list-post.component';
import { PosteoComponent } from './dashboard/posteo/posteo.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [

  { path: '', redirectTo: 'layout', pathMatch: 'full' },
  { path: 'layout', component: LayoutComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: ListPostComponent },
    { path: 'posteo/:id', component: PosteoComponent }
  ]},
  { path: 'list-post-deportes', component: ListPostDeportesComponent},
  { path: 'list-post-deportes/posteo/:id', component: PosteoComponent },
  { path: 'list-post-comercios', component: ListPostComerciosComponent},
  { path: 'list-post-comercios/posteo/:id', component: PosteoComponent },
  { path: 'list-post-educacion', component: ListPostEducacionComponent},
  { path: 'list-post-educacion/posteo/:id', component: PosteoComponent },
  { path: 'list-post-gastronomia', component: ListPostGastronomiaComponent},
  { path: 'list-post-gastronomia/posteo/:id', component: PosteoComponent },
  { path: '**', redirectTo: 'layout', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

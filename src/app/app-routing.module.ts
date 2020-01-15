import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { MovieSelectorComponent } from './movie-selector/movie-selector.component';
import { StellariumComponent } from './stellarium/stellarium.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'videos',
    component: MovieSelectorComponent
  },
  {
    path: 'stellarium',
    component: StellariumComponent
  },
  {
    path: 'detail/:id',
    component: DetailMovieComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

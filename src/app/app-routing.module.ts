import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MunicipalitiesComponent } from './municipalities/menu/municipalities.component';
import { MunicipalityDetailComponent } from './municipalities/detail/municipality-detail.component';

// Resolver
import {MunicipalityDetailResolver} from './municipalities/detail/municipality-detail.resolver';

const routes: Routes = [
  { path: 'municipios', component: MunicipalitiesComponent },
  { path: 'municipios/detalles/:id', component: MunicipalityDetailComponent, resolve: {data: MunicipalityDetailResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

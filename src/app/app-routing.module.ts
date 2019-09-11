import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MunicipalitiesComponent} from './municipalities/municipalities.component';


const routes: Routes = [
  { path: 'municipalities', component: MunicipalitiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

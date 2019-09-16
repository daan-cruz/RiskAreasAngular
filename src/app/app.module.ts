import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';

import { MunicipalitiesComponent } from './municipalities/menu/municipalities.component';
import { MunicipalitiesListComponent } from './municipalities/list/municipalities-list.component';

const appRoutes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'municipios', component: MunicipalitiesComponent },
  { path: 'municipios/lista', component: MunicipalitiesListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MunicipalitiesComponent,
    MunicipalitiesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
      // , { enableTracing: true } // Debugging purposes only
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

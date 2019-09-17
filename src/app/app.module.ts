import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { MunicipalitiesComponent } from './municipalities/menu/municipalities.component';
import { MunicipalitiesListComponent } from './municipalities/list/municipalities-list.component';
import { MunicipalityDetailComponent } from './municipalities/detail/municipality-detail.component';

const appRoutes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'municipios', component: MunicipalitiesComponent },
  { path: 'municipios/lista', component: MunicipalitiesListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MunicipalitiesComponent,
    MunicipalitiesListComponent,
    MunicipalityDetailComponent
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
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

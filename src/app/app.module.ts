import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { MunicipalitiesComponent } from './municipalities/municipalities.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'municipios', component: MunicipalitiesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MunicipalitiesComponent
  ],
  imports: [
    BrowserModule,
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

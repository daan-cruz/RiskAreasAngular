import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Firebase
import { FirestoreService } from '../../services/firestore/firestore.service';
import { Observable } from 'rxjs';

// Models
import {Municipality} from '../../../models/municipality';

@Component({
  selector: 'app-municipalities-list',
  templateUrl: './municipalities-list.component.html',
  styleUrls: ['./municipalities-list.component.css']
})
export class MunicipalitiesListComponent implements OnInit {

  public municipalities: Observable<any[]>;

  constructor(
    private firestoreService: FirestoreService,
    private routes: Router
  ) { }

  ngOnInit() {
    this.municipalities = this.firestoreService.getMunicipalitiesList();
  }

  municipalityDetail(municipality: string) {
    this.routes.navigate(['municipios/detalles/' + municipality]);
  }

}

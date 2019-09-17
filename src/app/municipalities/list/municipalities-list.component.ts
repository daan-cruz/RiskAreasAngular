import { Component, OnInit } from '@angular/core';

// Firebase
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FirestoreService } from '../../services/firestore/firestore.service';

// Models
import {MunicipalityModel} from '../../../models/municipality.model';

@Component({
  selector: 'app-municipalities-list',
  templateUrl: './municipalities-list.component.html',
  styleUrls: ['./municipalities-list.component.css']
})
export class MunicipalitiesListComponent implements OnInit {

  municipalities: MunicipalityModel[];

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.firestoreService.getMunicipalities().subscribe(data => {
      this.municipalities = data.map(e => {
        return {
          id: e.payload.doc.id,
          igecem: e.payload.doc.data(),
          name: e.payload.doc.data()
        } as MunicipalityModel;
      });
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';

@Component({
  selector: 'app-municipalities',
  templateUrl: './municipalities.component.html',
  styleUrls: ['./municipalities.component.css']
})
export class MunicipalitiesComponent implements OnInit {

  public municipalities = [];

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.firestoreService.getMunicipalities().subscribe((municipalitiesSnapshot) => {
      this.municipalities = [];
      municipalitiesSnapshot.forEach((municipalityData: any) => {
        this.municipalities.push({
          id: municipalityData.payload.doc.igecem,
          data: municipalityData.payload.doc.data()
        });
      } );
    } );
  }

}

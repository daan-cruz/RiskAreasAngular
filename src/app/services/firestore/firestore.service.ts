import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

// Models
import { Municipality } from '../../../models/municipality';
import {error} from 'util';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private basePathRisk = '/risk';
  private basePathMunicipality = '/municipalities';

  municipalities: Observable<any[]> = null;
  municipality: Observable<any> = null;

  constructor(
    private db: AngularFireDatabase
  ) { }

  getMunicipalitiesList() {
    this.municipalities = this.db.list(this.basePathMunicipality).valueChanges();
    return this.municipalities;
  }

  getMunicipality(key: string) {
    const municipalityPath = '${this.basePathMunicipality}/${key}';
    this.municipality = this.db.object(municipalityPath).valueChanges();
  }

  createMunicipality(municipality: Municipality) {
    this.db.object(this.basePathMunicipality).set({
      igecem: municipality.igecem,
      name: municipality.name
    });
  }

  updateMunicipality(key: string, municipality: Municipality) {
    this.db.object(this.basePathMunicipality + '/' + municipality.$key).update({
      name: municipality.name
    });
  }

  deleteMunicipality(key: string) {
    this.db.object(this.basePathMunicipality + '/' + key).remove();
  }

}

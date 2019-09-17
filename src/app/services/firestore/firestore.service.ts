import { Injectable } from '@angular/core';

// Firebase
import { AngularFirestore } from '@angular/fire/firestore';

// Models
import { MunicipalityModel } from '../../../models/municipality.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore,
  ) { }

  public createMunicipality(municipality: MunicipalityModel) {
    return this.firestore.collection('municipalities').add(municipality);
  }

  public getMunicipalityIgecem(igecem: string) {
    return this.firestore.collection('municipalities').doc(igecem).snapshotChanges();
  }

  public getMunicipalitiesRisk(risk: string) {
    return this.firestore.collection('municipalities').doc(risk).snapshotChanges();
  }

  public getMunicipalities() {
    return this.firestore.collection('municipalities').snapshotChanges();
  }

  public updateMunicipality(municipality: MunicipalityModel) {
    delete municipality.id;
    return this.firestore.doc('municipalities/' + municipality.id).update(municipality);
  }

}

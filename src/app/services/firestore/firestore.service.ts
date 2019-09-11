import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  public createMunicipality(data: {
    name: string,
    igecem: string
  }) {
    return this.firestore.collection('municipalities').add(data);
  }

  public getMunicipalityIgecem(igecem: string) {
    return this.firestore.collection('municipalities').doc(igecem).snapshotChanges();
  }

  public getMunicipalitiesRisk(risk: string) {
    return this.firestore.collection('municipalitites').doc(risk).snapshotChanges();
  }

  public getMunicipalities() {
    return this.firestore.collection('municipalitites').snapshotChanges();
  }

  public updateMunicipality(igecem: string, data: any) {
    return this.firestore.collection('municipalitites').doc(igecem).set(data);
  }

}

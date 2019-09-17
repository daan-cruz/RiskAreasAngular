import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Injectable()
export class MunicipalityDetailResolver implements Resolve<any> {

  constructor(
    public firestoreService: FirestoreService
  ) { }

  resolve(route: ActivatedRouteSnapshot, ) {
    return new Promise((resolve, reject) => {
      const municipalityId = route.paramMap.get('id');
      this.firestoreService.getMunicipality(municipalityId);
    });
  }
}

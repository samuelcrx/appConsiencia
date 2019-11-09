import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudQuestoesService {

  constructor(private firestore: AngularFirestore) { }


  create_NewQuestao(record) {
    return this.firestore.collection('Questoes').add(record);
  }

  read_Questoes() {
    return this.firestore.collection('Questoes').snapshotChanges();
  }

  update_Questao(recordID, record) {
    this.firestore.doc('Questoes/' + recordID).update(record);
  }

  delete_Questao(record_id) {
    this.firestore.doc('Questoes/' + record_id).delete();
  }
}

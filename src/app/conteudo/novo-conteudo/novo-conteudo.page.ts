import { Component, OnInit } from '@angular/core';
import { CrudQuestoesService } from 'src/app/core/services/crud-questoes.service';

@Component({
  selector: 'app-novo-conteudo',
  templateUrl: './novo-conteudo.page.html',
  styleUrls: ['./novo-conteudo.page.scss'],
})
export class NovoConteudoPage implements OnInit {

  questoes: any;
  questao: string;
  Alt01: string;
  Alt02: string;
  Alt03: string;
  Alt04: string;
  Alt05: string;
  AltCorreta: string;

  constructor(private crudQuestoesService: CrudQuestoesService) { }

  ngOnInit() {
    this.crudQuestoesService.read_Questoes().subscribe(data => {

      this.questoes = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Questao: e.payload.doc.data()['questao'],
          Alt01: e.payload.doc.data()['Alt01'],
          Alt02: e.payload.doc.data()['Alt02'],
          Alt03: e.payload.doc.data()['Alt03'],
          Alt04: e.payload.doc.data()['Alt04'],
          Alt05: e.payload.doc.data()['Alt05'],
          AltCorreta: e.payload.doc.data()['AltCorreta'],
        };
      })
      console.log(this.questoes);

    });
  }

  CreateRecord() {
    let record = {};
    record['questao'] = this.questao;
    record['Alt01'] = this.Alt01;
    record['Alt02'] = this.Alt02;
    record['Alt03'] = this.Alt03;
    record['Alt04'] = this.Alt04;
    record['Alt05'] = this.Alt05;
    record['AltCorreta'] = this.AltCorreta;
    this.crudQuestoesService.create_NewQuestao(record).then(resp => {
      this.questao = "";
      this.Alt01 = "";
      this.Alt02 = "";
      this.Alt03 = "";
      this.Alt04 = "";
      this.Alt05 = "";
      this.AltCorreta = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

}

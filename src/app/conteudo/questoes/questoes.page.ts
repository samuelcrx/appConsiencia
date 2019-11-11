import { Component, OnInit } from '@angular/core';
import { CrudQuestoesService } from 'src/app/core/services/crud-questoes.service';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.page.html',
  styleUrls: ['./questoes.page.scss'],
})
export class QuestoesPage implements OnInit {

  public dados(dado): void {

    var teste = document.querySelector("ion-radio#btn01");
    alert(this.questoes.Alt01);
    console.log(teste);
  }



  questoes: any;
  questao: string;
  Alt01: string;
  Alt02: string;
  Alt03: string;
  Alt04: string;
  Alt05: string;
  AltCorreta: string;

  constructor(private crudQuestoesService: CrudQuestoesService) { }
  
  // public criandoQuestoes(): void {
  //   console.log(this.questoes.Alt01)

  // }
  
  public form = [
    { val: "Teste", resultado: "A" },
    { val: 'Testa B', resultado: "B" },
    { val: 'Teste C', resultado: "C" },
    { val: 'Teste D', resultado: "D" },
    { val: 'Teste E', resultado: "E" }
  ];

  ngOnInit() {

    this.crudQuestoesService.read_Questoes().subscribe(data => {

      this.questoes = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          questao: e.payload.doc.data()['questao'],
          Alt01: e.payload.doc.data()['Alt01'],
          Alt02: e.payload.doc.data()['Alt02'],
          Alt03: e.payload.doc.data()['Alt03'],
          Alt04: e.payload.doc.data()['Alt04'],
          Alt05: e.payload.doc.data()['Alt05'],
          AltCorreta: e.payload.doc.data()['AltCorreta'],
        };
      })
      this.form.values[1] = 'Olá'
      console.log(this.questoes);

    });
  }

  consultarQuestoes() {
    let record = {};
    record['questao'] = this.questao;
    record['Alt01'] = this.Alt01;
    record['Alt02'] = this.Alt02;
    record['Alt03'] = this.Alt03;
    record['Alt04'] = this.Alt04;
    record['Alt05'] = this.Alt05;
    record['AltCorreta'] = this.AltCorreta;
    this.crudQuestoesService.read_Questoes().forEach(toString)
  }

  
}

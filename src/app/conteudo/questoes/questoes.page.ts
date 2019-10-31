import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.page.html',
  styleUrls: ['./questoes.page.scss'],
})
export class QuestoesPage implements OnInit {

  public form = [
    { val: 'Teste de mesa',resultado: "A" },
    { val: 'Testa B',resultado: "B" },
    { val: 'tESTE C',resultado: "C" },
    { val: 'Teste D',resultado: "D" },
    { val: 'Teste E',resultado: "E" }
  ];

  public dados(dado):void { 
    
    var teste = document.querySelector("ion-radio#btn01");
    alert(dado);
    console.log(teste);
  }
  constructor() { }

  ngOnInit() {
  }

}

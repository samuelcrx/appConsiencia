import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-temas',
  templateUrl: './temas.page.html',
  styleUrls: ['./temas.page.scss'],
  
})
export class TemasPage implements OnInit {  

  constructor(private menu: MenuController) {}

  openEnd() {
    this.menu.open('end');
  }


  ngOnInit() {
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NovoConteudoPage } from './novo-conteudo.page';

const routes: Routes = [
  {
    path: '',
    component: NovoConteudoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NovoConteudoPage]
})
export class NovoConteudoPageModule {}

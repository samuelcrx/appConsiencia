import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'questoes', pathMatch: 'full' },
  { path: 'login', loadChildren: './autenticacao/login/login.module#LoginPageModule' },
  { path: 'temas', loadChildren: './conteudo/temas/temas.module#TemasPageModule' },
  { path: 'questoes', loadChildren: './conteudo/questoes/questoes.module#QuestoesPageModule' },
  { path: 'novo-conteudo', loadChildren: './conteudo/novo-conteudo/novo-conteudo.module#NovoConteudoPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { auth } from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  //Criar atributo
  authState$: Observable<firebase.User>;

  constructor(private fbAutentica: AngularFireAuth) { 
    this.authState$ = this.fbAutentica.authState;
  }

  //metodo para chamar os metodos na pagina de login
  autenticacao(ehLogin:boolean, nome:string, email:string, senha:string): Promise<auth.UserCredential>{
    
    if( ehLogin ) {
      return this.loginComEmail(email,senha);
    }else{
      return this.criarContaComEmail(nome,email,senha);
    }
  }

  logout():Promise<void>{ //Promise serve para metodos asincronos
    return this.fbAutentica.auth.signOut();
  }

  get authTrue():Observable<boolean>{
    return this.authState$.pipe(map(user => user !== null) ); //Pipe le os dados do firebase.User assim 
                                //que disponivel para ser acessado
  }

  private loginComEmail(email: string, senha:string):Promise<auth.UserCredential>{

    return this.fbAutentica.auth.signInWithEmailAndPassword(email, senha);

  }

  private criarContaComEmail(nome:string, email:string, senha:string): Promise<auth.UserCredential>{

    return this.fbAutentica.auth.createUserWithEmailAndPassword(email,senha)
            .then(credentials => credentials.user.updateProfile({ displayName: nome, photoURL:null })
            .then(()=>credentials)
            );
  }
}

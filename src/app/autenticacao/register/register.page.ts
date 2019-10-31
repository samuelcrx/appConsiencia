import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  //Começar a fazer a validação do login e senha

  autenticacaoForm: FormGroup; //Validações feitas pelo angular, em JavaScript, ou seja, o angular

  //FormBuilder é um construtor de formularios
  constructor(private fb:FormBuilder) { }

  ngOnInit() { //Após fazer os metodos, ao criar minha pagina esse é o primeiro método que ira inicializar
    //chamamos o método no init, pois se chamarmos no construtor o HTML ainda não tera sido inicializado
    this.createForm();
  }

   //Cria o metodo
   private createForm(): void {//Declaração de um metodo dentro do angular, retorno é feito na frente do encapsulamento
    //criar o formulario
    this.autenticacaoForm = this.fb.group({
      //criar um array e colocar os validadores
      //primeiro parametro é o valor inicial do input, 1 array após o '' = val. sincrona, o próximo é assincrona
      nome:['', [Validators.required, Validators.minLength(3)]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    })

   }

   onSubmit(): void {
     console.log("FormGroup", this.autenticacaoForm);
   };

   get nome(): FormControl {
     return <FormControl>this.autenticacaoForm.get("nome");
   }

   get email(): FormControl {
     return <FormControl>this.autenticacaoForm.get("email");
   }

   get password(): FormControl {
     return <FormControl>this.autenticacaoForm.get("password");
   }

}

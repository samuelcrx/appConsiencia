import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { ToastOptions } from '@ionic/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //Começar a fazer a validação do login e senha

  autenticacaoForm: FormGroup; //Validações feitas pelo angular, em JavaScript, ou seja, o angular

  //configuração que define se a ação é cadastro de nova conta ou login
  configs = { //Array
    ehLogin: true, //Indica se estamos executando login(true) ou nova conta(false)
    acaoPrimaria: 'Login', //rótulo deo botão de ação primária
    acaoSecundaria: 'Criar conta' //rótulo do botão da ação secundária
  };

  private nomeTemp:String;

  //criando validador do campo nome
  private nomeControll = new FormControl('', [Validators.required, Validators.minLength(3)]);

  //FormBuilder é um construtor de formularios
  constructor(private servicoAutenticacao:AutenticacaoService ,
    private fb: FormBuilder, private loadingCtrl: LoadingController, 
    private toastCtrl: ToastController) { }

  ngOnInit() { //Após fazer os metodos, ao criar minha pagina esse é o primeiro método que ira inicializar
    //chamamos o método no init, pois se chamarmos no construtor o HTML ainda não tera sido inicializado
    this.createForm();
  }

  //Cria o metodo
  private createForm(): void { //Declaração de um metodo dentro do angular, retorno é feito na frente do encapsulamento
    //criar o formulario
    this.autenticacaoForm = this.fb.group({
      //criar um array e colocar os validadores
      //primeiro parametro é o valor inicial do input, 1 array após o '' = val. sincrona, o próximo é assincrona
      email: ['',
        [
          Validators.required,
          Validators.email
        ]],
        password:['',
        [
          Validators.required,
          Validators.minLength(6)
        ]]
        //minLengh é a quantidade de caracteres digitada na senha
     });
  }


  async onSubmit(provedor:string):Promise<void>{

    console.log("autenticacaoForm", this.autenticacaoForm.value);

    const loading = await this.loading();

    if (this.configs.ehLogin) {
      this.nomeTemp = "";
    }else {
      this.nomeTemp = this.autenticacaoForm.get('nome').value;
    }
    try {

      const credencial = await this.servicoAutenticacao.autenticacao(this.configs.ehLogin,
        this.nomeTemp.valueOf(),
        this.autenticacaoForm.get('email').value,
        this.autenticacaoForm.get('password').value
        );

        console.log("Sucesso! Credencial", credencial);
        console.log("redirecionando....");
      
    } catch (e) {

      console.log("Ocorreu o seguinte erro: ", e);

      await this.toast({
        message: e.message
      });
      
    }finally {
      loading.dismiss();
    }
    
  }

  alternaTela():void{
    this.configs.ehLogin = !this.configs.ehLogin; //Colocando o login como falso
    
    if(this.configs.ehLogin) {
      this.configs.acaoPrimaria = 'Login';
      this.configs.acaoSecundaria  ='Criar conta';
      //removendo as validações do campo nome, pq se não remover, quando for fazer o login vai informar que o campo nome é obrigatório
      this.autenticacaoForm.removeControl('nome');
    } else {
      //parametro ehLogin = false ... 'estou na pagina de cadastro'

      //adicionando validador para o campo nome no controlador do formulario
      this.autenticacaoForm.addControl('nome', this.nomeControll);
      this.configs.acaoPrimaria = 'Cadastrar';
      this.configs.acaoSecundaria = 'Já possuo uma conta'
    }
  }

  get email(): FormControl {
   return <FormControl>this.autenticacaoForm.get("email");
  }
  
  get password(): FormControl {
   return <FormControl>this.autenticacaoForm.get("password");
  }

  get nome(): FormControl {
    return <FormControl> this.autenticacaoForm.get('nome'); //recupera do formControlName="nome" do html
  }

  // Criar e executar o loading e o toast

  async loading():Promise<HTMLIonLoadingElement>{

    const loading = await this.loadingCtrl.create({ 
      message: 'Autenticando...'
     });
     await loading.present();

     return loading;
  }

  async toast(options?: ToastOptions): Promise<HTMLIonToastElement>{
    const toast = await this.toastCtrl.create({
      position: 'middle',
      message: 'Usuario ou senha incorretos',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'Ok',
      ...options
    });
    await toast.present();

    return toast;
  }
}

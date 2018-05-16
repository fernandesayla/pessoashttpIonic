import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PessoasProvider } from  '../../providers/pessoas/pessoas'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   private pessoas;

  constructor(public navCtrl: NavController, private pessoasProv: PessoasProvider) {

      this.loadPessoas();
      console.log(this.pessoas)
  }

  loadPessoas(){
    this.pessoasProv.load().then(data => {
      this.pessoas = data;
    })
  }
}

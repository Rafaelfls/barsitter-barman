import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DrinksPage } from '../drinks/drinks';
import { Drink } from '../../model/drink/drink.model';
import{ Request } from '../../model/request/request.model';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  user: any;

  request: Request = {
    name: '',
    descricao:'',
    nameClient:'',
    drinkImagem:'',
    drinkReady: false,
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  goToDrinks(){
    let usuario = this.request.nameClient;
    if(usuario != "" ){
      this.navCtrl.push(DrinksPage,{usuario});
      console.log("Nome do usuario= " , usuario, " e request => ", this.request.nameClient);
    }    
  }
  // saveClientName(){
  //   let user2 = this.user;
  //   return user2;
  // }
}

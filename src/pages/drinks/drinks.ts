import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';


import {MainPage} from '../main/main';

import { DrinksListServices } from '../../services/drinks-list/drinks-list.services';
import { Observable } from 'rxjs/Observable';
import { Drink } from '../../model/drink/drink.model';
import {Request } from "../../model/request/request.model";
import { RequestListServices } from '../../services/request-drinks/request-list.services';

/**
 * Generated class for the DrinksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drinks',
  templateUrl: 'drinks.html',
})
export class DrinksPage {

  drinksList$: Observable<Drink[]>;
  request : any;
  
  drink: Drink ={
    name: '',
    descricao: '',
    nameClient:'',
    drinkImagem:'',
    drinkReady: false,
  }
  imagem = this.drink.drinkImagem;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, private requesting: RequestListServices,  private drinking: DrinksListServices, public loadingController : LoadingController) {
    let nome = this.navParams.get('usuario');
    let loader = this.loadingController.create({content: "Getting drinks..."});
    loader.present().then(()=>{
      this.drinksList$ = this.drinking
      .getDrinkList()
      .snapshotChanges()
      .map(
        changes =>{
          return changes.map(c=>({
            key: c.payload.key,
            ...c.payload.val(),
          }));
        });
       
    });
    loader.dismiss();    
  }


  // ionViewDidLoad(){
  //   let nome = this.navParams.get('usuario');
  //   // this.filtraDrink = this.navParams.get('drinkPronto');
  //   let loader = this.loadingController.create({content: "Getting drinks..."});
  //   loader.present().then(()=>{
  //     this.drinksList$ = this.drinking
  //     .getDrinkList()
  //     .snapshotChanges()
  //     .map(
  //       changes =>{
  //         return changes.map(c=>({
  //           key: c.payload.key,
  //           ...c.payload.val(),
  //         }));
  //       });
       
  //   });
  //   loader.dismiss(); 
  // }
  
  presentConfirm(drink:Drink) {
    let alert = this.alertCtrl.create({
      title: drink.name,
      message: drink.descricao,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Request',
          handler: () => {
            drink.nameClient = this.navParams.get('usuario');
            this.requesting.requestDrink(drink);
            console.log("teste" + drink.nameClient);
          }
        }
      ]
    });
    alert.present();
  }
}


  
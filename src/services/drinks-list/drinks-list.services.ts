import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Drink } from "../../model/drink/drink.model";

@Injectable()
export class DrinksListServices{

    private drinksListRef = this.db.list<Drink>('drinks-list');

    constructor(private db: AngularFireDatabase){

    }

    getDrinkList(){
        return this.drinksListRef;
    }

    addDrink(drink: Drink){
        return this.drinksListRef.push(drink);
    }
}
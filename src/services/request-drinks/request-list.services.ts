import {Injectable} from "@angular/core";
import {Http, Response } from "@angular/http"
import { AngularFireDatabase } from "angularfire2/database";
import { Drink } from "../../model/drink/drink.model";
import {Request } from "../../model/request/request.model"

import {MainPage} from "../../pages/main/main";

@Injectable()
export class RequestListServices{
    private requestListRef = this.db.list<Drink>('request-list');
    private baseUrl = "https://barsitter-final.firebaseio.com/";

    constructor(private http:Http, private db:AngularFireDatabase){}

    getRequestList(){
        return this.requestListRef;
    }
    
    requestDrink(request:Request){
        return this.requestListRef.push(request);
    }
    // setClientName(request:Request){
    //     return this.request.nameClient = 
    // }

    // getAllRequests(){
    //     return new Promise(resolve=>{this.http.get(`${this.baseUrl}/request-list.json`).subscribe(res => resolve(res.json()))});
    // }
}
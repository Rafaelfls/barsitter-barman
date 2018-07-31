import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import { DrinksPage } from '../pages/drinks/drinks';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import{AngularFireModule} from'angularfire2';

import { FIREBASE_CONFIG } from './firebase.credentials';
import{AngularFireDatabaseModule} from 'angularfire2/database';
import { DrinksListServices } from '../services/drinks-list/drinks-list.services';
import { ToastSevice } from '../services/toast/toast.service';
import { RequestListServices } from '../services/request-drinks/request-list.services';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    DrinksPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    DrinksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ToastSevice,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DrinksListServices,
    RequestListServices
  ]
})
export class AppModule {}

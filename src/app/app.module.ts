import { EsqueciSenhaPageModule } from './../pages/esqueci-senha/esqueci-senha.module';
import { EsqueciSenhaPage } from './../pages/esqueci-senha/esqueci-senha';
import { LoginPageModule } from './../pages/login/login.module';
import { LoginPage } from './../pages/login/login';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Config } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ConsultacepProvider } from '../providers/consultacep/consultacep';
import { CadastroPageModule } from '../pages/cadastro/cadastro.module';
import { AboutPage } from '../pages/about/about';
import { ConfigPage } from '../pages/config/config';
import { PesquisaPage } from '../pages/pesquisa/pesquisa';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    CadastroPage,
    EsqueciSenhaPage,
    ConfigPage,
    PesquisaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    CadastroPage,
    EsqueciSenhaPage,
    ConfigPage,
    PesquisaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConsultacepProvider
  ]
})
export class AppModule {}

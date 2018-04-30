import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController) {

  }

  verDetalhesServico() {
    let alert = this.alertCtrl.create({
      title:'Serviços Agendados',
      subTitle:'Nome estabelecimento: '/* + this.algumaCoisa*/,
      message:'<p>Tipo Serviço: '/* + this.algumaCoisa*/+'<p>Data e Hora: ',
      buttons: ['Cancelar']
    });
    alert.present();
  }

  verDetalhesHistorico() {
    let alert = this.alertCtrl.create({
      title:'Serviços Agendados',
      subTitle:'Nome estabelecimento: '/* + this.algumaCoisa*/,
      message:'<p>Tipo Serviço: '/* + this.algumaCoisa*/+'<p>Data e Hora: ',
      buttons: ['Cancelar']
    });
    alert.present();
  }

}

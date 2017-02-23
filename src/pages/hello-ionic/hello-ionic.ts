import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public alertCtrl: AlertController) {

  }

    showAlert() {
    let alert = this.alertCtrl.create({
      title: 'NO PODES',
      subTitle: 'No va a tocar God Head, NO PODES!',
      buttons: ['OK']
    });
    alert.present();
  }
}



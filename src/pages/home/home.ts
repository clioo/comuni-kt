import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { IonicStorageModule } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  phoneNumber = '668832738'
  constructor(public navCtrl: NavController,public call:CallNumber) {
  }
  public llamar(){
    this.call.callNumber(String(this.phoneNumber), true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));   

  }

}

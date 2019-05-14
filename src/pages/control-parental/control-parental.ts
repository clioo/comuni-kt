import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { AgregarTutorPage } from '../agregar-tutor/agregar-tutor';
/**
 * Generated class for the ControlParentalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-control-parental',
  templateUrl: 'control-parental.html',
})
export class ControlParentalPage {
  @ViewChild(Nav) nav: Nav;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  pages = {
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ControlParentalPage');
  }
  agregarTutor(){
    this.navCtrl.push(AgregarTutorPage);
  }
  
}

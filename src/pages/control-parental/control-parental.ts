import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { AgregarTutorPage } from '../agregar-tutor/agregar-tutor';
import { CambiarContrasenaPage } from '../cambiar-contrasena/cambiar-contrasena';
import { CambiarTutorPage } from '../cambiar-tutor/cambiar-tutor';
import { Interface } from 'readline';


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
  public pages = [
    {title: 'Agregar tutor', page:AgregarTutorPage},
    {title: 'Cambiar contraseña', page:CambiarContrasenaPage},
    {title: 'Modificar tutor', page:CambiarTutorPage}
  ]
  ionViewDidLoad() {
    console.log('ionViewDidLoad ControlParentalPage');
  }
  pushPage(pageObject:any){
    this.navCtrl.push(pageObject.page);
  }
  
}

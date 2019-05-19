import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';

/**
 * Generated class for the CambiarContrasenaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cambiar-contrasena',
  templateUrl: 'cambiar-contrasena.html',
})
export class CambiarContrasenaPage {
  public pass;
  public pass2;
  public newPass;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage:LocalStorageProvider) {
  }
  changePassword(){
    console.log(this.pass,this.pass2,this.newPass)
    this.storage.getPassPromise().then(data=>{
      if (this.pass == this.pass2 && this.pass==data) {
        this.storage.changePassword(this.newPass).then(()=>{
          alert('Contraseña cambiada');
          this.navCtrl.pop();
        });
      }else{
        alert('Error en credenciales');
      }
    })
 
   
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CambiarContrasenaPage');
  }

}

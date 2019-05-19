import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { User } from '../../providers/local-storage/User';
import { ModificarTutorPage } from '../modificar-tutor/modificar-tutor';


/**
 * Generated class for the CambiarTutorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cambiar-tutor',
  templateUrl: 'cambiar-tutor.html',
})
export class CambiarTutorPage {
  public tutores:User[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:LocalStorageProvider) {
    this.tutores = storage.getUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CambiarTutorPage');
  }

  public modificarTutor(i:number){
    this.navCtrl.push(ModificarTutorPage,{
      tutores:this.tutores,
      index:i
    })
  }

  public eliminarTutor(i:number){
    this.tutores.splice(i,1);
    this.storage.UpdateTutores(this.tutores);
  }

}

import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { Camera, CameraOptions } from '@ionic-native/camera';
//provider
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
// interface
import { User } from '../../providers/local-storage/User';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  //Lista donde starán todas las personas
  list:any[] = [];
  objeto:Object;
  public users:User[] = [];    
  public usersExist = false;
  constructor(public navCtrl: NavController,public call:CallNumber, private storage:LocalStorageProvider, private camera:Camera) {
    storage.getPass();
    
    setTimeout(() => {
      this.users = storage.getUsers(); 
      this.usersExist = true;
    }, 2000);
  }
  




  public llamar(telefono:any){
    this.call.callNumber(String(telefono), true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));   

  }

}

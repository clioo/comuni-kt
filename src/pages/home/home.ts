import { Component, AfterViewChecked, OnInit } from '@angular/core';
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
export class HomePage implements AfterViewChecked{
  //Lista donde starán todas las personas
  list:any[] = [];

  phoneNumber = '668832738'
  objeto:Object;
  users:User[] = [];    
  constructor(public navCtrl: NavController,public call:CallNumber, private storage:LocalStorageProvider, private camera:Camera) {
    storage.getPass();
    this.users = storage.getUsers();
    alert(this.users);
    // for (let i = 0; i < 3; i++) {
    //   let user = {
    //     nombre:'chicho',
    //     imagen:'ruta',
    //     color:'azul'
    //   }
    //   this.list[i] = user;
      
    // }
    //Guardamos en local storage la cadena de JSON
    // storage.set('usuarios', JSON.stringify(this.list));
  }

  public consultar(){
    // this.storage.get('usuarios').then((val:any)=>{
    //   //tomamos la string y la convertimos en un arreglo de JSON
    //  let objetos = JSON.parse(val);
    //  for (let i = 0; i < objetos.length; i++) {
    //    const elemento = objetos[i];
    //    alert(elemento.nombre)
    //  }
     
    // })
    alert(this.users)
  }

ngAfterViewChecked(): void {
  this.users = this.storage.users;    

  
}

  public llamar(telefono:any){
    this.call.callNumber(String(telefono), true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));   

  }

}

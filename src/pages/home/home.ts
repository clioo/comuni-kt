import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //Lista donde starán todas las personas
  list:any[] = [];

  phoneNumber = '668832738'
  objeto:Object;
  constructor(public navCtrl: NavController,public call:CallNumber, private storage:Storage, private camera:Camera) {
    storage.get('sdfsdfdsf').then((val:any)=>{
      if (val == null) {
        storage.set('pass','123')
      }
    })
    
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
  public getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 100,
      targetHeight: 100,
      quality: 100,
      sourceType:2
    }
    this.camera.getPicture( options )
    .then(imageData => {
      alert(`data:image/jpeg;base64,${imageData}`);
      console.log('hola chicho puto');
    })
    .catch(error =>{
      console.error( error );
    });
    
}

  public consultar(){
    this.storage.get('usuarios').then((val:any)=>{
      //tomamos la string y la convertimos en un arreglo de JSON
     let objetos = JSON.parse(val);
     for (let i = 0; i < objetos.length; i++) {
       const elemento = objetos[i];
       alert(elemento.nombre)
     }
     
    })
  }

  public llamar(){
    this.call.callNumber(String(this.phoneNumber), true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));   

  }

}

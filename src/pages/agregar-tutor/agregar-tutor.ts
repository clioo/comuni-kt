import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
//provider
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
// interface
import { User } from '../../providers/local-storage/User';
/**
 * Generated class for the AgregarTutorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar-tutor',
  templateUrl: 'agregar-tutor.html',
})
export class AgregarTutorPage {
  public foto:any;
  public colores = [
    {value:'borde-azul',nombre:'Azul'},
    {value:'borde-rojo',nombre:'Rojo'},
    {value:'borde-amarillo',nombre:'Amarillo'},
    {value:'borde-negro',nombre:'Negro'},
    {value:'borde-verde',nombre:'Verde'}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams, public camera:Camera, private storage:LocalStorageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarTutorPage');
  }

  //take Photo
  public takePhoto() {
      const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        sourceType:0,
      }
  
      this.camera.getPicture(options).then((imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.foto=base64Image;
      }, (err) => {
        alert(err);
      });
  }
  createUser(forma:any): void {
    if (forma.valid) {
      if (this.foto) {
        let objeto:User = {
          id: this.storage.getId(),
          nombre:forma.controls.nombre.value,
          celular:forma.controls.telefono.value,
          foto:this.foto,
          color:forma.controls.color.value
        }
        this.storage.newUser(objeto);
      }else{
        alert('Se requiere seleccionar foto');
      }

    }

  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers/local-storage/User';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the ModificarTutorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modificar-tutor',
  templateUrl: 'modificar-tutor.html',
})
export class ModificarTutorPage {
  public tutores:User[] = [];
  public indexTutor:number;
  public usuario:User;
  public colores = [
    {value:'borde-azul',nombre:'Azul'},
    {value:'borde-rojo',nombre:'Rojo'},
    {value:'borde-amarillo',nombre:'Amarillo'},
    {value:'borde-negro',nombre:'Negro'},
    {value:'borde-verde',nombre:'Verde'}
  ]
  constructor(public camera:Camera,public navCtrl: NavController, public navParams: NavParams, 
    public storage:LocalStorageProvider) {
    this.tutores = navParams.get('tutores');
    this.indexTutor = navParams.get('index');
    this.usuario =  this.tutores[this.indexTutor];
    console.log(this.usuario);
  }
  modificar(forma:any): void {
    if (forma.valid) {
      // if (this.foto) {
      if (this.usuario.foto) {
        let objeto:User = {
          id: this.indexTutor,
          nombre:this.usuario.nombre,
          celular:forma.controls.telefono.value,
          foto:this.usuario.foto,
          color:forma.controls.color.value
        }
        this.tutores[this.indexTutor] = objeto
        this.storage.UpdateTutores(this.tutores)
        this.navCtrl.pop();
      }else{
        alert('Se requiere seleccionar foto');
      }

    }
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
      this.usuario.foto=base64Image;
    }, (err) => {
      alert(err);
    });
}



}

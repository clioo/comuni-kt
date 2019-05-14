import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public camera:Camera) {
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
}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

//pages
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ControlParentalPage } from '../pages/control-parental/control-parental';
import { AgregarTutorPage } from '../pages/agregar-tutor/agregar-tutor';
import { CambiarContrasenaPage } from '../pages/cambiar-contrasena/cambiar-contrasena';
import { CambiarTutorPage } from '../pages/cambiar-tutor/cambiar-tutor';
import { ModificarTutorPage } from '../pages/modificar-tutor/modificar-tutor';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber } from '@ionic-native/call-number';

import { IonicStorageModule } from '@ionic/storage';

//importamos camara
import { Camera } from '@ionic-native/camera';

//custom providers
import { LocalStorageProvider } from '../providers/local-storage/local-storage';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ControlParentalPage,
    AgregarTutorPage,
    CambiarContrasenaPage,
    CambiarTutorPage,
    ModificarTutorPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ControlParentalPage,
    AgregarTutorPage,
    CambiarContrasenaPage,
    CambiarTutorPage,
    ModificarTutorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    LocalStorageProvider,
  ]
})
export class AppModule {}

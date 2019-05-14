import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarTutorPage } from './agregar-tutor';

@NgModule({
  declarations: [
    AgregarTutorPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarTutorPage),
  ],
})
export class AgregarTutorPageModule {}


import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from './User';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the LocalStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalStorageProvider {
  public users:User[] = [];
  constructor(private storage:Storage) {
    storage.get('users').then((data:any)=>{
     if (data !=  null) {
      this.users = JSON.parse(data);
     }
    
    })
    .catch(err=>{
      alert(err + ', mándenle al chicho captura de esto');
    })
  }
  public iterar(){
    for (let i = 0; i < this.users.length; i++) {
      const element = this.users[i];
      alert(element);
    }
  }
  public getUsers(){
    return this.users;
  }
  public newUser(user:User){
    this.users.push(user);
    this.save();
  }
  //guarda los cambios en el objeto JSON
  private save(){
    //hacemos el JSON una cadena para poder ser guardada en local storage
    this.storage.set('users',JSON.stringify(this.users)).then(data=>{
      alert(data);
    }).catch(err=>{
      alert(err);
    })
  }
  //obtiene el ID del usuario, el cual es el número siguiente del mayor
  public getId(){
    if (this.users == null || this.users.length == 0) {
      return 1;

    }
    let numbers:number[] = [];
    let maximo:number;
    for (let i = 0; i < this.users.length; i++) {
      numbers.push(this.users[i].id); 
    }
    maximo = Math.max.apply(null,numbers);
    return maximo + 1;
  
  }
  public getPass(){
    let pass;
    this.storage.get('pass').then(data=>{
      if (data == null) {
        this.storage.set('pass','123');
        pass = '123';
      }else{
        pass = data;
      }
    
        
      
    })
    return pass;
  }


}

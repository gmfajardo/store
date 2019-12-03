import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }
  createUser(email: string, pass: string){
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email,pass);
  }
  login(email:string, pass:string){
    console.log('Pass: ' + pass);
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, pass);
  }
  logout() {
    return this.angularFireAuth.auth.signOut();
  }
  hasUser() {
    return this.angularFireAuth.authState;
  }
}

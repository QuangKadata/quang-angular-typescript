import { Component } from '@angular/core';
import { FirebaseService } from './services/Firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quang-angular-app';

  isSignedIn = false;

  constructor(public FirebaseService : FirebaseService){}
  ngOnInit(){
    if (localStorage.getItem('user')  !== null) {
      this.isSignedIn = true
    } else
    this.isSignedIn = false
  }
  async onSignUp(email: string , password : string) {
    await this.FirebaseService.signup(email,password)
    if (this.FirebaseService.isLoggedIn) {
      this.isSignedIn = true
    }
  }
  async onSignIn(email: string , password : string) {
    await this.FirebaseService.signin(email,password)
    if (this.FirebaseService.isLoggedIn) {
      this.isSignedIn = true
    }
  }
  handleLogout(){
    this.isSignedIn = false
  }
}

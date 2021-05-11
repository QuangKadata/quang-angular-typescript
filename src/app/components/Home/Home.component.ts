import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from 'src/app/services/Firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseServices : FirebaseService) { }

  ngOnInit() {

  }
  logout(){
    this.firebaseServices.logout()
    this.isLogout.emit()
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/Home/Home.component';
import { NavbarComponent } from './components/Navbar/Navbar.component';
import { RightContainerComponent } from './components/RightContainer/RightContainer.component';
import { LeftContainerComponent } from './components/LeftContainer/LeftContainer.component';
import { HttpClientModule } from '@angular/common/http';
import { AddNewProductComponent } from './components/AddNewProduct/AddNewProduct.component';
import { DashboardComponent } from './components/Dashboard/Dashboard.component';
import { PurchaseOrdersComponent } from './components/PurchaseOrders/PurchaseOrders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RightContainerComponent,
    LeftContainerComponent,
    AddNewProductComponent,
    DashboardComponent,
    PurchaseOrdersComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/Dashboard/Dashboard.component';
import { HomeComponent } from './components/Home/Home.component';
import { LoginComponent } from './components/Login/Login.component';
import { PurchaseOrdersComponent } from './components/PurchaseOrders/PurchaseOrders.component';

const routes: Routes = [
  {path: '',redirectTo: 'login',pathMatch: 'full'},
  {path: 'login',component: LoginComponent},
  {path: 'home',component: HomeComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'purchase-orders',component: PurchaseOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

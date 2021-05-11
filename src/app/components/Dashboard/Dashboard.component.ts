import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/Products';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listdata:any = [[]];
  constructor(private client : HttpClient) { }
  ngOnInit(){
    this.client.get<Products>(environment.apiUrl + '/movies')
      .subscribe((data: any) => {
        console.log(data);
        this.listdata = data;
      });
  }

}

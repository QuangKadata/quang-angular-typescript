import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/Products';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-RightContainer',
  templateUrl: './RightContainer.component.html',
  styleUrls: ['./RightContainer.component.css']
})


export class RightContainerComponent implements OnInit {
  listdata:any = [[]];
  constructor(private client : HttpClient) { }
  ngOnInit(){
    this.client.get<Products>(environment.apiUrl + '/products')
      .subscribe((data: any) => {
        console.log(data);
        this.listdata = data;
      });
  }

}

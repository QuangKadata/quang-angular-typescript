import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/Products';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-AddNewProduct',
  templateUrl: './AddNewProduct.component.html',
  styleUrls: ['./AddNewProduct.component.css']
})
export class AddNewProductComponent implements OnInit {

  private apiUrl = environment.apiUrl + '/products';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.post<Products>(this.apiUrl,Headers).subscribe(data =>{
      console.log('it word for add product')
    })
  }

}

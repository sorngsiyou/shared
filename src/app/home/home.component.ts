import { Component } from '@angular/core';
import { AlsertSmsService } from '../Services/alsert-sms.service';
import { AddItemsService } from '../Services/add-items.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myname="SORNG SIYOU";
  onClickShowIt(){
    const serviceSms=new AlsertSmsService();
    serviceSms.clickShowSms(this.myname);
  }

  items:string[]=[];
  newItem:string='';

  constructor(private itemservice: AddItemsService){
    this.items=this.itemservice.getItem();
  }

  addItem(){
    this.itemservice.addItem(this.newItem);
    this.newItem='';
  }


}

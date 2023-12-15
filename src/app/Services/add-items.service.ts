import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddItemsService {


  constructor() { }

  private items:string[]=[];

  getItem(): string[]{
    return this.items;
  }

  addItem(item:string){
    this.items.push(item);
  }


}

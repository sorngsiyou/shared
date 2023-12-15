import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlsertSmsService {

  constructor() { }

  clickShowSms(yourText:string){
    alert('Hello '+yourText+', How Are you?')
  }

}

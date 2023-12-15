import { Component } from '@angular/core';
import { AlsertSmsService } from '../Services/alsert-sms.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  thebestName="Testing";
  toShow(){
    const sms=new AlsertSmsService();
    sms.clickShowSms(this.thebestName);
  }

}

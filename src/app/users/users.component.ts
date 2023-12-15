import { GetUserService } from './../Services/get-user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent{
  constructor(private alluser:GetUserService){

  }
  ngOnInit(): void {
    this.fetchAllUsers();
  }
  users:any[]=[];

  fetchAllUsers(){
    this.alluser.getAllUser().subscribe((data)=>{
      this.users=data;
    }),
    (error: any) => {
      console.error('Error fetching users:', error);
    }
  }
}

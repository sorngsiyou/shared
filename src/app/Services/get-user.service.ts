import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  private apiUrl='https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient) { }
  getAllUser():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseApiUrl = "https://localhost:44348/api/UserRegistration/Create"
  constructor(private http:HttpClient) { }

  saveUserDetails(obj:any){
    const headers = new HttpHeaders();
     headers.set('Content-Type', 'application/json');
    return this.http.post<any>(this.baseApiUrl , obj)
  }
}

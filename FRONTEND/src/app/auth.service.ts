import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _router: any;
userVerify(userData:any)
{
  return this.http.post<any>("http://localhost:3000/login",userData)
  
}
  constructor(private http:HttpClient) { }
  loggedIn()
{
  return !!localStorage.getItem('token')
}
getToken(){
  return localStorage.getItem('token')
}

}


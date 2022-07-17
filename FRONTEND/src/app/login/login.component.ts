import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userData={username: '',
        password: ''};
  constructor(private _auth:AuthService, private _router:Router) {}
  userVerify()
  {
    this._auth.userVerify(this.userData)
    .subscribe(res=>{
      localStorage.setItem('token',res.token)
      this._router.navigate(['/books'])
    })
  }
  ngOnInit(): void {
    
  }

}



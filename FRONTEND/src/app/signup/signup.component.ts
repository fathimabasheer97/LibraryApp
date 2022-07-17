import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  User={name: '',
        username: '',
        password: ''};
  userVerify()
  {
    alert("Login Success");
  }

  
  ngOnInit(): void {
  }

}

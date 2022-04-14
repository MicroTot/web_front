import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message:any;
  form!: FormGroup

  constructor(
    private http:HttpClient,
    private formBuilder: FormBuilder,
    private auth:AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  
  login(){
    const data = this.form.getRawValue()
    this.auth.loginService(data).subscribe((res:any)=>(
      res
    ),
    (errr:any)=>(
      this.message = "invalid credentials provided!"
    ))
  }

}

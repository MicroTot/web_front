import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uname:any;
  upass:any;

  constructor(
    private http:HttpClient,
    private route:Router
  ) { }

  loginService(data:any):Observable<any>{
    return this.http.post("http://127.0.0.1:8000/api-token-auth/", data)
    .pipe((map((res:any)=>{
      localStorage.setItem("tkn", res.token)
      this.uname = data.username
      this.upass = data.password
      const ecode = btoa(this.uname+":"+this.upass)
      localStorage.setItem("uid", ecode)
      localStorage.setItem("isAuth", "true")
      this.route.navigate(['home'])
    },
    (err:any)=>{
      localStorage.setItem("isAuth", "false")
    }
    )))
  }
}

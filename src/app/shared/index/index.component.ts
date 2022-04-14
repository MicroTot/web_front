import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/services/logout.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  user_data:any;

  constructor(
    private http:HttpClient,
    private l_out:LogoutService
  ) { }

  ngOnInit(): void {
    this.getUserData()
  }

  getUserData(){
    this.http.get("http://localhost:8000/user_dets")
    .subscribe((response:any)=>{
      this.user_data = response
      console.log(response)
    })
  }

  logoutUser(){
    this.l_out.logout()
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(
    public rte:Router
  ) { }

  logout(){
    localStorage.clear()
    sessionStorage.clear()
    this.rte.navigate([''])
  }
}

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private route:Router,
    private snack:MatSnackBar
  ){}

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token:any = localStorage.getItem('tkn'); // get token from local storage
      const token2:any = localStorage.getItem("uid")
      const token3:any = localStorage.getItem("isAuth")
      if (!token || !token2 || token3 == "false"){
        this.route.navigate(['']);
        this.snack.open("Kindly Log in", "X", {
          panelClass: "red",
          duration: 1000,
        });
        // go to login if not authenticated
        return true;
      }
      return true;
  }
}
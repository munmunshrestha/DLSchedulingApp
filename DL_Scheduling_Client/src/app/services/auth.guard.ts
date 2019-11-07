import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { UserService } from "./user.service";
import { map } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private auth: AuthService,
    private router: Router,
    private user: UserService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): boolean {
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isLoggedIn) {
      //might be logged in when refreshed
      return true;
      //   // this.router.navigate(['login'])
    }
    return this.user.isLoggedIn().pipe(
      map(res => {
        if (res.status) {
          this.auth.setLoggedIn(true);
          return true;
        } else {
          this.router.navigate(["login"]);
          return false;
        }
      })
    );
  }
  // return this.auth.isLoggedIn;

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}

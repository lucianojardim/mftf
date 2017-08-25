import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

import {UserService} from './user/user.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private _userSerivce: UserService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._userSerivce.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          if (authenticated) {
            return true;
          } else {
            this._router.navigate(['/']);
            return false;
          }
        }
      );
  }
}

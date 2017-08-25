import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../../shared/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _userService: UserService, private _router: Router) {
  }

  ngOnInit() {
  }

  getUserInformationByEmailAddress(emailAddress: string) {
    // this._userService.setCurrentUser(emailAddress);
    this._router.navigate(['/students'])
      .then()
      .catch();
  }
}

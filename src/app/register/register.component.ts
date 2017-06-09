import { Component, OnInit } from '@angular/core';
import { User } from "app/user";
import { UserService } from "app/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ UserService ],

})
export class RegisterComponent implements OnInit {

  users: User[];
  errorMessage: string;
  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitAddUser(user: User) {
    if (!user) { return; }
    this._userService.addUser(user)
      .subscribe(
      newUser => this.users.push(newUser),
      error => this.errorMessage = <any>error);
    alert('success!')
    this.router.navigate(['/']);
  }

  goToHomePage() {
    this.router.navigate(['/']);
  }
}

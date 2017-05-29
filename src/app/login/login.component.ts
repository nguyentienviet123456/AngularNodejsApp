import { Component,OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 email = "nguyentienviet";
 password = "123456";
 emailWrong ="notvietatall";
 passowrdWrong = "123456";


  constructor() { }

  ngOnInit() {
  }

}

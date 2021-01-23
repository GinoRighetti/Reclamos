import { Component, OnInit } from '@angular/core';
import { userInfo } from 'os';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  acceder(usuario: string){
    console.log(usuario)
   
  }

}

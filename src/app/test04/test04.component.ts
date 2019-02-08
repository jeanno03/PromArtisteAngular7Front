import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JwtService } from 'src/services/jwt.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-test04',
  templateUrl: './test04.component.html',
  styleUrls: ['./test04.component.scss']
})

//https://appdividend.com/2018/10/24/angular-7-forms-tutorial-example/
export class Test04Component implements OnInit {
  email = new FormControl('');
  password = new FormControl('');
  headers:HttpHeaders;
  token: any;
  constructor(
    private jwtService: JwtService
  ) { }

  ngOnInit() {
  }

  updateEmail() {
    this.email.setValue('jean@jean.com');
  }

  submitConnexion() {
    console.log("email : " + this.email.value);
    console.log("password : " + this.password.value);
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('email', this.email.value);
    this.headers.append('mdp', this.password.value);
    this.jwtService.toConnectJwtTest().subscribe(data => {
      this.token = data;
      console.log("token : " + this.token.token);
    },err=>{
      console.log(err);
    })
  };

}



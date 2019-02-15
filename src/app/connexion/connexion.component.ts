import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyUser } from 'src/model-interfaces/my-user';
import { TestService } from 'src/services/test.service';
import { FormControl } from '@angular/forms';
import { JwtService } from 'src/services/jwt.service';
import { Credential } from 'src/model-classes/credential';
import * as moment from "moment";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');
  token: any;
  credential: Credential;

  errorMessage: string;

  constructor(
    private jwtService: JwtService
  ) { }

  ngOnInit() {
  }
  //https://stackblitz.com/edit/angular-6-jwt-authentication-example?file=app%2F_services%2Fauthentication.service.ts
  //phou.jeannory@gmail.com 12345678
  submitConnexion() {

    //ok but test other
    // this.credential = new Credential (this.email.value, this.password.value);
    // this.jwtService.toConnectJwtPost(this.credential)
    // .subscribe(data => {
    //   this.token = data;
    //   console.log("token : " + this.token.token);
    // },err=>{
    //   console.log(err);
    // })
    //https://code.tutsplus.com/tutorials/jwt-authentication-in-angular--cms-32006

    //other ok but test other again
    this.credential = new Credential(this.email.value, this.password.value);
    this.jwtService.toConnectJwtPost(this.credential)
      .subscribe((resp: any) => {
        localStorage.setItem('token', resp.token);
        console.log("localStorage.getItem('token') : " + localStorage.getItem('token'));

      }, err => {
        console.log(err);
      })

  };


  logout() {
    localStorage.removeItem('token');
  }


}
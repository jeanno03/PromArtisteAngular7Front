import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyUser } from 'src/model-interfaces/my-user';
import { TestService } from 'src/services/test.service';
import { FormControl } from '@angular/forms';
import { JwtService } from 'src/services/jwt.service';
import { Credential } from 'src/model-classes/credential';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');
  token: any;
  credential:Credential;

  errorMessage: string;

  constructor(
    private jwtService: JwtService
  ) { }

  ngOnInit() {
  }


  //phou.jeannory@gmail.com 12345678
  submitConnexion() {
    this.credential = new Credential (this.email.value, this.password.value);
    this.jwtService.toConnectJwtPost(this.credential).subscribe(data => {
      this.token = data;
      console.log("token : " + this.token.token);
    },err=>{
      console.log(err);
    })
  };
}
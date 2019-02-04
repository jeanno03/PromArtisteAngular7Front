import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtService } from 'src/services/jwt.service';
import { MyUser } from 'src/model-interfaces/my-user';
import {Credential} from 'src/model-classes/credential';

@Component({
  selector: 'app-test03',
  templateUrl: './test03.component.html',
  styleUrls: ['./test03.component.scss']
})
export class Test03Component implements OnInit {
//npm install --save angular-base64
  signupForm: FormGroup;
  errorMessage: string;
  token:any;
  credential:Credential;

  constructor(
    private formBuilder:FormBuilder,
    private jwtService:JwtService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    })
  }

  createAutorizationHeader(headers:Headers){
    headers.append('email', btoa('jean.jean@gmail.com'));
    headers.append('mdp', btoa('1234'));
      }

  // onSubmit(){
  //   const email = this.signupForm.get('email').value;
  //   const password = this.signupForm.get('password').value;
  //   let headers = new Headers();
  //   this.createAutorizationHeader(headers);
  //   console.log("email : " + headers.get("email"));
  //   console.log("mdp : " + headers.get("mdp"));
  //   this.jwtService.toConnectJwtHeader(headers).subscribe(data=>{
  //     this.token=data;
  //     console.log("token : " + this.token);
  //   },err=>{
  //     console.log(err);
  //   })
  // }

	//jean.jean@gmail.com 12345678
  onSubmit(){
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    console.log("email : " + email);
    console.log("password : " + password);
    this.credential = new Credential(email, password);
    console.log("this.credential .email : " + this.credential .email);
    console.log("this.credential .mdp): " + this.credential .mdp);
    this.jwtService.toConnectJwtPost(this.credential ).subscribe(data=>{
      this.token=data;
      console.log("token : " + this.token);
    },err=>{
      console.log(err);
    })
  }

}

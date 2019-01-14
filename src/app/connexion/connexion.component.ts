import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyUser } from 'src/model-interfaces/my-user';
import { TestService } from 'src/services/test.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  signupForm: FormGroup;
  errorMessage: string;
  myUserDto: any;
  myUser : MyUser;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private testService: TestService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    this.testService.toConnectMethodGet(email, password).subscribe(data => {
      this.myUserDto = data;
      console.log(this.myUserDto.artistName + " est connecté ");
      this.router.navigate(['/test']);
    }, err => {
      console.log(err);
    })


  }
}
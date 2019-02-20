import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/services/test.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyUserClass } from 'src/model-classes/my-users-class'

@Component({
  selector: 'app-test02',
  templateUrl: './test02.component.html',
  styleUrls: ['./test02.component.scss']
})
export class Test02Component implements OnInit {

  myUsers: Object;
  messageForm: FormGroup;
  createUserGetFrom: FormGroup;
  submitted = false;
  success = false;

  myUserDto: MyUserClass;
  myUserDtoReturn: any;

  constructor(
    private testService: TestService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getMyUsers();
    this.createUserGetFrom = this.formBuilder.group({
      email: ['', Validators.required],
      artistName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    })
  }

  getMyUsers() {
    this.testService.getMyUsers().subscribe(data => {
      this.myUsers = data
    }, err => {
      console.log(err);
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.createUserGetFrom.invalid) {
      return;
    }
    this.myUserDto = new MyUserClass(
      this.createUserGetFrom.controls.email.value,
      this.createUserGetFrom.controls.artistName.value,
      this.createUserGetFrom.controls.firstName.value,
      this.createUserGetFrom.controls.lastName.value
    );
    this.createMyUserModelClassMethodPost()

    this.success = true;
  }

  createMyUserModelClassMethodPost() {
    this.testService.createMyUserModelClassMethodPost(this.myUserDto).subscribe(data => {
      this.myUserDtoReturn = data
      //je réinitialise getMyUsers
      this.getMyUsers();
    }, err => {
      console.log(err);
    })
  }


}

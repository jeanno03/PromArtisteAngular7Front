import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JwtService } from 'src/services/jwt.service';

@Component({
  selector: 'app-test04',
  templateUrl: './test04.component.html',
  styleUrls: ['./test04.component.scss']
})

//https://appdividend.com/2018/10/24/angular-7-forms-tutorial-example/
export class Test04Component implements OnInit {
  email = new FormControl('');
  password = new FormControl('');
  token: any;

  constructor(private jwtService: JwtService) { }

  ngOnInit() {
  }

  updateEmail() {
    this.email.setValue('jean@jean.com');
  }

  submitConnexion() {
    this.jwtService.toConnectJwtHeaderV2(this.email.value, this.password.value).subscribe(data => {
      this.token = data;
      console.log("token : " + this.token.token);
    },err=>{
      console.log(err);
    })
  };

}



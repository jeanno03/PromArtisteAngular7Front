import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtService } from 'src/services/jwt.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public http: HttpClient,
    public jwtService : JwtService
    ) {}


  ngOnInit() {
  }

  public ping() {
    let str1Encode = btoa("token");
    let str2Encode = btoa(this.jwtService.getToken());
    const headers = new HttpHeaders(

      {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials' : 'true',
        'Access-Control-Allow-Methods' : 'GET,HEAD,OPTIONS,POST,PUT',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'token': this.jwtService.getToken(),
        // str1Encode:str2Encode

        
      });
    this.http.get('http://localhost:8080/PromArtisteJEEBack-web/rest/JwtController/getMyUserDto/2', {headers:headers})
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }



}

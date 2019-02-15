import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyUser } from 'src/model-interfaces/my-user';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Credential } from 'src/model-classes/credential';
import { tap } from 'rxjs/operators';
import * as JWT from 'jwt-decode';

//http://jasonwatmore.com/post/2018/11/16/angular-7-jwt-authentication-example-tutorial
//https://scotch.io/@vigneshsithirai/angular-6-7-http-client-interceptor-with-error-handling
//https://stackoverflow.com/questions/53200399/angular-7-not-sending-correct-header-on-request
//solut ==> https://stackoverflow.com/questions/34464108/angular-set-headers-for-every-request
//https://www.techiediaries.com/angular-jwt/
@Injectable({
  providedIn: 'root'
})
export class JwtService {

//https://medium.com/@ryanchenkie_40935/angular-authentication-using-the-http-client-and-http-interceptors-2f9d1540eb8
//en cours
  constructor(private http:HttpClient) { }


toConnectJwtHeader(headers:HttpHeaders){
  return this.http.get('http://localhost:8080/PromArtisteJEEBack-web/rest/JwtController/toConnectJwtHeader', { headers })
}
//ok
toConnectJwtPost(credential:Credential): Observable<Credential> {
  return this.http.post<any>('http://localhost:8080/PromArtisteJEEBack-web/rest/JwtController/toConnectJwtPost', credential)
}

toConnectJwtPost2(credential:Credential): Observable<Credential> {
  return this.http.post<any>('http://localhost:8080/PromArtisteJEEBack-web/rest/JwtController/toConnectJwtPost', credential)
  .pipe(tap(res => {
    localStorage.setItem('token', res.access_token);
}));
}

public getToken(): string {
  return localStorage.getItem('token');
}

toConnectJwtHeaderV2(email:string, password:string){
  const headers = new HttpHeaders(
    {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials' : 'true',
      'Access-Control-Allow-Methods' : 'GET,HEAD,OPTIONS,POST,PUT',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      'email':btoa(email),
      'mdp':btoa(password)
    });

    console.log("email : " + headers.get('email'));
    console.log("mdp : " + headers.get('mdp'));
  return this.http.get<any[]>('http://localhost:8080/PromArtisteJEEBack-web/rest/JwtController/toConnectJwtHeaderV2', { headers:headers});

}

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyUser } from 'src/model-interfaces/my-user';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Credential } from 'src/model-classes/credential';

//http://jasonwatmore.com/post/2018/11/16/angular-7-jwt-authentication-example-tutorial
//https://scotch.io/@vigneshsithirai/angular-6-7-http-client-interceptor-with-error-handling
//https://stackoverflow.com/questions/53200399/angular-7-not-sending-correct-header-on-request
//solut ==> https://stackoverflow.com/questions/34464108/angular-set-headers-for-every-request

@Injectable({
  providedIn: 'root'
})
export class JwtService {


  constructor(private http:HttpClient) { }


toConnectJwtHeader(headers:HttpHeaders){
  return this.http.get('http://localhost:8080/PromArtisteJEEBack-web/rest/JwtController/toConnectJwtHeader', { headers })
}

toConnectJwtPost(credential:Credential): Observable<Credential> {
  return this.http.post<any>('http://localhost:8080/PromArtisteJEEBack-web/rest/JwtController/toConnectJwtPost', credential)
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
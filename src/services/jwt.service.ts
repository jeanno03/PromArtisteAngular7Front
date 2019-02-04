import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyUser } from 'src/model-interfaces/my-user';
import { Observable } from 'rxjs';

//http://jasonwatmore.com/post/2018/11/16/angular-7-jwt-authentication-example-tutorial
//https://scotch.io/@vigneshsithirai/angular-6-7-http-client-interceptor-with-error-handling
//https://stackoverflow.com/questions/53200399/angular-7-not-sending-correct-header-on-request
//solut ==> https://stackoverflow.com/questions/34464108/angular-set-headers-for-every-request

@Injectable({
  providedIn: 'root'
})
export class JwtService {


  constructor(private http:HttpClient) { }


toConnectJwtHeader(headers:Headers){
  return this.http.get('http://localhost:8080/PromArtisteJEEBack-web/rest/JwtController/toConnectJwtHeader')
}

toConnectJwtPost(myUser: MyUser): Observable<MyUser> {
  return this.http.post<any>('http://localhost:8080/PromArtisteJEEBack-web/rest/JwtController/toConnectJwt', myUser)
}


}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { MyUserClass } from 'src/model-classes/my-users-class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TestService {

  constructor(private http: HttpClient) { }

  getMyUsers() {
    return this.http.get('http://localhost:8080/PromArtisteJEEBack-web/rest/TestController/getMyUserDtoList')
  }

  createMyUserModelClassMethodGet(myUserClass: MyUserClass) {
    return this.http.get('http://localhost:8080/PromArtisteJEEBack-web/rest/TestController/saveMyUserGet/'
      + myUserClass.getEmail() + '/' + myUserClass.getArtistName() + '/' + myUserClass.getFirstName() + '/' + myUserClass.getLastName())
  }

  createMyUserModelClassMethodPost(myUserClass: MyUserClass): Observable<MyUserClass> {
    return this.http.post<MyUserClass>('http://localhost:8080/PromArtisteJEEBack-web/rest/TestController/saveMyUserPost/', myUserClass)
  }

}

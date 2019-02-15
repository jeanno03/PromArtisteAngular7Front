import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { JwtService } from 'src/services/jwt.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public jwtService :JwtService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.jwtService.getToken()}`
      }
    });
    console.log("*************** le token : " + this.jwtService.getToken())
    return next.handle(request);
  }
}
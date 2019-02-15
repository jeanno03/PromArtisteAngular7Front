import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TestService } from 'src/services/test.service';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Test02Component } from './test02/test02.component';
import { environment } from 'src/environments/environment.prod';
import { ConnexionComponent } from './connexion/connexion.component';
import { Test03Component } from './test03/test03.component';
import { JwtService } from 'src/services/jwt.service';
import { Test04Component } from './test04/test04.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './../interceptor/tokenInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    TestComponent,
    Test02Component,
    ConnexionComponent,
    Test03Component,
    Test04Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    // <-- Right here
    ReactiveFormsModule,  // <- Add here
    FormsModule,
  ],
  providers: [
    TestService,
    JwtService,
    {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

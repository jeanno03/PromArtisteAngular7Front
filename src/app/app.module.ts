import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { ConnexionComponent } from './connexion/connexion.component';
import { JwtService } from 'src/services/jwt.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './../interceptor/tokenInterceptor';
import { TestService } from 'src/services/test.service';
import { TestComponent } from './test/test/test.component';
import { Test01Component } from './test/test01/test01.component';
import { Test02Component } from './test/test02/test02.component';
import { Test03Component } from './test/test03/test03.component';
import { Test04Component } from './test/test04/test04.component';
import { TestModule } from './test/test.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ConnexionComponent,
    TestComponent,
    Test01Component,
    Test02Component,
    Test03Component,
    Test04Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    // <-- Right here
    ReactiveFormsModule,  // <- Add here
    FormsModule,
    TestModule,
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

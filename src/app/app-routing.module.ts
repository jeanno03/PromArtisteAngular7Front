import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
import { Test02Component } from './test02/test02.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Test03Component } from './test03/test03.component';
import { Test04Component } from './test04/test04.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'test', component: TestComponent },
  { path: 'test02', component: Test02Component },
  { path: 'test03', component:Test03Component },
  { path: 'test04', component:Test04Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { Test01Component } from './test01/test01.component';
import { Test02Component } from './test02/test02.component';
import { Test03Component } from './test03/test03.component';
import { Test04Component } from './test04/test04.component';
import { TestRoutingModule } from './test-routing.module';

@NgModule({
  declarations: [
    // TestComponent,
    // Test01Component,
    // Test02Component,
    // Test03Component,
    // Test04Component
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }

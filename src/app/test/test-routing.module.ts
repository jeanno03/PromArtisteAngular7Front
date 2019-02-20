import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { TestComponent } from './test/test.component';
import { Test01Component } from './test01/test01.component';
import { Test02Component } from './test02/test02.component';
import { Test03Component } from './test03/test03.component';
import { Test04Component } from './test04/test04.component';


const routes:Routes=[
{
    path:'test',
    component:TestComponent,
    children:[
        {
            path:'test01',
            component:Test01Component
        },
        {
            path:'test02',
            component:Test02Component
        },
        {
            path:'test03',
            component:Test03Component
        },
        {
            path:'test04',
            component:Test04Component
        }
    ]
}

];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class TestRoutingModule{}
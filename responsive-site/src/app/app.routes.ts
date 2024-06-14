import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { Component } from '@angular/core';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: './',
        component: AppComponent,
    },
    {
        path: 'header-component',
        component: HeaderComponent,
    },
    {
        path: 'angular-pipes',
        component:  AngularPipesComponent,
    },
    {
        path: 'angular-directives',
        component:  AngularDirectivesComponent,
    },
    {
        path: 'header',
        component:  HeaderComponent,
    }
   
   
];

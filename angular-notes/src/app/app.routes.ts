import { Routes } from '@angular/router';
import { AngularBasicComponent } from './angular-basic/angular-basic.component';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { AppComponent } from './app.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { DataSharingComponent } from './data-sharing/data-sharing.component';
import { AngularHttpAuthComponent } from './angular-http-auth/angular-http-auth.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RxjsComponentComponent } from './rxjs-component/rxjs-component.component';

export const routes: Routes = [
    {
        path: './',
        component: AppComponent,
    },
    {
        path: 'angular-basic',
        component: AngularBasicComponent,
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
        path: 'angular-forms',
        component:  AngularFormsComponent,
    },
    {
        path: 'data-sharing',
        component:  DataSharingComponent,
    },

    {
        path: 'angular-http-auth',
        component:  AngularHttpAuthComponent,
    },
    {
        path: 'reactive-form',
        component:  ReactiveFormComponent,
    },
    {
        path: 'rxjs-component',
        component:  RxjsComponentComponent,
    },
 
 
 
 
];

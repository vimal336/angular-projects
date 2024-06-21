import { Routes } from '@angular/router';
import { AngularBasicComponent } from './angular-basic/angular-basic.component';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { AppComponent } from './app.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';

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
 
];

import { Routes } from '@angular/router';
import { FormDetailsComponent } from './form-details/form-details.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
    },
    {
        path: 'form-details',
        component: FormDetailsComponent,
    },
    {
        path: 'view-details',
        component: ViewDetailsComponent
    },
];


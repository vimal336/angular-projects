import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: './',
        component: AppComponent,
    },
    {
        path: 'details',
        component: DetailsComponent,
    },
    {
        path: 'display-details',
        component: DisplayDetailsComponent,
    },
    {
        path: 'not-found',
        component:  NotFoundComponent,
    },

];

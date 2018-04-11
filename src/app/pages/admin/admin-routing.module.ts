import {Routes} from '@angular/router';

export const appAdminRoutes: Routes = [
  {
    path: '**', redirectTo: 'home'
  }
];

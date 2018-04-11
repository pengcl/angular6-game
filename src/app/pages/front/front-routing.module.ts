import {Routes} from '@angular/router';

export const appFrontRoutes: Routes = [
  {
    path: '**', redirectTo: 'index'
  }
];

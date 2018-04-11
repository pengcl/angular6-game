import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {FrontComponent} from './pages/front/front.component';
import {appFrontRoutes} from './pages/front/front-routing.module';

import {AdminComponent} from './pages/admin/admin.component';
import {appAdminRoutes} from './pages/admin/admin-routing.module';

import {IndexComponent} from './pages/index/index.component';
import {LoginComponent} from './pages/login/login.component';

import {AuthGuard} from './_guards/auth';

export const routes: Routes = [

  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'front',
    component: FrontComponent,
    children: appFrontRoutes
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: appAdminRoutes
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}

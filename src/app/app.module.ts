// modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {DragulaModule} from 'ng2-dragula';

// pipes
import {PIPES_DECLARATIONS} from './pipes';

// services
import {SERVICES_DECLARATIONS} from './services';

// components
import {AppComponent} from './app.component';
import {COMPONENTS_DECLARATIONS} from './components';
import {FRONT_PAGES_DECLARATIONS} from './pages/front';
import {ADMIN_PAGES_DECLARATIONS} from './pages/admin';
import {IndexComponent} from './pages/index/index.component';
import {LoginComponent} from './pages/login/login.component';



// directives
import {DIRECTIVES_DECLARATIONS} from './directives';

import {AuthGuard} from './_guards/auth';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    ...COMPONENTS_DECLARATIONS,
    ...FRONT_PAGES_DECLARATIONS,
    ...ADMIN_PAGES_DECLARATIONS,
    ...DIRECTIVES_DECLARATIONS,
    ...PIPES_DECLARATIONS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragulaModule
  ],
  providers: [
    AuthGuard,
    ...PIPES_DECLARATIONS,
    ...SERVICES_DECLARATIONS
  ],
  bootstrap: [AppComponent],
  entryComponents: [...COMPONENTS_DECLARATIONS]
})
export class AppModule {
}

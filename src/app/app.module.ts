import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { MasterComponent } from './pages';
import { MasterModule } from './pages/master/master.module';
import { NbSecurityModule } from '@nebular/security';
import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';

const MODULES = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  RouterModule,
  NbSecurityModule.forRoot(),
  HttpClientModule,
  NbAuthModule.forRoot({
    strategies: [
      NbPasswordAuthStrategy.setup({
        name: 'email',
      }),
    ],
    forms: {},
  }),
];


@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
  ],
  imports: [
    ...MODULES,
    NbLayoutModule,
    NbSidebarModule,
    BrowserAnimationsModule,
    MasterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

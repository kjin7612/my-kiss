import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  NbThemeModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
  NbIconModule, NbSelectModule, NbUserModule, NbContextMenuModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';
import { HeaderComponent } from '../../common/layout/header/header.component';
import { FooterComponent } from '../../common/layout/footer/footer.component';
import { SidebarComponent } from '../../common/layout/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material';

import { NbSidebarService } from '@nebular/theme';

const COMPONENTS = [
  HeaderComponent,
  SidebarComponent,
  FooterComponent,
];

const MODULES = [
  NbEvaIconsModule,
  NbSecurityModule,
  BrowserModule,
  BrowserAnimationsModule,
  RouterModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
  // NbThemeModule.forRoot({name: 'default'}),
  NbThemeModule.forRoot(),
];

const SERVICES = [
  NbSidebarService
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ],
  providers: [
    ...SERVICES
  ],
  imports: [
    ...MODULES,
    MatSidenavModule,
    NbIconModule,
    NbSelectModule,
    NbUserModule,
    NbContextMenuModule,
  ],
})
export class MasterModule {
}

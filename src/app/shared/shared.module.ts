import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
    declarations: [
      HeaderComponent,
      SidebarComponent,
      BreadcrumbComponent,
      Page404Component
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbComponent,
        Page404Component
    ]
  })

export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AuthService, GuardService, SidebarService} from './service.index';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule
  ],
  providers: [AuthService, GuardService, SidebarService]
})
export class ServicesModule { }

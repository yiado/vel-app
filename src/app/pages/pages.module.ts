import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from "@angular/common";

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        PAGES_ROUTES
    ]
})

export class PagesModule { }

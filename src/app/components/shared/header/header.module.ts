import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../../shared/header/header.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    providers: [ ]
})

export class HeaderModule { }

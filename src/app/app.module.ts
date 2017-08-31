import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routes';
import { AppComponent } from './app.component';
import { AuthModule } from './components/core/auth/auth.module';
import { HeaderModule } from './components/shared/header/header.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AuthModule,
        AppRouting
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }

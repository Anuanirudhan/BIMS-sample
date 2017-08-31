import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login/login.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderModule } from '../../shared/header/header.module';
 

@NgModule({
    imports: [
        BrowserModule,
        HeaderModule
    ],
    declarations: [
        LoginComponent,
        FooterComponent,
        SignupComponent
    ],
    providers: [ ]
})

export class AuthModule { }

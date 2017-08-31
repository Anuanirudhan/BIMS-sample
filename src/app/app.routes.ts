import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/core/auth/login/login.component';
import { SignupComponent } from './components/core/auth/signup/signup.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect URL
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent }	
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})

export class AppRouting { }

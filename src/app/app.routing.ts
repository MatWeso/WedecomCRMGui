import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { AuthGuard } from "./shared/auth.guard";
import { LoginComponent } from "./login/login.component";

export const appRouting = RouterModule.forRoot([
    {
      path: '', component: HomeComponent, canActivate: [AuthGuard]
    }
])

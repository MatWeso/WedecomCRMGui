//Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
//Routing
import { userRouting } from './user/user.routing';
import { appRouting } from './app.routing';
//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user/user-list.component';
import { UserDetailComponent } from './user/user-detail.component';
//service
import { UserService} from './user/user.service';
import { AuthService } from './login/auth.service';
//Redux
import { IAppState, rootReducer, INITIAL_STATE } from "app/store";

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, HomeComponent, UserDetailComponent, UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    userRouting,
    appRouting,
    FormsModule,
    NgReduxModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }

}

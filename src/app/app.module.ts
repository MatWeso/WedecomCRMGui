//Core
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
//Material
import { MdButtonModule, MdCheckboxModule, MdMenu, MdMenuItem, MdButton, MdMenuModule, MdInputModule, MdGridListModule} from '@angular/material';
import 'hammerjs';
//Routing
import { userRouting } from './user/user.routing';
import { appRouting } from './app.routing';
//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user/user-list.component';
import { UserEditComponent } from './user/user-edit.component';
import { UserNewComponent } from 'app/user/user-new.component';
//Spielwiese
import { SpielwieseComponent } from 'app/spielwiese/spielwiese.component';
import { UsernameInputComponent } from 'app/spielwiese/username-input.component';
//service
import { UserService} from './user/user.service';
import { AuthService } from './shared/auth.service';
//Redux
import { IAppState, rootReducer, INITIAL_STATE } from 'app/store';
import { UserValidators } from 'app/user/userValidators';

import { CustomFormsModule } from 'ng2-validation';
import { OAuthModule } from 'angular-oauth2-oidc';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "app/shared/auth.guard";


@NgModule({
  declarations: [
    AppComponent, NavbarComponent, HomeComponent, UserEditComponent, UserListComponent, UserNewComponent,
    SpielwieseComponent, UsernameInputComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    userRouting,
    appRouting,
    FormsModule,
    NgReduxModule,
    ReactiveFormsModule,
    CustomFormsModule,
    OAuthModule.forRoot(), 
    BrowserAnimationsModule, MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule, MdGridListModule
  ],
  providers: [AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor(
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension
    ){ 
    var enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardCreateComponent } from './page/board-create/board-create.component';
import { BoardDetailComponent } from './page/board-detail/board-detail.component';
import { BoardListComponent } from './page/board-list/board-list.component';
import { BoardModifyComponent } from './page/board-modify/board-modify.component';
import { LoginComponent } from './page/login/login.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { MainComponent } from './page/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardCreateComponent,
    BoardDetailComponent,
    BoardListComponent,
    BoardModifyComponent,
    LoginComponent,
    SignUpComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardListComponent} from './page/board-list/board-list.component';
import { LoginComponent} from './page/login/login.component';
import { BoardDetailComponent } from "./page/board-detail/board-detail.component";
import { BoardCreateComponent } from "./page/board-create/board-create.component";
import { BoardModifyComponent } from "./page/board-modify/board-modify.component";
import { SignUpComponent } from "./page/sign-up/sign-up.component";
import { MainComponent } from "./page/main/main.component";

const routes: Routes = [
  { path: '', redirectTo: 'boardList', pathMatch: 'full'},
  { path: 'boardList', component: BoardListComponent},
  { path: 'boardList/login', component: LoginComponent}, //path : 4200/boardList/login
  { path: 'boarddetail', component: BoardDetailComponent},
  { path: 'boardcreate', component: BoardCreateComponent},
  { path: 'boardmodify', component: BoardModifyComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'main', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


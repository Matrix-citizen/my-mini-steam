import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './Components/friends/friends.component';
import { GamesComponent } from './Components/games/games.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { LoginComponent } from './Components/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'games', component: GamesComponent},
  { path: 'library', component: GamesComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'friends', component: FriendsComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { FriendsComponent } from './Components/friends/friends.component';
import { FriendComponent } from './Components/friends/friend/friend.component';
import { GamesComponent } from './Components/games/games.component';
import { GameCardComponent } from './Components/games/game-card/game-card.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './Components/services/in-memory-data/in-memory-data.service';
import { JwtModule } from '@auth0/angular-jwt';
import { HeaderComponent } from './Components/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    FriendsComponent,
    FriendComponent,
    GamesComponent,
    GameCardComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

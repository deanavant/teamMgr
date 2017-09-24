import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PlayerService } from './player.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { AddplayerComponent } from './players/addplayer/addplayer.component';
import { ListplayersComponent } from './players/listplayers/listplayers.component';
import { GamesComponent } from './games/games.component';
import { Game1Component } from './games/game1/game1.component';
import { Game2Component } from './games/game2/game2.component';
import { Game3Component } from './games/game3/game3.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    AddplayerComponent,
    ListplayersComponent,
    GamesComponent,
    Game1Component,
    Game2Component,
    Game3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { ListplayersComponent } from './players/listplayers/listplayers.component';
import { AddplayerComponent } from './players/addplayer/addplayer.component';
import { GamesComponent } from './games/games.component';
import { Game1Component } from './games/game1/game1.component';
import { Game2Component } from './games/game2/game2.component';
import { Game3Component } from './games/game3/game3.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'players',
		pathMatch: 'full'
	},
	{
		path: 'players',
		component: PlayersComponent,
		children: [
			{
				path: '',
				redirectTo: 'list',
				pathMatch: 'full'
			},
			{
				path: 'list',
				pathMatch: 'full',
				component: ListplayersComponent,
			},
			{
				path: 'addplayer',
				pathMatch: 'full',
				component: AddplayerComponent,
			}
		]
	},
	{
		path: 'games',
		component: GamesComponent,
		children: [
			{
				path: '',
				redirectTo: 'game/1',
				pathMatch: 'full'
			},
			{
				path:'game/1',
				pathMatch: 'full',
				component: Game1Component,
			},
			{
				path:'game/2',
				pathMatch: 'full',
				component: Game2Component,
			},
			{
				path:'game/3',
				pathMatch: 'full',
				component: Game3Component,
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

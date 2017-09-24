import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {
  players = [];
  constructor(private _http: Http, private _router: Router) { }

  getPlayers()
  {
    return this._http.get('/players').subscribe(
      (response) => 
      { 
        this.players = response.json();
        console.log('***_PlayerService.getPlayers() got a response');
        // console.log(this.players);
      },
      (err) => 
      {
        console.log('***_PlayerService.getPlayers(): ' + err);
      }
    );
  }

  addPlayer(player){
    console.log('****PlayerService.addPlayer():' + player.name);
    return this._http.post('/players', player).subscribe(
      (response) => 
      { 
        this.players = response.json();
        console.log('***_PlayerService.addPlayer() got a response');
        this._router.navigate(['/players']);
      },
      (err) => 
      {
        console.log('***_PlayerService.addPlayer(): ' + err);
      }
    );
  }

  deletePlayer(pid){
    console.log('***PlayerService.deletePlayer():' + pid);
    return this._http.delete('/players/' + pid).subscribe(
      (response) =>
      {
        this.players = response.json();
        console.log('***_pserve.deletePlayer() got a response');
        this._router.navigate(['/players']);
      },
      (err) =>
      {
        console.log('***PlayerService.deletePlayer():' + err);
      }
    );
  }

  updatePlayer(player){
    console.log('***PlayerService.updatePlayer:' + player._id);
    return this._http.put('/players/' + player._id, player).subscribe(
      (response) =>
      {
        this.players = response.json();
        console.log('***_pserve.updatePlayer() got a response');
      },
      (err) =>
      {
        console.log('***PlayerService.updatePlayer():' + err);
      }
    );
  }

}

import { PlayerService } from '../../player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {

  constructor(private _pserve:PlayerService) {
  	this._pserve.getPlayers();
  }

  ngOnInit() {
  }

  updatePlayer(player,status){
  	player.g1status = status;
  	console.log('*** updatePlayer: ' + player);
    this._pserve.updatePlayer(player);
  }

}

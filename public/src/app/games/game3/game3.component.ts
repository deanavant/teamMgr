import { PlayerService } from '../../player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.css']
})
export class Game3Component implements OnInit {

  constructor(private _pserve:PlayerService) {
  	this._pserve.getPlayers();
  }

  ngOnInit() {
  }

  updatePlayer(player,status){
  	player.g3status = status;
  	console.log('*** updatePlayer: ' + player);
    this._pserve.updatePlayer(player);
  }

}

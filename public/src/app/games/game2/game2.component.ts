import { PlayerService } from '../../player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {

  constructor(private _pserve:PlayerService) {
  	this._pserve.getPlayers();
  }

  ngOnInit() {
  }

  updatePlayer(player,status){
  	player.g2status = status;
  	console.log('*** updatePlayer: ' + player);
    this._pserve.updatePlayer(player);
  }

}

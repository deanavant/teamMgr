import { PlayerService } from '../../player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listplayers',
  templateUrl: './listplayers.component.html',
  styleUrls: ['./listplayers.component.css']
})
export class ListplayersComponent implements OnInit {

  constructor(private _pserve: PlayerService) {
  	this._pserve.getPlayers();
  }

  ngOnInit() {
  }

}

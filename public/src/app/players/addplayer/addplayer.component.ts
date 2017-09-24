import { PlayerService } from '../../player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {
  player = {
  	name: '',
  	position: ''
  }
  
  constructor(private _pserv: PlayerService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.player.name, this.player.position, "submitted");
    this._pserv.addPlayer({name:this.player.name, position:this.player.position});
    console.log('*** sent to _pserv.addPlayer');
    this.player.name = '';
    this.player.position = '';
  }

}
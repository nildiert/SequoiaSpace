import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  players: Player[] = [];

  ngOnInit() {
    this.getPlayerValue()
    console.log("this.players");
    console.log(this.players);
  }

  ngOnChange() {
    this.players = this.playerService.getPlayer()
    console.log("this.players");
    console.log(this.players);
  }


  getPlayerValue() {
    // this.playerService.getPlayer()
    // // .subscribe((response: any) => {
    // //   this.players = response;
    // });
    // // this.players = this.playerService.getPlayer()
    // console.log(this.players);
  }

}

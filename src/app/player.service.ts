import { Injectable } from '@angular/core';
import { threadId } from 'worker_threads';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  players:Player[];


  public getPlayer(){
    return this.players;
  }

  public addPlayerElement(element) {
    this.players.push(element);
    console.log(this.players)
  }

  public deletePlayerElement() {
    this.players.pop();
    console.log(this.players)
  }
}

import { Component, OnInit } from '@angular/core';
const { exec } = require('child_process');

@Component({
  selector: 'app-stellarium',
  templateUrl: './stellarium.component.html',
  styleUrls: ['./stellarium.component.scss']
})
export class StellariumComponent implements OnInit {

  constructor() { }
  command = "";
  process = null;
  play: boolean;

  ngOnInit() {
    this.play = false;
  }

  openStellarium(path) {
    if (!this.play) {
      this.command = "stellarium";
    } else {
      this.command = "killall stellarium";
    }
    this.process = exec(this.command, (err, stdout, stderr) => {
      console.log(stdout);
    });
    this.play = !this.play;

  }

}

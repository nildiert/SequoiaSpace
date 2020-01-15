import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../app/core/services/electron/electron.service';
const { exec } = require('child_process');

@Component({
  selector: 'app-movie-selector',
  templateUrl: './movie-selector.component.html',
  styleUrls: ['./movie-selector.component.scss']
})
export class MovieSelectorComponent implements OnInit {

  videos = null;
  command = "playonlinux --run vlc ";
  process = null;

  constructor(private electronService: ElectronService) {
    this.videos = electronService.getVideos();
    console.log(this.videos)
  }

  ngOnInit() {
  }



  openVideo(path) {
    this.command = this.command + path;
    this.process = exec(this.command, (err, stdout, stderr) => {
      console.log(stdout);
    });
    this.command = "playonlinux --run vlc ";
    console.log(process.pid)
    console.log(process)
  }

  add() {
    this.electronService.addVideo({
      "id": 2,
      "name": "La verdad sobre Greta Thunberg",
      "path": "~/Downloads/La_verdad_sobre_Greta_Thunberg.mp4",
      "image": "https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    });

  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ElectronService } from '../core/services';
import { PlayerService } from '../player.service';
const { exec } = require('child_process');

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {
  command = "playonlinux --run vlc ";
  process = null;

  constructor(
      private router: Router,
      private route:ActivatedRoute,
      private videoService: ElectronService,
      private playerService: PlayerService
      ) { }

  id = null;
  video: any = {};
  play: boolean;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.video = (this.videoService.getVideo(this.id));
    this.play = false;
    console.log(this.video.path);
  }


  openVideo(video) {
    // this.closeVideo(video);
    this.command = this.command + video.path;
    this.process = exec(this.command, (err, stdout, stderr) => {
      console.log("STDOUT")
      console.log(stdout);
      console.log("ERR")
      console.log(err);
      console.log("STDERR")
      console.log(stderr);
    });
    this.command = "playonlinux --run vlc ";
    this.play = !this.play;
    this.playerService.addPlayerElement(video);
  }


  closeVideo(video){
    exec(video.kill, (err, stdout, stderr) => {
      // console.log(stdout);
    });
    if (this.play) {
      this.play = !this.play;
    }
    this.playerService.deletePlayerElement();
  }  
}

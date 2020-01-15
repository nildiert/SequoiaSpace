import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../app/core/services/electron/electron.service';
const { exec } = require('child_process');



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videos = null;
  command = "playonlinux --run vlc ";
  process = null;

  constructor(private electronService: ElectronService) {
    this.videos = electronService.getVideos();
  }

  ngOnInit(): void { }


  openVideo(path) {
    this.command = this.command + path;
    this.process = exec(this.command, (err, stdout, stderr) => {
      console.log(stdout);
    });
    this.command = "playonlinux --run vlc ";
    console.log(process.pid)
    console.log(process)
  }

  closeVideo(){
    console.log("Closing process")
    this.process.exit();
    
    
  }

}

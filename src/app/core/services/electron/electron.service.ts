import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, webFrame, remote } from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {
  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  childProcess: typeof childProcess;
  fs: typeof fs;

  get isElectron(): boolean {
    return window && window.process && window.process.type;
  }

  constructor() {
    // Conditional imports
    if (this.isElectron) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.webFrame = window.require('electron').webFrame;
      this.remote = window.require('electron').remote;

      this.childProcess = window.require('child_process');
      this.fs = window.require('fs');
    }
  }

  videos: any = [
    {
      "id": 1,
      "name": "Fito Paez",
      "path": "~/Downloads/fito_paez.mp4",
      "image": "https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      "kill": "killall bash && killall vlc.exe"
    },
    {
      "id": 2,
      "name": "La verdad sobre Greta Thunberg",
      "path": "~/Downloads/La_verdad_sobre_Greta_Thunberg.mp4",
      "image": "https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "kill": "killall bash && killall vlc.exe"
    }
  ];

  public getVideos() {
    return this.videos;
  }

  public getVideo(id) {
    return this.videos.filter((video) => { return video.id == id })[0] || null;
  }

  public addVideo(video) {
    this.videos.push(video);
  }

}

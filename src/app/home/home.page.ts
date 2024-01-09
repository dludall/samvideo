import { Component, ElementRef, ViewChild } from '@angular/core';

import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';

@Component({
  selector: 'app-home',  
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('ditVideo',{static:true}) ditVideo!: ElementRef;
  openResult:string="state...";
  constructor(
    private videoPlayer: VideoPlayer
    ) {}

  onClickStart(){
    this.ditVideo.nativeElement.play();
  }
  onClickStop(){
    this.ditVideo.nativeElement.pause();
  }

  onOpenNative(){
    this.videoPlayer.play('file:///android_asset/public/assets/cosmos.mp4',
      {
      volume: 0.0,
      scalingMode: 1
      },).then(() => {
      console.log('video completed');
      this.openResult = 'video complated';
    }).catch(err => {
      console.log('============err video  ');
      console.log(err);
      this.openResult = 'err ' + err;
    });
  }
}

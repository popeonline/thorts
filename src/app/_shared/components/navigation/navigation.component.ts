import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  muted: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  muteAudio(): void {
    let audio = document.getElementById('audio-element') as HTMLMediaElement
    audio.muted = true;
    this.muted = true;
  }

  unMuteAudio(): void {
    let audio = document.getElementById('audio-element') as HTMLMediaElement
    audio.muted = false;
    this.muted = false;
  }

}

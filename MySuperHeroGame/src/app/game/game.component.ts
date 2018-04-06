import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PlayersService } from './../players.service';




@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  atq: boolean;
  hpPlayer1 = 300;
  hpPlayer2 = 300;
  showPlayButton = false;

  constructor(
    private playersService: PlayersService,
    private router: Router) { }

  ngOnInit() {
  }
  get herop1() {
    return this.playersService.herop1;
  }
  get herop2() {
    return this.playersService.herop2;
  }

  attackP1(atq) {
    this.showPlayButton = true;
    this.hpPlayer2 = this.hpPlayer2 - this.playersService.herop1.powerstats.combat;
    if (this.hpPlayer2 <= 0) {
      this.hpPlayer2 = 0;
      alert(' Winner is ' + this.herop1.name);
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1000);
    }
  }
  magieP1(mage) {
    this.showPlayButton = true;
    this.hpPlayer2 = this.hpPlayer2 - this.playersService.herop1.powerstats.intelligence;
    if (this.hpPlayer2 <= 0) {
      this.hpPlayer2 = 0;
      alert(' Winner is ' + this.herop1.name);
    }
  }
  healingP1(heal) {
    this.showPlayButton = true;
    this.hpPlayer1 = this.hpPlayer1 + 80;
  }

  attackP2(atq) {
    this.showPlayButton = false;
    this.hpPlayer1 = this.hpPlayer1 - this.playersService.herop2.powerstats.combat;
    if (this.hpPlayer1 <= 0) {
      this.hpPlayer1 = 0;
      alert(' Winner is ' + this.herop2.name);
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1000);
    }
  }
  magieP2(mage) {
    this.showPlayButton = false;
    this.hpPlayer1 = this.hpPlayer1 - this.playersService.herop2.powerstats.intelligence;
    if (this.hpPlayer1 <= 0) {
      this.hpPlayer1 = 0;
      alert(' Winner is ' + this.herop2.name);
    }
  }
  healingP2(heal) {
    this.showPlayButton = false;
    this.hpPlayer2 = this.hpPlayer2 + 80;
  }
}

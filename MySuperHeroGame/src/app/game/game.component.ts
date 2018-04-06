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
  hpPlayer1 = 500;
  hpPlayer2 = 500;

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
  attack(atq) {
      this.hpPlayer2 = this.hpPlayer2 - this.playersService.herop1.powerstats.combat;
      if (this.hpPlayer2 <= 0) {
        alert(' Winner is :  {{ playersService.herop1.name }}' );
      }
    }
}

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
  refresh(): void {
    window.location.reload();
  }
}

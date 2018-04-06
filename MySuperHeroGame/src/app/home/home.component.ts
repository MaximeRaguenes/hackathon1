import { PlayersService } from './../players.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'My Heroes game';
  heroes;
  showPlayButton = false;

  constructor(
    private http: HttpClient,
    private playersService: PlayersService,
    private router: Router) {
  }
  ngOnInit(): void {
    this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json').subscribe(heroes => {
      console.log(heroes);
      this.heroes = heroes;
    });
  }

  get herop1() {
    return this.playersService.herop1;
  }
  get herop2() {
    return this.playersService.herop2;
  }


  selectHero(selectedHero) {
    console.log(selectedHero);
    if (!this.playersService.herop1) {
      this.playersService.herop1 = selectedHero;
    } else {
      this.playersService.herop2 = selectedHero;
      this.showPlayButton = true;
    }
  }
}

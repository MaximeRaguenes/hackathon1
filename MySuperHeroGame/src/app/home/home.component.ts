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
  herop1;
  herop2;
  showPlayButton = false;

  constructor(
    private http: HttpClient,
    private router: Router) {
  }
  ngOnInit(): void {
    this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json').subscribe(heroes => {
      console.log(heroes);
      this.heroes = heroes;
    });
  }
  selectHero(selectedHero) {
    console.log(selectedHero);
    if (!this.herop1) {
      this.herop1 = selectedHero;
    } else {
      this.herop2 = selectedHero;
      this.showPlayButton = true;
    }
  }
}

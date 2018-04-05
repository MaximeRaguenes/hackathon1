import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Heroes game';
  heroes;
  hero;
  hero2;

  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json').subscribe(heroes => {
      console.log(heroes);
      this.heroes = heroes;
    });
  }
  selectHero(hero, hero2) {
    console.log(hero, hero2);
    this.hero = hero;
    this.hero2 = hero2;
    if (hero == false) {
    this.hero = hero;
    } else {
    this.hero2 = hero2;      
    }
  }
}

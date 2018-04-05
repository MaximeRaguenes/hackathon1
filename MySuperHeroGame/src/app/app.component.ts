import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Heroes game';
  heroes;
  herop1;
  herop2;

  constructor(private http: HttpClient) {
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
    }
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/Components/models/game';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input() game: Game;

  constructor() {
    this.game = {
      name: '',
      description: '',
      price: 0,
      id: ''
    }
   }

  ngOnInit(): void {
  }

}

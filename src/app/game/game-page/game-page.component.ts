import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GameService } from '../services/game.service';
import { Pokemon } from '../types';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  imageSource: string | ArrayBuffer;
  currentPokemonIndex: number = 0;
  gotFirstImage: boolean = false;
  pokemonName: string;
  hasAnswered: boolean;
  isAnswerRight: boolean;
  hasFinished: boolean = false;
  score: number = 0;

  private totalPokemon: number = 10;

  constructor(
    private readonly gameService: GameService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.getFirstImage();
    for (let i = 2; i <= this.totalPokemon; i++) {
      this.gameService.getPokemon(i).subscribe(data => {
        this.pokemonList.push(data);
      });
    }
  }

  nextPokemon(): void {
    this.currentPokemonIndex++;
    if (this.currentPokemonIndex < this.pokemonList.length) {
      this.getImage(this.pokemonList[this.currentPokemonIndex].sprites.front_default);
      this.hasAnswered = false;
      this.pokemonName = '';
    } else {
      this.hasFinished = true;
    }
  }

  submit(): void {
    this.hasAnswered = true;
    this.isAnswerRight = this.pokemonName === this.pokemonList[this.currentPokemonIndex].name;
    if (this.isAnswerRight) {
      this.score++;
    }
  }

  restartTheGame(): void {
    this.router.navigateByUrl('/start');
  }

  private getFirstImage(): void {
    this.gameService.getPokemon(1).subscribe(data => {
      this.pokemonList.push(data);
      this.getImage(this.pokemonList[this.currentPokemonIndex].sprites.front_default);
      this.gotFirstImage = true;
    });
  }

  private getImage(imageUrl: string): void {
    this.gameService.getImage(imageUrl).subscribe(data => {
      this.createImageFromBlob(data);
    });
  }

  private createImageFromBlob(image: Blob): void {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageSource = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

}

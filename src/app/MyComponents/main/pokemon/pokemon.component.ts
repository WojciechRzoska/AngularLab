import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../../api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokeapiService: PokeapiService) {}

  ngOnInit(): void {
    this.fetchPokemon();
  }

  fetchPokemon(): void {
    this.pokeapiService.getPokemon(20, 0).subscribe((data: any) => {
      this.pokemons = data.results;

      for (let i = 0; i < this.pokemons.length; i++) {
        const id = i + 1;
        this.pokeapiService.getPokemonDetails(id).subscribe((details: any) => {
          this.pokemons[i].image = details.sprites.front_default;
        });
      }
    });
  }
}

class Pokemon {
  name: string;
  type: string;
  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;

  }
  isEffectiveAgainst(): string {
    if (this.type === 'water') {
      return 'This pokemon is effective against fire pokemons!'
    }
    else if (
      this.type === 'fire') {
      return 'This pokemon is effective against water pokemons!'
    }
    else if (
      this.type === 'fire') {
      return 'This pokemon is effective against water pokemons!'
    } else {
      return 'Google it!'
    }
  }
}

let charmander: Pokemon = new Pokemon('Charmander', 'fire');
console.log(charmander.isEffectiveAgainst());
let charmander2: Pokemon = new Pokemon('Gigig', 'water');
console.log(charmander2.isEffectiveAgainst());
let charmander3: Pokemon = new Pokemon('Louis', 'ghost');
console.log(charmander3.isEffectiveAgainst());

// Every pokemon has a name and a type. Certain types are effective against others, e.g. water is effective against fire.

// You have a Pokemon class with a method called isEffectiveAgainst().

// Ash has a few pokemon. Help Ash decide which Pokemon to use against the wild one.
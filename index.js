const axios = require('axios');
const fs = require('fs');
const { colours, typeStyles } = require('./ansi-colours');

// Utility functions
const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const formatTypeName = (types) =>
  types
    .map(
      (typeObj) =>
        `${typeStyles[typeObj.type.name]}${typeObj.type.name.toUpperCase()}${
          colours.reset
        }`
    )
    .join(' ');

const formatBaseStats = (stats) =>
  stats
    .map((statObj) => {
      const statName =
        statObj.stat.name === 'hp'
          ? 'HP'
          : capitalizeFirstLetter(statObj.stat.name.replace(/-/g, ' '));
      return `${colours.bold}${statName}:${colours.reset} ${statObj.base_stat}`;
    })
    .join('\n');

// Logging function
const logPokemonDetails = (pokemon) => {
  const {
    colours,
    pokemonName,
    id,
    height,
    weight,
    typeName,
    abilities,
    baseStats,
  } = pokemon;
  console.log(
    `${colours.bold}\nPokémon:${colours.reset} ${capitalizeFirstLetter(
      pokemonName
    )}`
  );
  console.log(`${colours.bold}National number:${colours.reset} ${id}`);
  console.log(`${colours.bold}Height:${colours.reset} ${height / 10} m`);
  console.log(`${colours.bold}Weight:${colours.reset} ${weight / 10} kg`);
  console.log(`${colours.bold}Type:${colours.reset} ${typeName}`);
  console.log(
    `${colours.bold}Abilities:${colours.reset} ${abilities
      .map((abilityObj) =>
        capitalizeFirstLetter(abilityObj.ability.name.replace(/-/g, ' '))
      )
      .join(', ')}`
  );
  console.log(`\n${colours.bold}Base stats:${colours.reset}\n${baseStats}`);
};

// Function to download sprite
const downloadSprite = async (url) => {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    fs.writeFile('./sprite.png', response.data, 'binary', (err) => {
      if (err) throw err;
      console.log(
        `\n${colours.green}Image saved as sprite.png${colours.reset}\n`
      );
    });
  } catch (error) {
    console.error(
      `\n${colours.red}Error downloading sprite image: ${error.message}${colours.reset}\n`
    );
  }
};

// Function to fetch Pokémon details
const fetchPokemonDetails = async (pokemonName) => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
    );
    const { id, height, weight, sprites, types, abilities, stats } = data;

    const pokemon = {
      colours,
      pokemonName,
      id,
      height,
      weight,
      typeName: formatTypeName(types),
      abilities,
      baseStats: formatBaseStats(stats),
    };

    logPokemonDetails(pokemon);
    await downloadSprite(sprites.front_default);
  } catch (error) {
    console.error(
      `\n${colours.red}Error fetching Pokémon data: ${error.message}${colours.reset}\n`
    );
  }
};

// Entry point
const userInput = process.argv.slice(2);

if (userInput.length !== 1) {
  console.error(
    `\n${colours.red}Usage: node index.js <pokemon_name>${colours.reset}\n`
  );
} else {
  const [pokemonName] = userInput;
  fetchPokemonDetails(pokemonName);
}

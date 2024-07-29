const colours = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
};

const backgrounds = {
  white: '\x1b[47m',
  red: '\x1b[41m',
  blue: '\x1b[44m',
  yellow: '\x1b[43m',
  green: '\x1b[42m',
  cyan: '\x1b[46m',
  purple: '\x1b[45m',
  black: '\x1b[40m',
};

const typeStyles = {
  normal: `${colours.bold}${backgrounds.white}\x1b[30m`,
  fire: `${colours.bold}${backgrounds.red}\x1b[37m`,
  water: `${colours.bold}${backgrounds.blue}\x1b[37m`,
  electric: `${colours.bold}${backgrounds.yellow}\x1b[30m`,
  grass: `${colours.bold}${backgrounds.green}\x1b[30m`,
  ice: `${colours.bold}${backgrounds.cyan}\x1b[30m`,
  fighting: `${colours.bold}${backgrounds.red}\x1b[37m`,
  poison: `${colours.bold}${backgrounds.purple}\x1b[37m`,
  ground: `${colours.bold}${backgrounds.yellow}\x1b[30m`,
  flying: `${colours.bold}${backgrounds.cyan}\x1b[30m`,
  psychic: `${colours.bold}${backgrounds.purple}\x1b[37m`,
  bug: `${colours.bold}${backgrounds.green}\x1b[30m`,
  rock: `${colours.bold}${backgrounds.yellow}\x1b[30m`,
  ghost: `${colours.bold}${backgrounds.purple}\x1b[37m`,
  dragon: `${colours.bold}${backgrounds.purple}\x1b[37m`,
  dark: `${colours.bold}${backgrounds.black}\x1b[47m\x1b[30m`,
  steel: `${colours.bold}${backgrounds.white}\x1b[30m`,
  fairy: `${colours.bold}${backgrounds.purple}\x1b[37m`,
};

module.exports = {
  colours,
  backgrounds,
  typeStyles,
};

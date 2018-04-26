import helpers from './helpers.js';

const heroesArea = document.getElementById('heroes');
const answerBox = document.getElementById('answer');
const characters = [
  'Iron Man', // img src: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAyfhIMXBLbvgg9sBe8gBsF1v2Z5Uyr7Jyodad2Y5-wzs9bs2DOxaHSaVUDAneQ-QTRMM
  'Captain America', // img src: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcpfwHblwN7tvtcUarDPLPMbqZVY6fs8J66obD7sEugzJ0JlNMh1OHxKUNIdHCwlhAsg
  'Groot', // img src: http://www.new-costumes.com/wp-content/uploads/2017/10/Guardians-Galaxy-Adult-Groot-Costume-120x120.jpg
  'Spider-Man', // img src: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO_dOJJNS5eA-IgvJCV98r_1Yfdxxyrpm1d9UyjpdbIQ99Lenr7tay-amQrnGQ2tlT5BE
  'Black Widow', // img src: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKXVEZjgd2hDXrrNmxib4nxGI-MNCCS0eXsPr_CJ5QMBwh3eyxWEKip3ccPpA_lXBfEY
  'Hawkeye', // img src: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78aQYxjUbflOMJD05FXcaonV2nVn8CYGzA5DXfcQ4YuHBcvy9NxApsp8WfR-uuUEmjYg
  'Thanos', // img src: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_95-f46vF1fnPeNzqxwCECl6SUxlFJ-V4kqGia_c9jCTxEKzMcY24H3kibJ60YzsDzE
  'Scarlet Witch', // img src: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-Xkk872kNUydxU_Yxi-uxTYaBd2LxmOwNWdZGjeFpiqmy8TcD6a-LeL7S9wjduLbUEQ
  'Thor', // img src: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ42snwb0s7-zLaIPywYIJUBxAdkryrxi1IP3isT19D9iQDxMOMqqWGPBAKqAVMCmk7XQo
  'Black Panther' // img src: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnV2sHAiabrHA1pnWBgAOWJeXPuzmVYMfrBgi6igsB6xtXs0WigfkZWicSN2dHSIH0cgE
];

/**
 * Handles the click event (user's guess)
 * @param {*} event
 */
const handleGuess = (event) => {
  let userGuess = event.target.id;
  let rando = helpers.getRandomCharacter(characters);

  answerBox.innerHTML = helpers.checkGuessAgainstComputer(userGuess, rando);
};

// SetUp game (doing it programatically to make sure it's right!)
for (let i in characters) {
  let newHero = document.createElement('img');
  newHero.src = `./assets/${characters[i]}.jpeg`;
  newHero.id = characters[i];
  newHero.addEventListener('click', handleGuess);
  heroesArea.appendChild(newHero);
}

let selectionButtons = document.querySelectorAll('[data-selection]');
let finalColumn = document.querySelector('[data-final-column]');
let computerScoreSpan = document.querySelector('[data-computer-score]');
let yourScoreSpan = document.querySelector('[data-your-score]');
let SELECTIONS = [{
    name: 'paper', 
    emoji: '📃',
    beats: ['spock', 'rock']
  },
  {
    name: 'rock',
    emoji: '🪨',
    beats: ['lizard', 'scissors']

  },
  {
    name: 'scissors',
    emoji: '✂',
    beats: ['paper', 'lizard']
  },
  {
    name: 'lizard',
    emoji: '🦎',
    beats: ['paper', 'spock']
  },
  {
    name: 'spock',
    emoji: '🖖',
    beats: ['rock', 'scissors']
  },
]; 
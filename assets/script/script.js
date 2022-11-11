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

/** Function that adds an event listener for clicks on each button and make the selection when clicked */
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        let selectionName = selectionButton.dataset.selection;
        let selection = SELECTIONS.find(selection => selection.name === selectionName);
        makeSelection(selection);
    }); 
});

/**Function that determines the winner based on the selection */
function makeSelection(selection) {
    let computerSelection = randomSelection();
    let yourWinner = isWinner(selection, computerSelection);
    let computerWinner = isWinner(computerSelection, selection);   
    
    addSelectionResult(computerSelection, computerWinner);
    addSelectionResult(selection, yourWinner);

    if (yourWinner) incrementScore(yourScoreSpan);
    if (computerWinner) incrementScore(computerScoreSpan);

}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
} 
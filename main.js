
const playerOne = {
    name: 'SCORPION',
    hp: 70,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Автомат', 'Пистолет', 'Дубина'],
    attack() {
        console.log(this.name + ' Fight...');
    }
}

const playerTwo = {
    name: 'SONYA',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Автомат', 'Пистолет', 'Дубина'],
    attack() {
        console.log(this.name + 'Fight...')
    },
}

function createPlayer(style, data) {
    const $arenas = document.querySelector('.arenas');
    const $createPlayer = document.createElement('div');
    const $createProgressbar = document.createElement('div');
    const $createCharacter = document.createElement('div');
    const $createLifeStatus = document.createElement('div');
    const $createName = document.createElement('div');
    const $createCharacterImg = document.createElement('img');

    $createPlayer.classList.add(style);
    $createProgressbar.classList.add('progressbar');
    $createCharacter.classList.add('character');
    $createLifeStatus.classList.add('life');
    $createName.classList.add('name');

    $arenas.appendChild($createPlayer);
    $createPlayer.appendChild($createProgressbar);
    $createPlayer.appendChild($createCharacter);
    $createProgressbar.appendChild($createLifeStatus);
    $createProgressbar.appendChild($createName);
    $createCharacter.appendChild($createCharacterImg);

    $createLifeStatus.style.width = data.hp + '%';
    $createName.innerText = data.name;
    $createCharacterImg.src = data.img;
}

createPlayer('player1', playerOne);
createPlayer('player2', playerTwo);


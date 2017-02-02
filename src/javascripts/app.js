let active = 1;
let max = 4;
let direction = 'forward';

var sound = new Howl({
    src: ['yourefired.mp3'],
    sprite: {
        first: [0, 820],
        second: [820, 1517]
    }
});

$('button').on('click', () => {
    $(`img:nth-child(${active})`).addClass('outro');

    if (direction === 'forward') {
        $(`img:nth-child(${active})`).addClass('outro');
        active++;
        $(`img:nth-child(${active})`).addClass('intro');
    } else {
        console.log('--');
        $(`img:nth-child(${active})`).removeClass('intro');
        active--;
        $(`img:nth-child(${active})`).removeClass('outro');
    }


    if (active % 2) {
        sound.play('first');
    } else {
        sound.play('second');
    }


    if (active === max) {
        console.log('max');
        direction = 'backwards';
    }

    if (active === 1) {
        direction = 'forward';
    }
});
let active = 1;
let max = 9;
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
        console.log('++');
        $(`img:nth-child(${active})`).addClass('outro');
        active++;
        $(`img:nth-child(${active})`).addClass('intro');
    } else {
        console.log('--');
        $(`img:nth-child(${active})`).removeClass('intro outro');
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
        $('body').addClass('make-it-rain');
        direction = 'backwards';
    }

    if (active === 1) {
        console.log('1');
        direction = 'forward';
    }
});



var makeItRain = function() {
    //clear out everything
    $('.rain').empty();

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
        //couple random numbers to use for various randomizations
        //random number between 98 and 1
        var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        //random number between 5 and 2
        var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        //increment
        increment += randoFiver;
        //add in a new raindrop with various randomizations to certain CSS properties
        drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
        backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }

    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
};

makeItRain();
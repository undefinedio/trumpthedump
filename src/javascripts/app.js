let active = 1;
let max = 4;

$('button').on('click', () => {
    $(`img:nth-child(${active})`).addClass('outro');
active++;
$(`img:nth-child(${active})`).addClass('intro');

if(active === max) {
    // show final img
}
});
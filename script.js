// TODO: logic part here

var input = document.getElementById('input'),
    tagline = document.getElementById('tagline'),
    result = document.getElementById('result');


function CheckBinary(id) {
    for (i = 0; i < 8; i++) {
        if (id.value.charAt(i) > 1) {
            console.log('not a binary')
            id.className = 'shakeAnim';
            id.value = id.value.replace(id.value.charAt(i), '');
        }
    }
}

function BinaryToDecimal(id) {

    let dec = 0;
    for (i = 1; i <= 8; i++) {
        dec += id.value.charAt(i - 1) * 2 ** (id
            .value.length - i);

        id.className = 'wrong';
        console.log("dec = " + dec);

    }

    if (id.value.length == 8) {
        id.style.color = '#39e600';
        tagline.innerHTML = 'You Entered!'
        result.innerHTML = dec;
    } else {
        dec = 0;
        result.innerHTML = '';
        id.style.color = '#000';
        tagline.innerHTML = '';
        console.log('dec set to 0');
    }

}

input.oninput = function () {
    input.value = input.value.slice(0, 8);

    CheckBinary(input);
    BinaryToDecimal(input);

    //console.log(dec);
}

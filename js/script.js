





const name=window.prompt("what is your name");



document.body.children[0].innerText=`HAPPY BIRTHDAY TO YOU ${name} `;


var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src=URL.createObjectURL(event.target.files[0]);
};

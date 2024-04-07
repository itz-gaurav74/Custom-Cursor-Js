let body = document.querySelector('body')
let cursor = document.querySelector('.cursor')

body.addEventListener('mousemove', (e) =>{
    // console.log(`x axis: ${e.x} y axis: ${e.y}`)

    cursor.style.left = e.x + 'px';
    cursor.style.top = e.y + 'px';

})


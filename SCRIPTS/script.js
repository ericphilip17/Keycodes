//Initializing important variables
let $ = document;
const aTags = $.querySelectorAll('a');

// //Obtain Keycodes
const keycodes = function() {
  document.addEventListener('keypress', e => {
    console.log(e.keyCode);
  })
}

//PreventDefauls::
const pDefault = function() {
  document.querySelector('#searchBox > input').addEventListener('keypress', (e) => {
    if(e.keyCode === 13 || e.while === 13) {
      e.preventDefault()
    }
  })
}
pDefault();

//Keycodes array::
const arr = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119,
  101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103,
  104, 106, 107, 108, 59, 39, 13, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47,
  32, 47, 42, 45, 43, 46];

//Highlight keys when typed
function highlight() {
  var searchBox = document.forms['searchBox'].querySelector('input');
  searchBox.addEventListener('keyup', (e) => {
    var term = e.target.value.toLowerCase();
    var keys = document.querySelectorAll('a');

    Array.from(keys).forEach((cur) => {
      var letter = cur.textContent;

      // searchBox.addEventListener('keypress', e => {
      //   if(arr.includes(e.keyCode)) {

          if(letter.toLowerCase().indexOf(term) !== -1) {
            // cur.style.display = 'block';
            if(term !== '') {
              cur.style.color = 'black';
              cur.style.backgroundColor = 'yellow';

              // searchBox.addEventListener('keypress', e => {
              //   if(arr.includes(e.keyCode)) {
              //
              //   }
              // })

              if(e.target.value === '') {
                console.log('Empty input');
              }
            }
          }

        // }
      // })



    })
})
}
highlight();


function keyboard() {

  aTags.forEach(a => {

    let upp = a.textContent;
    const key = upp.toLowerCase();
    a.addEventListener('click', (e) => {
      // e.preventDefault();
      const showCode = function(cur) {
        a.textContent = arr[cur];
        a.classList.toggle('active');
        //console.toggle('one');
        //console.log('We\'re displaying the pop-up');
        let t = 0;
        const timer = setTimeout(() => {
          t += 2;
          if(t === 2) {
            a.classList.remove('active');
            a.textContent = upp;
            a.lineHeight = '2em';
            // a.style.flex = '0 1 10px';
            clearTimeout(timer);
          }
        }, 1000);
      }
      if(upp.includes('~`')) {
        const cur = 0;
        //console.log(a.textContent);
        showCode(cur);
      }else if(upp.includes('!1')) {
        var cur = 1;
        showCode(cur);
      }else if(upp.includes('@2')) {
        var cur = 2;
        showCode(cur);
      }else if(upp.includes('#3')) {
        var cur = 3;
        showCode(cur);
      }else if(upp.includes('$4')) {
        var cur = 4;
        showCode(cur);
      }else if(upp.includes('%5')) {
        var cur = 5;
        showCode(cur);
      }else if(upp.includes('^6')) {
        var cur = 6;
        showCode(cur);
      }else if(upp.includes('&7')) {
        var cur = 7;
        showCode(cur);
      }else if(upp.includes('*8')) {
        var cur = 8;
        showCode(cur);
      }else if(upp.includes('(9')) {
        var cur = 9;
        showCode(cur);
      }else if(key.includes(')0')) {
        var cur = 10;
        showCode(cur);
      }else if(key.includes('_-')) {
        var cur = 11;
        showCode(cur);
      }else if(key.includes('+=')) {
        var cur = 12;
        console.log(a.textContent);
        showCode(cur);
      }else if(key === 'q') {
        var cur = 13;
        showCode(cur);
      }else if(key === 'w') {
        var cur = 14;
        showCode(cur);
      }else if(key === 'e') {
        var cur = 15;
        showCode(cur);
      }else if(key === 'r') {
        var cur = 16;
        showCode(cur);
      }else if(key === 't') {
        var cur = 17;
        showCode(cur);
      }else if(key === 'y') {
        var cur = 18;
        showCode(cur);
      }else if(key === 'u') {
        var cur = 19;
        showCode(cur);
      }else if(key === 'i') {
        var cur = 20;
        showCode(cur);
      }else if(key === 'o') {
        var cur = 21;
        console.log(arr[cur]);
        showCode(cur);
      }else if(key === 'p') {
        var cur = 22;
        showCode(cur);
      }else if(upp.includes('{[')) {
        var cur = 23;
        showCode(cur);
      }else if(upp.includes('}]')) {
        var cur = 24;
        showCode(cur);
      }else if(upp.includes("|\\")) {
        var cur = 25;
        showCode(cur);
      }else if(key === 'a') {
        var cur = 26;
        showCode(cur);
      }else if(key === 's') {
        var cur = 27;
        showCode(cur);
      }else if(key === 'd') {
        var cur = 28;
        showCode(cur);
      }else if(key === 'f') {
        var cur = 29;
        showCode(cur);
      }else if(key === 'g') {
        var cur = 30;
        showCode(cur);
      }else if(key === 'h') {
        var cur = 31;
        showCode(cur);
      }else if(key === 'j') {
        var cur = 32;
        showCode(cur);
      }else if(key === 'k') {
        var cur = 33;
        showCode(cur);
      }else if(key === 'l') {
        var cur = 34;
        showCode(cur);
      }else if(upp.includes(':;')) {
        var cur = 35;
        showCode(cur);
      }else if(upp.includes('"\'')) {
        var cur = 36;
        showCode(cur);
      }else if(key.includes('enter')) {
        var cur = 37;
        showCode(cur);
      }else if(key === 'z') {
        var cur = 38;
        showCode(cur);
      }else if(key === 'x') {
        var cur = 39;
        showCode(cur);
      }else if(key === 'c') {
        var cur = 40;
        showCode(cur);
      }else if(key === 'v') {
        var cur = 41;
        showCode(cur);
      }else if(key === 'b') {
        var cur = 42;
        showCode(cur);
      }else if(key === 'n') {
        var cur = 43;
        showCode(cur);
      }else if(key === 'm') {
        var cur = 44;
        showCode(cur);
      }else if(upp.includes('<,')) {
        var cur = 45;
        showCode(cur);
      }else if(upp.includes('>.')) {
        var cur = 46;
        showCode(cur);
      }else if(upp.includes('?/')) {
        var cur = 47;
        showCode(cur);
      }else if(upp.includes('SpaceBar')) {
        var cur = 48;
        showCode(cur);
      }else if(key === '/') {
        var cur = 49;
        showCode(cur);
      }else if(key === '*') {
        var cur = 50;
        showCode(cur);
      }else if(key === '-') {
        var cur = 51;
        showCode(cur);
      }else if(key === '+') {
        var cur = 52;
        showCode(cur);
      }else if(key === '.') {
        var cur = 53;
        showCode(cur);
      }else if(key === '0') {
        var cur = 54;
        showCode(cur);
      }



    })
  })

}
keyboard();

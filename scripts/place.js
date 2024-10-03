let ws = 5;
let temp = 40;
let tempex = document.getElementById('tempout');
let condiex = document.getElementById('condiout');
let windex = document.getElementById('windout');
let wcex = document.getElementById('wcout');
let wc = 'n/a'

function wcCalc(output) {
    if (ws < 3 || temp > 50) {
        wc = 'N/A';
    }
    else {
        wc = 35.74 + 0.6215 * temp - 35.75 * (ws ** 0.16) + 0.4275 * temp * (ws ** 0.16);
    }
};

tempex.innerHTML = temp;
windex.innerHTML = ws;

wcCalc();
wcex.innerHTML = Math.round(wc);
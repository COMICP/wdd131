function drop() {
    let x = document.getElementById("nav");
    let but = document.getElementById('navbut')
    if (x.style.display === "none") {
        x.style.display = "flex";
        but.innerHTML = 'X';
    } else {
        x.style.display = "none";
        but.innerHTML = '☰';
    }
}


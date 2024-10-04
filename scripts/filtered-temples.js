const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
  ];

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

function displayHome(){
    temples.forEach(element => {
        let img = element.imageUrl;
        let tname = element.templeName;
        let tsize = element.area;
        let tded = element.dedicated;
        let local = element.location;

        let fig = document.createElement('figure');
        let imgdiv = document.createElement('img');
        let caption = document.createElement('figcaption');
        let size = document.createElement('p');
        let dedate = document.createElement('p');
        let location = document.createElement('p');

        size.innerHTML = 'SQFT: ' +tsize;
        dedate.innerHTML = 'Dedicated: ' +tded;
        location.innerHTML = 'Location: ' +local;
        caption.innerHTML = 'Name: ' + tname;

        imgdiv.setAttribute('loading', 'lazy');
        imgdiv.setAttribute('src', img);
        fig.appendChild(imgdiv);
        fig.appendChild(caption);
        fig.appendChild(location)
        fig.appendChild(dedate)
        fig.appendChild(size)

        document.getElementById('imgs').appendChild(fig)
        
    });
}
function oldtemp(){

}

displayHome();
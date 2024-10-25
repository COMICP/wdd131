const images = [
    {
    url: "https://cdn.myportfolio.com/3f2e495b-b58e-4e01-8e9d-8547b3d128fc/278c148f-7f9a-459a-baa8-37092eaa0005_rw_600.jpg?h=d65c6e8a21aac5116a73e75bd9a8892f", 
    title: "one",
    order: 1
},
{
    url: "https://cdn.myportfolio.com/3f2e495b-b58e-4e01-8e9d-8547b3d128fc/76912269-01c7-47a4-840e-41a1cf06f894_rw_600.jpg?h=8b891b6e836b8df0b99b1c47fbdab7cd", 
    title: "two",
    order: 2
},
{
    url: "https://cdn.myportfolio.com/3f2e495b-b58e-4e01-8e9d-8547b3d128fc/de889d46-1220-4386-a871-8e0100dd0855_rw_600.jpg?h=691b0e7a44e4544087c5807ef7e75d93", 
    title: "three",
    order: 3
},
{
    url: "https://cdn.myportfolio.com/3f2e495b-b58e-4e01-8e9d-8547b3d128fc/a64c3796-f189-4364-935b-ded74c3d255b_rw_600.jpg?h=0a3bc0534e6ce22afa1a619a168601d1", 
    title: "four",
    order: 4
},
{
    url: "https://cdn.myportfolio.com/3f2e495b-b58e-4e01-8e9d-8547b3d128fc/c71b6c87-f02f-4673-9396-28e42edd9617_rw_600.jpg?h=ab3c8efed949eb62981592e01cce96b6", 
    title: "five",
    order: 5
},
{
    url: "https://cdn.myportfolio.com/3f2e495b-b58e-4e01-8e9d-8547b3d128fc/ae017245-28ff-4aa0-8292-d3288e4b7513_rw_600.jpg?h=f2f8d5c1912907309221f130c2e41570", 
    title: "six",
    order: 6
},
{
    url: "https://cdn.myportfolio.com/3f2e495b-b58e-4e01-8e9d-8547b3d128fc/ac001564-9520-40a0-877c-845bd8395960_rw_600.jpg?h=023cfe5f442419b63fd08e6ff03f59ac", 
    title: "seven",
    order: 7
},
{
    url: "https://cdn.myportfolio.com/3f2e495b-b58e-4e01-8e9d-8547b3d128fc/caf987f6-482e-4133-b484-2345b2ae9194_rw_600.jpg?h=ddbe0a4027c6734cff3d734a48066885", 
    title: "eight",
    order: 8
},
{
    url: "https://cdn.myportfolio.com/3f2e495b-b58e-4e01-8e9d-8547b3d128fc/75153845-5a45-4c5b-8d53-af7bea8457e1_rw_600.jpg?h=98aca5e17bf13f77caf0df524ca7a72b", 
    title: "nine",
    order: 9
},
{
    url: "https://cdn.myportfolio.com/3f2e495b-b58e-4e01-8e9d-8547b3d128fc/9f855b32-7a29-4f20-ae20-6dc40d474cf6_rw_600.jpg?h=c7eecef7b85fc49975d8b31a42ccd7f9", 
    title: "ten",
    order: 10
}

]

function displayHome() {
    document.getElementById('imgs').innerHTML = '';

    images.forEach(element => {
        let img = element.url;
        let tname = element.title;

        let fig = document.createElement('figure');
        let imgdiv = document.createElement('img');
        let caption = document.createElement('figcaption');

        caption.innerHTML = 'Name: ' + tname;

        imgdiv.setAttribute('loading', 'lazy');
        imgdiv.setAttribute('src', img);
        fig.appendChild(imgdiv);
        fig.appendChild(caption);

        console.log(images.order)
        document.getElementById('imgs').appendChild(fig)

    });
}

displayHome();
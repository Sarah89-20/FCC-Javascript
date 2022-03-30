const reviews = [
    {
        id: 1, 
        name:'susan', 
        job: 'ux designer',

        text: 'written stuff here'
    },
    {
        id: 2, 
        name:'mark', 
        job: 'developer',
        
        text: 'written stuff here'
    },
    {
        id: 3, 
        name:'mat', 
        job: 'programmer',
       
        text: 'written stuff here'
    }
    ];

    //select items
   // const img = document.getElementById("person-img");
    const author = document.getElementById("author");
    const job = document.getElementById("job");
    const info = document.getElementById("info");

    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const randomBtn = document.querySelector('.random-btn');

    //set starting item
    let currentItem = 1;

    //load initial item

    window.addEventListener('DOMContentLoaded', function(){
        const item = reviews[currentItem];
        console.log(author);

        author.textContent = item.name;
        job.textContent = item.job;
        info.textContent = item.text;
    });
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
    let currentItem = 0;

    //load initial item

    window.addEventListener('DOMContentLoaded', function(){
        showPerson();
    });

    function showPerson(){
        const item = reviews[currentItem];
        author.textContent = item.name;
        job.textContent = item.job;
        info.textContent = item.text;
    };

    nextBtn.addEventListener('click', function(){
        currentItem++;
        if(currentItem > reviews.length - 1 ){ 
            currentItem = 0;
        };
        showPerson();
    });
    prevBtn.addEventListener('click', function(){
        currentItem--;
        if(currentItem < 0 ){ 
            currentItem = reviews.length -1;
        };
        showPerson();
    });

    randomBtn.addEventListener('click', function(){
          
          currentItem = Math.floor(Math.random() * reviews.length);
          showPerson();
          
    });

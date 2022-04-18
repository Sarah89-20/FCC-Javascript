// Traversing The DOM -- option 1
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
// btn.addEventListener('click', function(e){
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
// })
// })

/*****************/

//Using Selectors and targeting specific things --option 2
const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    //question references each article
   const btn = question.querySelector('.question-btn');

   btn.addEventListener('click', function(e){

    questions.forEach(function(item){
        /*if article in current loop doesn't match the article in the click event it will remove the class .show-text,closing the question-text section*/
        if(item !== question){
        item.classList.remove('show-text');
        }
    });

    question.classList.toggle('show-text');
   });
});
// const plusIcon = document.querySelector('.plus-icon');
// const minusIcon = document.querySelector('.minus-icon');
// const questText = document.querySelector('.question-text');

// plusIcon.addEventListener('click', function(){
//     plusIcon.classList.add('show-text');
//     minusIcon.classList.add('show-text');
//     questText.classList.add('show-text');
//     console.log(questText.classList);
// });

// minusIcon.addEventListener('click', function(){
//     plusIcon.classList.remove('show-text');
//     minusIcon.classList.remove('show-text');
//     questText.classList.remove('show-text');
// });

const btns = document.querySelectorAll('.question-btn');



btns.forEach(function(btn){
btn.addEventListener('click', function(e){
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle('show-text');
})
})
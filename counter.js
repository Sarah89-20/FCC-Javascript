//set initial count
let count = 0;

//select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//this function accesses each item in the nodelist-in this case the buttons 
btns.forEach(function(btn){
    
//e is the event object.
//currentTarget contains html button info
//classList gets all the classes involved in the current Target.     
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
                
        }else if(styles.contains('increase')){
            count++;  
        }else{
            count = 0;
        }

        if(count > 0 ){
            value.style.color = 'green';
        }else if(count < 0){
            value.style.color='red';
        }else{
            value.style.color ='black';
        }
        value.textContent = count;
    })
});
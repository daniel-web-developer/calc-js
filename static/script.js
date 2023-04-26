const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    let inputDay = document.querySelector('#inputDay').value;
    let inputMonth = document.querySelector('#inputMonth').value;
    let inputYear = document.querySelector('#inputYear').value;

    if(inputDay <= 0 || inputDay > 31){
        //valid day
    }
})
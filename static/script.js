const button = document.querySelector('#btn');
const errors = document.querySelectorAll("[data-error]");
const inputs = document.querySelectorAll("[data-in]");

const classes = ["error", "error-color", "display-none"];


button.addEventListener('click', () => {
    
    const today = new Date();
    const thisDay = today.getDate();
    const thisMonth = today.getMonth() + 1;
    const thisYear = today.getFullYear();

    let textDay = document.querySelector("#textDay");
    let inputDay = document.querySelector('#inputDay').value;
    let iDay = document.querySelector('#inputDay');
    let textMonth = document.querySelector("#textMonth");
    let inputMonth = document.querySelector('#inputMonth').value;
    let iMonth = document.querySelector('#inputMonth');
    let textYear = document.querySelector("#textYear");
    let inputYear = document.querySelector('#inputYear').value;
    let iYear = document.querySelector('#inputYear');

    inputs.forEach(input => {
        input.className = '';
    })

    textDay.classList.add("main-date-each");
    textMonth.classList.add("main-date-each");

    errors.forEach(error => {
        error.className = '';
        error.classList.add(...classes);
    })

    
    if(inputDay == ""){
        let day = document.querySelector("#errorEmptyDay");

        day.classList.remove('display-none');
        textDay.classList.add('error-color');
        iDay.classList.add('error-border-color');
    }

    if(inputMonth == ""){
        let month = document.querySelector("#errorEmptyMonth");

        month.classList.remove('display-none');
        textMonth.classList.add('error-color');
        iMonth.classList.add('error-border-color');
    }

    if(inputYear == ""){
        let year = document.querySelector("#errorEmptyYear");

        year.classList.remove('display-none');
        textYear.classList.add('error-color');
        iYear.classList.add('error-border-color');
    }
    
    let nDay = Number(inputDay);
    let nMonth = Number(inputMonth);
    let nYear = Number(inputYear);

    if(nDay < 0 || nDay > 31 || nDay === 0 && inputDay != ""){
        let day = document.querySelector("#errorDay");
        
        day.classList.remove('display-none');
        textDay.classList.add('error-color');
        iDay.classList.add('error-border-color');
    }
    
    if(nMonth < 0 || nMonth > 12 || nMonth === 0 && inputMonth != ""){
        let month = document.querySelector("#errorMonth");
        
        month.classList.remove('display-none');
        textMonth.classList.add('error-color');
        iMonth.classList.add('error-border-color');
    }

    if(nYear === 0 && inputYear != ""){
        let year = document.querySelector("#errorYear");

        year.classList.remove('display-none');
        textYear.classList.add('error-color');
        iYear.classList.add('error-border-color');
    }

    if(nYear > thisYear || nMonth > thisMonth && nYear >= thisYear || nDay > thisDay && nMonth >= thisMonth && nYear >= thisYear){
        future = document.querySelector("#errorFuture");
        future.classList.remove('display-none');

        textDay.classList.add('error-color');
        iDay.classList.add('error-border-color');

        textMonth.classList.add('error-color');
        iMonth.classList.add('error-border-color');

        textYear.classList.add('error-color');
        iYear.classList.add('error-border-color');
    }

    if(nMonth == 2 && nDay > 28 && (nYear % 0 != 0) || nMonth == 2 && (nYear % 0 == 0) && nDay > 29 || nMonth == 4 && nDay > 30 || nMonth == 6 && nDay > 30 || nMonth == 9 && nDay > 30 || nMonth == 11 && nDay > 30){
        invalidDate = document.querySelector("#errorDate");
        invalidDate.classList.remove('display-none');
    }

    

})
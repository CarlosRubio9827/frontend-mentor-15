const buttonReset = document.querySelector('#buttonReset');
const billInput = document.querySelector('#billInput');
const customInput = document.querySelector('#customInput');
const peopleInput = document.querySelector('#peopleInput');

buttonReset.addEventListener('click', ()=>{
    billInput.value = "";
    customInput.value = "";
    peopleInput.value = "";
    const resultTipValue = document.querySelector('.container-result-tip-value p');
    resultTipValue.innerHTML ='$0'
    const resultTotalValue = document.querySelector('.container-result-total-value p');
    resultTotalValue.innerHTML ='$0'
})

const button = document.querySelectorAll('.inputTip')

const button2 = Array.from(button)
button2.forEach(i => {
    i.addEventListener('click', ()=>{
        button2.forEach(j =>{
            j.classList.remove('activeTip')
            j.classList.remove('container-tip-percentage-active')
        })
        i.classList.toggle('activeTip')
        i.classList.toggle('container-tip-percentage-active')
        mainFunction() 
    })
});

// Calcule Tip Amount
function calculeTipAmount(bill, tip, numPeople){
    const resultTipValue = document.querySelector('.container-result-tip-value p');
    if(bill == "" || tip == "" || numPeople == ""){
        resultTipValue.innerHTML ='$0'
    }else{
        const amountPerson = (((parseInt(bill)*parseInt(tip))/100)/parseInt(numPeople)).toFixed(1);
        resultTipValue.innerHTML ='$'+amountPerson
    }
}

// Calcule Total Person
function calculeTotalPerson(bill, tip, numPeople){
    const resultTotalValue = document.querySelector('.container-result-total-value p');
    if(bill == "" || tip == "" || numPeople == ""){
        resultTotalValue.innerHTML ='$0'
    }else{
        const totalPerson = (parseInt(parseInt(bill) + ((parseInt(bill)*parseInt(tip))/100))/parseInt(numPeople)).toFixed(1);
        resultTotalValue.innerHTML ='$'+totalPerson
    }
}

// Calcule the selected input
const calculeSelectedInput = () => {
    let value=0;
    button2.forEach(i => {
        if(i.classList.contains('activeTip')){
            
            if(i.value[i.value.length-1] == '%'){
                value = i.value.substring(0, i.value.length-1)
            }else{
                value = i.value
            }
        }
    });
    return parseInt(value);
} 
 
billInput.addEventListener('input', ()=>{
    mainFunction()  
})
customInput.addEventListener('input', ()=>{
    mainFunction()  
})
peopleInput.addEventListener('input', ()=>{  
    mainFunction()    
})



function mainFunction(){
    calculeTipAmount(billInput.value, calculeSelectedInput(), peopleInput.value)
    calculeTotalPerson(billInput.value, calculeSelectedInput(), peopleInput.value)
}


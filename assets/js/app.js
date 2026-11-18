const cl = console.log;

const bgColor = document.getElementById('bgColor')

function onFilter(eve){
    let val = eve.target.value;
    let allDives = [...document.querySelectorAll('.all')]
    allDives.forEach(d =>{
    allDives.classList.add('d-none')
    })

    let selectedDiv = [...document.getElementsByClassName(val)]
    selectedDiv.forEach(d =>{
       d.classList.remove('d-none') 
    })
    
}

bgColor.addEventListener('change',onFilter)
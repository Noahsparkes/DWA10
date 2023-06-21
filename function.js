
const MAX_NUMBER = 15
const MIN_NUMBER = -5
const STEP_AMOUNT = 1;

const number = document.querySelector('input[data-key="number"]')
const subtract = document.querySelector('sl-button[data-key="subtract"]')
const add = document.querySelector('sl-button[data-key="add"]')



const subtractHandler = () => {
    const newValue = parseInt( number.value) - STEP_AMOUNT
    number.value = newValue

    if (add.disabled === true) {
        add.disabled = false
    }
    

   if (newValue <= MIN_NUMBER) {
     subtract.disabled = true
    }
}

const addHandler = () => {
    const newValue = parseInt( number.value) + STEP_AMOUNT
    number.value = newValue

    if (subtract.disabled === true) {
        add.disabled = false   
    }

    if (newValue >= MAX_NUMBER) {
        add.disabled = true
    }
}

subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)
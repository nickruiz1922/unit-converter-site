
const meterToFeet = 3.281 
const literToGallon = 0.264 
const kiloToPound = 2.204 

myInput = []
const convertBtn = document.getElementById("convert-btn")
const lengthResult = document.getElementById("length-result")
const volResult = document.getElementById("vol-result")
const massResult = document.getElementById("mass-result")
const inputEl = document.getElementById("input-el")

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    lengthResult.textContent = `${baseValue} meters = ${Number(baseValue * meterToFeet).toFixed(2)} feet | ${baseValue} feet = ${Number(baseValue / meterToFeet).toFixed(2)} meters `
    volResult.textContent = `${baseValue} liters = ${Number(baseValue * literToGallon).toFixed(2)} gallons | ${baseValue} gallons = ${Number(baseValue / literToGallon).toFixed(2)} liters `
    massResult.textContent = `${baseValue} kilograms = ${Number(baseValue * kiloToPound).toFixed(2)} pounds | ${baseValue} pounds = ${Number(baseValue / kiloToPound).toFixed(2)} kilograms `
})



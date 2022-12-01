/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let units = [
    {
        meters: inputEl.value,
        feet: inputEl.value
    },
    {
        liters: inputEl.value,
        gallons: inputEl.value
    },
    {
        kilos: inputEl.value,
        pounds: inputEl.value
    }
]

const inputEl = document.getElementById("input-field")
const convertBtn = document.getElementById("convert-btn")

function convert() {
    
}

convertBtn.addEventListener("click", function() {
    convert()
})

let antwberekend = 0

function showSom()
{
    //alert("Check verbinding")
    let tafelvan = document.getElementById("inputTafelvan").value
    let tafeltot = document.getElementById("inputTafeltot").value
    let vermfactor = Math.floor(Math.random() * tafeltot) + 1
    let som = vermfactor + " x " + tafelvan
    document.getElementById("inputSom").value = som
    antwberekend = vermfactor * tafelvan
    document.getElementById("inputAntwoord").classList.remove("is-valid")
    document.getElementById("inputAntwoord").classList.remove("is-invalid")
}

function checkAntwoord()
{
    //alert("Check verbinding")
    let antwgebr = document.getElementById("inputAntwoord").value
    if(antwgebr == antwberekend){
        document.getElementById("inputAntwoord").classList.add("is-valid")
    }
    else{
        document.getElementById("inputAntwoord").classList.add("is-invalid")  
    }
}
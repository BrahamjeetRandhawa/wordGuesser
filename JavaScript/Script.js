
let randomDier = Math.ceil(Math.random()*10)

console.log(randomDier)

// Hier staan de woorden die de gebruiker moet randen. Ze staan hier in een array.
const dieren = ["HOND", "POES", "GEIT", "HAAN", "MUIS", "EZEL", "DUIF", "EEND", "GANS", "BEER"]


// Deze formule zorgt ervoor dat de woorden op de juiste plek staan.
let namen = dieren[randomDier-1]

console.log(namen)



// Als het woord of letter in de te raden woord zit dan kun je die vinden in de console
if (namen.includes('HOND')){
    console.log("Je hebt het woord geraden")
} else {
    console.log("Je hebt gefaald")
}


if (namen.includes('POES')){
    console.log("Je hebt het woord geraden")
} else {
    console.log("Je hebt gefaald")
}

if (namen.includes('GEIT')){
    console.log("Je hebt het woord geraden")
} else {
    console.log("Je hebt gefaald")
}

if (namen.includes('HAAN')){
    console.log("Je hebt het woord geraden")
} else {
    console.log("Je hebt gefaald")
}


if (namen.includes('MUIS')){
    console.log("Je hebt het woord geraden")
} else {
    console.log("Je hebt gefaald")
}


if (namen.includes('EZEL')){
    console.log("Je hebt het woord geraden")
} else {
    console.log("Je hebt gefaald")
}

if (namen.includes('DUIF')){
    console.log("Je hebt het woord geraden")
} else {
    console.log("Je hebt gefaald")
}


if (namen.includes('EEND')){
    console.log("Je hebt het woord geraden")
} else {
    console.log("Je hebt gefaald")
}

if (namen.includes('GANS')){
    console.log("Je hebt het woord geraden")
} else {
    console.log("Je hebt gefaald")
}


if (namen.includes('BEER')){
    console.log("Je hebt het woord geraden")
} else {
    console.log("Je hebt gefaald")
}


if (namen.includes('A')){
    console.log("Er zit een A in")
} else {
    console.log("Er zit geen A in")
}


if (namen.includes('B')){
    console.log("Er zit een B in")
} else {
    console.log("Er zit geen B in")
}


if (namen.includes('C')){
    console.log("Er zit een C in")
} else {
    console.log("Er zit geen C in")
}


if (namen.includes('D')){
    console.log("Er zit een D in")
} else {
    console.log("Er zit geen D in")
}


if (namen.includes('E')){
    console.log("Er zit een E in")
} else {
    console.log("Er zit geen E in")
}


if (namen.includes('F')){
    console.log("Er zit een F in")
} else {
    console.log("Er zit geen F in")
}


if (namen.includes('G')){
    console.log("Er zit een G in")
} else {
    console.log("Er zit geen G in")
}


if (namen.includes('H')){
    console.log("Er zit een H in")
} else {
    console.log("Er zit geen H in")
}


if (namen.includes('I')){
    console.log("Er zit een I in")
} else {
    console.log("Er zit geen I in")
}


if (namen.includes('J')){
    console.log("Er zit een J in")
} else {
    console.log("Er zit geen J in")
}


if (namen.includes('K')){
    console.log("Er zit een K in")
} else {
    console.log("Er zit geen K in")
}


if (namen.includes('L')){
    console.log("Er zit een L in")
} else {
    console.log("Er zit geen L in")
}


if (namen.includes('M')){
    console.log("Er zit een M in")
} else {
    console.log("Er zit geen M in")
}


if (namen.includes('N')){
    console.log("Er zit een N in")
} else {
    console.log("Er zit geen N in")
}


if (namen.includes('O')){
    console.log("Er zit een O in")
} else {
    console.log("Er zit geen O in")
}


if (namen.includes('P')){
    console.log("Er zit een P in")
} else {
    console.log("Er zit geen P in")
}



if (namen.includes('Q')){
    console.log("Er zit een Q in")
} else {
    console.log("Er zit geen Q in")
}


if (namen.includes('R')){
    console.log("Er zit een R in")
} else {
    console.log("Er zit geen R in")
}

if (namen.includes('S')){
    console.log("Er zit een S in")
} else {
    console.log("Er zit geen S in")
}


if (namen.includes('T')){
    console.log("Er zit een T in")
} else {
    console.log("Er zit geen T in")
}


if (namen.includes('U')){
    console.log("Er zit een U in")
} else {
    console.log("Er zit geen U in")
}


if (namen.includes('V')){
    console.log("Er zit een V in")
} else {
    console.log("Er zit geen V in")
}


if (namen.includes('W')){
    console.log("Er zit een W in")
} else {
    console.log("Er zit geen W in")
}



if (namen.includes('X')){
    console.log("Er zit een X in")
} else {
    console.log("Er zit geen X in")
}



if (namen.includes('Y')){
    console.log("Er zit een Y in")
} else {
    console.log("Er zit geen Y in")
}


if (namen.includes('Z')){
    console.log("Er zit een Z in")
} else {
    console.log("Er zit geen Z in")
}










// Hieronder staan de functies voor de letters. Als je het goed hebt dan wordt de letter ingevuld en wordt het vakje groen.
// Als het fout is dan wordt het vakje rood.


let letterA = document.querySelector('.letterA')

function deLetterA(){

    if (randomDier == 4){
        letterA.classList.add("goed")
        document.querySelector('.getal2').textContent = "A"
        document.querySelector('.getal3').textContent = "A"
        foutLetter++; 
    } else if (randomDier == 9){
        letterA.classList.add("goed")
        document.querySelector('.getal2').textContent = "A"
    } else {
        letterA.classList.add("fout")
    }
}

letterA.addEventListener('click', deLetterA)



let letterB = document.querySelector('.letterB')

function deLetterB(){

    if (randomDier == 10){
        document.querySelector('.getal1').textContent = "B"
        letterB.classList.add("goed")
    } else {
        letterB.classList.add("fout")
    }
}

letterB.addEventListener('click', deLetterB)



let letterC = document.querySelector('.letterC')

function deLetterC(){

    if (randomDier == 1 || randomDier == 2 || randomDier == 3 || randomDier == 4 || randomDier == 5 || randomDier == 6 || randomDier == 7 || randomDier == 8 || randomDier == 9 || randomDier == 10){
        letterC.classList.add("fout")
    } else {
        letterC.classList.add("goed")
    }
}

letterC.addEventListener('click', deLetterC)





let letterD = document.querySelector('.letterD')

function deLetterD(){

    if (randomDier == 1 || randomDier == 8){
        letterD.classList.add("goed")
        document.querySelector('.getal4').textContent = "D"
    } else if (randomDier == 7){
        letterD.classList.add("goed")
        document.querySelector('.getal1').textContent = "D"
    } else {
        letterD.classList.add("fout")
    }
}

letterD.addEventListener('click', deLetterD)




let letterE = document.querySelector('.letterE')

function deLetterE(){

    if (randomDier == 2){
        document.querySelector('.getal3').textContent = "E"
        letterE.classList.add("goed")
    } else if (randomDier == 3){
        letterE.classList.add("goed")
        document.querySelector('.getal2').textContent = "E"
    } else if (randomDier == 6){
        letterE.classList.add("goed")
        document.querySelector('.getal1').textContent = "E"
        document.querySelector('.getal3').textContent = "E"
    } else if (randomDier == 8){
        document.querySelector('.getal1').textContent = "E"
        document.querySelector('.getal2').textContent = "E"
        letterE.classList.add("goed")
    } else if (randomDier == 10){
        letterE.classList.add("goed")
        document.querySelector('.getal2').textContent = "E"
        document.querySelector('.getal3').textContent = "E"
    }
    else {
        letterE.classList.add("fout")
    }
}

letterE.addEventListener('click', deLetterE)





let letterF = document.querySelector('.letterF')

function deLetterF(){

    if (randomDier == 7){
        document.querySelector('.getal4').textContent = "F"
        letterF.classList.add("goed")
    } else {
        letterF.classList.add("fout")
    }
}

letterF.addEventListener('click', deLetterF)




let letterG = document.querySelector('.letterG')

function deLetterG(){

    if (randomDier == 3 || randomDier == 9){
        letterG.classList.add("goed")
        document.querySelector('.getal1').textContent = "G"
    } else {
        letterG.classList.add("fout")
    }
}

letterG.addEventListener('click', deLetterG)





let letterH = document.querySelector('.letterH')

function deLetterH(){

    if (randomDier == 1){
        letterH.classList.add("goed")
        document.querySelector('.getal1').textContent = "H"
    } else if (randomDier == 4){
        letterH.classList.add("goed")
        document.querySelector('.getal1').textContent = "H"
    } else {
        letterH.classList.add("fout")
    }
}

letterH.addEventListener('click', deLetterH)




let letterI = document.querySelector('.letterI')

function deLetterI(){

    if (randomDier == 3 || randomDier == 5 || randomDier == 7){
        letterI.classList.add("goed")
        document.querySelector('.getal3').textContent = "I"
    } else {
        letterI.classList.add("fout")
    }
}

letterI.addEventListener('click', deLetterI)



let letterJ = document.querySelector('.letterJ')

function deLetterJ(){

    if (randomDier == 1 || randomDier == 2 || randomDier == 3 || randomDier == 4 || randomDier == 5 ||randomDier == 6 || randomDier == 7 || randomDier == 8 || randomDier == 9 || randomDier == 10){
        letterJ.classList.add("fout")
    } else {
        letterJ.classList.add("goed")
    }
}

letterJ.addEventListener('click', deLetterJ)





let letterK = document.querySelector('.letterK')

function deLetterK(){

    if (randomDier == 1 || randomDier == 2 || randomDier == 3 || randomDier == 4 || randomDier == 5 || randomDier == 6 || randomDier == 7 || randomDier == 8 || randomDier == 9 || randomDier == 10){
        letterK.classList.add("fout")
    } else {
        letterK.classList.add("goed")
    }
}

letterK.addEventListener('click', deLetterK)



let letterL = document.querySelector('.letterL')

function deLetterL(){

    if (randomDier == 6){
        document.querySelector(".getal4").textContent = "L"
        letterL.classList.add("goed")
    } else {
        letterL.classList.add("fout")
    }
}

letterL.addEventListener('click', deLetterL)



let letterM = document.querySelector('.letterM')

function deLetterM(){

    if (randomDier == 5){
        letterM.classList.add("goed")
        document.querySelector('.getal1').textContent = "M"
    } else {
        letterM.classList.add("fout")
    }
}

letterM.addEventListener('click', deLetterM)




let letterN = document.querySelector('.letterN')

function deLetterN(){

    if (randomDier == 1 || randomDier == 8 || randomDier == 9){
        letterN.classList.add("goed")
        document.querySelector('.getal3').textContent = "N"
    } else if (randomDier == 4){
        letterN.classList.add('goed')
        document.querySelector('.getal4').textContent = "N"
    } else {
        letterN.classList.add("fout")
    }
}

letterN.addEventListener('click', deLetterN)



let letterO = document.querySelector('.letterO')

function deLetterO(){

    if (randomDier == 1 || randomDier == 2){
        letterO.classList.add("goed")
        document.querySelector('.getal2').textContent = "O"
    } else {
        letterO.classList.add("fout")
    }
}

letterO.addEventListener('click', deLetterO)




let letterP = document.querySelector('.letterP')

function deLetterP(){

    if (randomDier == 2){
        letterP.classList.add("goed")
        document.querySelector('.getal1').textContent = "P"
    } else{
        letterP.classList.add("fout")
    }
}

letterP.addEventListener('click', deLetterP)





let letterQ = document.querySelector('.letterQ')

function deLetterQ(){

    if (randomDier == 1 || randomDier == 2 || randomDier == 3 || randomDier == 4 || randomDier == 5 || randomDier == 6 || randomDier == 7 || randomDier == 8 || randomDier == 9 || randomDier == 10){
        letterQ.classList.add("fout")
    } else{
        letterQ.classList.add("goed")
    }
}

letterQ.addEventListener('click', deLetterQ)



let letterR = document.querySelector('.letterR')

function deLetterR(){

    if (randomDier == 10){
        document.querySelector('.getal4').textContent = "R"
        letterR.classList.add("goed")
    } else{
        letterR.classList.add("fout")
    }
}

letterR.addEventListener('click', deLetterR)





let letterS = document.querySelector('.letterS')

function deLetterS(){

    if (randomDier == 2 || randomDier == 5 || randomDier == 9){
        letterS.classList.add("goed")
        document.querySelector('.getal4').textContent = "S"
    } else {
        letterS.classList.add("fout")
    }
}

letterS.addEventListener('click', deLetterS)




let letterT = document.querySelector('.letterT')

function deLetterT(){

    if (randomDier == 3){
        letterT.classList.add("goed")
        document.querySelector('.getal4').textContent = "T"
    } else {
        letterT.classList.add("fout")
    }
}

letterT.addEventListener('click', deLetterT)





let letterU = document.querySelector('.letterU')

function deLetterU(){

    if (randomDier == 5 || randomDier == 7){
        letterU.classList.add("goed")
        document.querySelector('.getal2').textContent = "U"
    } else{
        letterU.classList.add("fout")
    }
}

letterU.addEventListener('click', deLetterU)





let letterV = document.querySelector('.letterV')

function deLetterV(){

    if (randomDier == 1 || randomDier == 2 || randomDier == 3 || randomDier == 4 || randomDier == 5 || randomDier == 6 || randomDier == 7 || randomDier == 8 || randomDier == 9 || randomDier == 10){
        letterV.classList.add("fout")
    } else{
        letterV.classList.add("goed")
    }
}

letterV.addEventListener('click', deLetterV)




let letterW = document.querySelector('.letterW')

function deLetterW(){

    if (randomDier == 1 || randomDier == 2 || randomDier == 3 || randomDier == 4 || randomDier == 5 || randomDier == 6 || randomDier == 7 || randomDier == 8 || randomDier == 9 || randomDier == 10){
        letterW.classList.add("fout")
    } else{
        letterW.classList.add("goed")
    }
}

letterW.addEventListener('click', deLetterW)



let letterX = document.querySelector('.letterX')

function deLetterX(){

    if (randomDier == 1 || randomDier == 2 || randomDier == 3 || randomDier == 4 || randomDier == 5 || randomDier == 6 || randomDier == 7 || randomDier == 8 || randomDier == 9 || randomDier == 10){
        letterX.classList.add("fout")
    } else{
        letterX.classList.add("goed")
    }
}

letterX.addEventListener('click', deLetterX)



let letterY = document.querySelector('.letterY')

function deLetterY(){

    if (randomDier == 1 || randomDier == 2 || randomDier == 3 || randomDier == 4 || randomDier == 5 || randomDier == 6 || randomDier == 7 || randomDier == 8 || randomDier == 9 || randomDier == 10){
        letterY.classList.add("fout")
    } else{
        letterY.classList.add("goed")
    }
}

letterY.addEventListener('click', deLetterY)




let letterZ = document.querySelector('.letterZ')

function deLetterZ(){

    if (randomDier == 6){
        letterZ.classList.add("goed")
        document.querySelector(".getal2").textContent = "Z"
    } else{
        letterZ.classList.add("fout")
    }
}

letterZ.addEventListener('click', deLetterZ)

















// Julian heeft mij geholpen met het aangeven van kleuren als je een woord fout hebt gekozen.
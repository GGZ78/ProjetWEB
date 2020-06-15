
var excusesArray = ["à cause du bus", "parce qu'il y avait du monde dans la rue", "parce qu'il y avait du monde à la machine à café", "car j'ai eu du mal à trouver une place pour garer mon voilier", "parce que je ne voulais pas gacher la fin de mon kebab", "car mon oncle est mort...",",ce n'est pas ma faute mais celle des autres"]
var lastIndex = -1;
function generer_excuse(){
    var index = Math.floor(Math.random() * excusesArray.length);
    while (index == lastIndex){
        console.log("index:" + index + " - last:" + lastIndex)
        index = Math.floor(Math.random() * excusesArray.length)
        console.log("index:" + index + " - last:" + lastIndex)
    }
    const randomExcuse = excusesArray[index]
    lastIndex = index
    document.getElementById('excusePlaceHolder').innerHTML ="Je suis en retard " + randomExcuse + "...";
}
function generer_excuse_from_home(){
    window.location.href = "generateur_excuses.html";
    generer_excuse();
}


function ajouter() {
    excusesArray.push(document.getElementById("excuse").value);
    document.getElementById('display').innerHTML +=
        "- Je suis en retard " + document.getElementById("excuse").value +"...</br>";
}

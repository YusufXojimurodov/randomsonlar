let randomson = +prompt("Nechigacha random son chiqarmoqchisiz")

for (let index = 0; index < 15; index++) {
   
    let sonchiqar = Math.round(Math.random() * randomson)

    let randomsonlar = document.getElementById('random').innerHTML += '  ' + sonchiqar

    if (sonchiqar % 2 === 0) {
        document.getElementById('juft').innerHTML += " " + sonchiqar
    } else {
        document.getElementById('toq').innerHTML += "  " + sonchiqar
    }

}
var gen;
var alinhamento;
var raca;
var classe;
var forc, dex, int, wis, con, cha;

function randomPerson(){
    var classes = ['artifice', 'barbaro', 'bardo', 'bruxo', 'clerigo', 'druida', 'feiticeiro', 'ranger', 'guerreiro', 'ladino', 'mago', 'monge', 'paladino'];
    var status = ['forc', 'dex', 'int', 'wis', 'con', 'cha'];
    var races = ['anao da montanha', 'anao da colina', 'alto elfo', 'elfo da floresta', 'elfo negro', 'meio-elfo', 'halfling', 'humano', 'draconato', 'gnomo da floresta', 'gnomo das rochas', 'meio-orc', 'tiefling infernal', 'tiefling abissal'];
    var alignment = ['lawful good', 'neutral good', 'chaotic good', 'lawful neutral', 'true neutral', 'chaotic neutral', 'lawful evil', 'neutral evil', 'chaotic evil'];
    var gender = ['masculino', 'feminino'];

    function randGender(_list){
        genero = _list[Math.floor(Math.random() * _list.length)];

        console.log("Seu genero eh: ", genero.toUpperCase())
        document.getElementById("gen").innerHTML = "Gênero: " + genero
        gen = genero
    }

    function randAlignment(_list){
        alinhamento = _list[Math.floor(Math.random() * _list.length)];

        console.log("Seu alinhamento eh: ", alinhamento.toUpperCase())
        document.getElementById("ali").innerHTML = "Alinhamento: " + alinhamento
    }

    function randRace(_list){
        raca = _list[Math.floor(Math.random() * _list.length)];

        console.log("Sua raça eh: ", raca.toUpperCase())
        document.getElementById("rac").innerHTML = "Raça: " + raca
    }

    function randClass(_list){
        classe = _list[Math.floor(Math.random() * _list.length)];

        console.log("Sua classe eh: ", classe.toUpperCase())
        document.getElementById("cla").innerHTML = "Classe: " + classe
    }

    function randStatus(_stat){
        d1 = Math.floor(Math.random() * 7)
        d2 = Math.floor(Math.random() * 7)
        d3 = Math.floor(Math.random() * 7)
        d4 = Math.floor(Math.random() * 7)

        menor = Math.min(d1, d2, d3, d4)
        soma = d1 + d2 + d3 + d4
        soma -= menor

        console.log("Seu status de", _stat.toUpperCase(), "eh de: ", soma)

        if (_stat == "forc"){
            document.getElementById("f").innerHTML = "Força: " + soma
            forc = soma
        }
        else if (_stat == "dex"){
            document.getElementById("d").innerHTML = "Destreza: " + soma
            dex = soma
        }
        else if (_stat == "int"){
            document.getElementById("i").innerHTML = "Inteligência: " + soma
            int = soma
        }
        else if (_stat == "wis"){
            document.getElementById("s").innerHTML = "Sabedoria: " + soma
            wis = soma
        }
        else if (_stat == "con"){
            document.getElementById("co").innerHTML = "Constituição: " + soma
            con = soma
        }
        else if (_stat == "cha"){
            document.getElementById("ch").innerHTML = "Carisma: " + soma
            cha = soma
        }
    }

    for (stat of status){
        randStatus(stat);
    }

    randClass(classes);
    randRace(races);
    randAlignment(alignment)
    randGender(gender)
}
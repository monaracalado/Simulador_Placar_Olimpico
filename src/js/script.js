//div -> class linha ***
//div -> class coluna especificar class
//span
//div linha -> pais + img+span
const urlSite = "http://kenzie-olimpiadas.herokuapp.com/paises"

fetch(urlSite)
.then(response => response.json())
.then(data => tratarDadosMedalhas(data))



let quadroMedalhas = document.querySelector(".quadro-medalhas")
function criarTemplateLinha(colocacao,country,flag_url,medal_gold,medal_silver,medal_bronze){

    //CRIANDO LINHA DO QUADRO
    let linha = document.createElement("div",)
    //ADICIONANDO CLASS PARA A DIV LINHA
    linha.classList.add("linha")

    //COLUNAS RANK
    let coluna_rank = criaColuna_rank(`${colocacao}º`)
    let coluna_country = criaColuna_country(country,flag_url)
    let gold   = criaMedal_gold(medal_gold)
    let silver = criaMedal_silver(medal_silver)
    let bronze = criaMedal_bronze(medal_bronze)
    let totalMedalhas = (medal_gold + medal_silver + medal_bronze)
    let Total  = criaMedalTotal(totalMedalhas)

    linha.appendChild(coluna_rank)
    linha.appendChild(coluna_country)
    linha.appendChild(gold)
    linha.appendChild(silver)
    linha.appendChild(bronze)
    linha.appendChild(Total)

    quadroMedalhas.appendChild(linha)

}



function tratarDadosMedalhas(arrayPaises){
    let paisesOrdenados = ordenarPaises(arrayPaises)
    for(let i = 0; i < paisesOrdenados.length; i++){
        let pais = paisesOrdenados[i]
        
        criarTemplateLinha(
            i+1,
            pais.country,
            pais.flag_url,
            pais.medal_gold,
            pais.medal_silver,
            pais.medal_bronze,
        )
    }
}
 
function ordenarPaises(arrayPaises){
    let newArrayPaises = arrayPaises.map(somarTotal).sort((a,b) => b.medal_gold - a.medal_gold)
    return newArrayPaises
}

function somarTotal(pais){
    return pais
}



















// FUNÇÃO QUE CRIA COLUNA - RANK
function criaColuna_rank(rank){
    
    // 1 COLUNA - RANk
    let coluna_rank = document.createElement("div")
    coluna_rank.classList.add("coluna", "coluna-rank")

    //CRIANDO SPAN TÍTULO RANK
    let coluna_rank_titulo = document.createElement("span")
    coluna_rank_titulo.innerText = rank
    coluna_rank.appendChild(coluna_rank_titulo)

    return coluna_rank

}

// FUNÇÃO QUE CRIA COLUNA - country
function criaColuna_country(country,urlimagem){
    
    // 1 COLUNA - COUNTRY
    let coluna_country = document.createElement("div")
    coluna_country.classList.add("coluna", "coluna-country")

    //CRIANDO SPAN TÍTULO COUNTRY
    let coluna_country_titulo = document.createElement("span")
    coluna_country_titulo.innerText = country


    //CRIANDO IMAGEM COUNTRY
    let coluna_country_imagem = document.createElement("img")
    coluna_country_imagem.src = urlimagem
    coluna_country_imagem.alt = country
    coluna_country.appendChild(coluna_country_imagem)
    coluna_country.appendChild(coluna_country_titulo)

    return coluna_country

}

// FUNÇÃO QUE CRIA COLUNA - medal_gold
function criaMedal_gold(gold){
    
    // 1 COLUNA - medal_gold
    let coluna = document.createElement("div")
    coluna.classList.add("coluna", "medal_gold")

    //CRIANDO SPAN TÍTULO gold
    let coluna_titulo = document.createElement("span")
    coluna_titulo.innerText = gold
    coluna.appendChild(coluna_titulo)

    return coluna

}

// FUNÇÃO QUE CRIA COLUNA - medal_silver
function criaMedal_silver(silver){

    // 1 COLUNA - silver
    let coluna = document.createElement("div")
    coluna.classList.add("coluna", "medal_silver")

    //CRIANDO SPAN TÍTULO silver
    let coluna_titulo = document.createElement("span")
    coluna_titulo.innerText = silver
    coluna.appendChild(coluna_titulo)

    return coluna

}

// FUNÇÃO QUE CRIA COLUNA - medal_bronze
function criaMedal_bronze(bronze){
    
    // 1 COLUNA - bronze
    let coluna = document.createElement("div")
    coluna.classList.add("coluna", "medal_bronze")

    //CRIANDO SPAN TÍTULO bronze
    let coluna_titulo = document.createElement("span")
    coluna_titulo.innerText = bronze
    coluna.appendChild(coluna_titulo)

    return coluna

}

// FUNÇÃO QUE CRIA COLUNA - total
function criaMedalTotal(total){
    
    // 1 COLUNA - total
    let coluna = document.createElement("div")
    coluna.classList.add("coluna", "total")

    //CRIANDO SPAN TÍTULO total
    let coluna_titulo = document.createElement("span")
    coluna_titulo.innerText = total
    coluna.appendChild(coluna_titulo)

    return coluna

}
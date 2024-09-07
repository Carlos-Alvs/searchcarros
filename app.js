function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    campoPesquisa = campoPesquisa.toLowerCase();
    
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let origem = "";



    if (campoPesquisa == ""){
        section.innerHTML = "Nenhuma marca foi encontrada!"
        return
    };

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        origem = dado.origem.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || origem.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">
                    <h4>${dado.descricao}<h4>
                </p>
                <a href="${dado.link}" target="_blank">Site Oficial</a>
            </div>            
            `
        }
    };

    section.innerHTML = resultados;
}




const traducoes = {
  pt: {
    inicio: "Início",
    personagens: "Personagens",
    compendio: "Compêndio",
    configuracoes: "Configurações",
    sair: "Sair",
    ficar: "Ficar",
    tituloInicio: "Bem-vindo ao Início",
    descricaoInicio: "Aqui você poderá acessar as principais funcionalidades do seu criador de fichas de D&D.",
    tituloPersonagens: "Bem-vindo aos Personagens",
    descricaoPersonagens: "Aqui você poderá criar, visualizar, editar e gerenciar suas fichas de personagens.",
    tituloCompendio: "Bem-vindo ao Compêndio",
    descricaoCompendio: "Aqui você poderá consultar informações sobre criaturas, itens, magias, equipamentos, regras e outros elementos de D&D.",
    popupTitulo: "Já vai?",
    popupDescricao: "Nós não vamos ficar bravos com você, apenas queremos nos certificar de que tem certeza de que vai sair.",
    cabecalhoConfiguracoes: "CONFIGURAÇÕES",
    secaoGeral: "Configuração",
    linguagem: "Linguagem",
    fonte: "Fonte",
    tema: "Tema",
    tamanhoFonte: "Tamanho da Fonte",
    temaClaro: "Comum Claro",
    temaEscuro: "Comum Escuro",
    temaEstilizadoClaro: "Estilizado Claro",
    temaEstilizadoEscuro: "Estilizado Escuro",
    fonteTimes: "Times New Roman",
    fonteArial: "Arial",
    fonteComic: "Trebuchet MS",
    fonteMono: "Monospaced",
    tamanhoPequeno: "Pequeno",
    tamanhoNormal: "Normal",
    tamanhoGrande: "Grande",
    tamanhoMuitoGrande: "Muito Grande",
    tamanhoExtraGrande: "Extra Grande"
  },

  en: {
    inicio: "Home",
    personagens: "Characters",
    compendio: "Compendium",
    configuracoes: "Settings",
    sair: "Exit",
    ficar: "Stay",
    tituloInicio: "Welcome to Home",
    descricaoInicio: "Here you can access the main features of your D&D character sheet creator.",
    tituloPersonagens: "Welcome to Characters",
    descricaoPersonagens: "Here you can create, view, edit and manage your character sheets.",
    tituloCompendio: "Welcome to the Compendium",
    descricaoCompendio: "Here you can find information about creatures, items, spells, equipment, rules and other D&D elements.",
    popupTitulo: "Leaving already?",
    popupDescricao: "We won't be mad at you. We just want to make sure you're certain you want to leave.",
    cabecalhoConfiguracoes: "SETTINGS",
    secaoGeral: "Configuration",
    linguagem: "Language",
    fonte: "Font",
    tema: "Theme",
    tamanhoFonte: "Font Size",
    temaClaro: "Standard Light",
    temaEscuro: "Standard Dark",
    temaEstilizadoClaro: "Styled Light",
    temaEstilizadoEscuro: "Styled Dark",
    fonteTimes: "Times New Roman",
    fonteArial: "Arial",
    fonteComic: "Trebuchet MS",
    fonteMono: "Monospaced",
    tamanhoPequeno: "Small",
    tamanhoNormal: "Normal",
    tamanhoGrande: "Large",
    tamanhoMuitoGrande: "Very Large",
    tamanhoExtraGrande: "Extra Large"
  },

  es: {
    inicio: "Inicio",
    personagens: "Personajes",
    compendio: "Compendio",
    configuracoes: "Configuración",
    sair: "Salir",
    ficar: "Quedarse",
    tituloInicio: "Bienvenido al Inicio",
    descricaoInicio: "Aquí podrás acceder a las principales funciones de tu creador de fichas de D&D.",
    tituloPersonagens: "Bienvenido a Personajes",
    descricaoPersonagens: "Aquí podrás crear, visualizar, editar y administrar tus fichas de personajes.",
    tituloCompendio: "Bienvenido al Compendio",
    descricaoCompendio: "Aquí podrás consultar información sobre criaturas, objetos, hechizos, equipos, reglas y otros elementos de D&D.",
    popupTitulo: "¿Ya te vas?",
    popupDescricao: "No nos vamos a enfadar contigo, solo queremos asegurarnos de que estás seguro de querer salir.",
    cabecalhoConfiguracoes: "CONFIGURACIÓN",
    secaoGeral: "Configuración",
    linguagem: "Idioma",
    fonte: "Fuente",
    tema: "Tema",
    tamanhoFonte: "Tamaño de Fuente",
    temaClaro: "Común Claro",
    temaEscuro: "Común Oscuro",
    temaEstilizadoClaro: "Estilizado Claro",
    temaEstilizadoEscuro: "Estilizado Oscuro",
    fonteTimes: "Times New Roman",
    fonteArial: "Arial",
    fonteComic: "Trebuchet MS",
    fonteMono: "Monoespaciada",
    tamanhoPequeno: "Pequeño",
    tamanhoNormal: "Normal",
    tamanhoGrande: "Grande",
    tamanhoMuitoGrande: "Muy Grande",
    tamanhoExtraGrande: "Extra Grande"
  }
};

const paginas = {
  inicio: {
    titulo: "tituloInicio",
    descricao: "descricaoInicio"
  },
  personagens: {
    titulo: "tituloPersonagens",
    descricao: "descricaoPersonagens"
  },
  compendio: {
    titulo: "tituloCompendio",
    descricao: "descricaoCompendio"
  }
};

const configuracoesPadrao = {
  linguagem: "pt",
  fonte: "times",
  tema: "claro",
  tamanho: "16"
};

let configuracoes = {
  ...configuracoesPadrao,
  ...JSON.parse(localStorage.getItem("configuracoesDnd") || "{}")
};

// Corrige automaticamente fontes antigas que não existem mais.
if (!["times", "arial", "comic", "mono"].includes(configuracoes.fonte)) {
  configuracoes.fonte = "times";
}

const links = document.querySelectorAll("nav a[data-page]");
const conteudo = document.getElementById("conteudo");
const menuToggle = document.getElementById("menu-toggle");
const popup = document.getElementById("popup-overlay");
const sairButton = document.getElementById("sair-button");
const ficarButton = document.getElementById("ficar-button");

function salvarConfiguracoes() {
  localStorage.setItem("configuracoesDnd", JSON.stringify(configuracoes));
}

function traduzir(chave) {
  return traducoes[configuracoes.linguagem][chave] || chave;
}

function aplicarLinguagem() {
  document.documentElement.lang =
    configuracoes.linguagem === "pt" ? "pt-BR" :
    configuracoes.linguagem === "en" ? "en" : "es";

  document.querySelectorAll("[data-translation]").forEach(elemento => {
    const chave = elemento.dataset.translation;
    elemento.textContent = traduzir(chave);
  });

  const paginaAtual = conteudo.dataset.pagina;

  if (paginaAtual === "configuracoes") {
    renderizarConfiguracoes();
  } else if (paginaAtual && paginas[paginaAtual]) {
    renderizarPagina(paginaAtual);
  }
}

function aplicarFonte() {
  const fontes = {
    times: "'Times New Roman', Times, serif",
    arial: "Arial, sans-serif",
    comic: "'Trebuchet MS', Arial, sans-serif",
    mono: "monospace"
  };

  document.documentElement.style.fontFamily = fontes[configuracoes.fonte];
}

function aplicarTema() {
  document.body.classList.remove(
    "tema-escuro",
    "tema-estilizado-claro",
    "tema-estilizado-escuro"
  );

  const temas = {
    claro: "",
    escuro: "tema-escuro",
    estilizadoClaro: "tema-estilizado-claro",
    estilizadoEscuro: "tema-estilizado-escuro"
  };

  const classe = temas[configuracoes.tema];

  if (classe) {
    document.body.classList.add(classe);
  }
}

function aplicarTamanhoFonte() {
  document.documentElement.style.fontSize = configuracoes.tamanho + "px";
}

function aplicarTodasConfiguracoes() {
  aplicarLinguagem();
  aplicarFonte();
  aplicarTema();
  aplicarTamanhoFonte();
}

function renderizarPagina(paginaSelecionada) {
  const pagina = paginas[paginaSelecionada];

  if (!pagina) return;

  conteudo.dataset.pagina = paginaSelecionada;

  conteudo.innerHTML = `
    <h1 data-translation="${pagina.titulo}">${traduzir(pagina.titulo)}</h1>
    <p data-translation="${pagina.descricao}">${traduzir(pagina.descricao)}</p>
  `;
}

function renderizarConfiguracoes() {
  conteudo.dataset.pagina = "configuracoes";

  conteudo.innerHTML = `
    <div class="config-container">
      <div class="config-header">
        ${traduzir("cabecalhoConfiguracoes")}
      </div>

      <section class="config-section">
        <h2>${traduzir("secaoGeral")}</h2>

        <div class="config-option">
          <label for="linguagem">${traduzir("linguagem")}</label>
          <select id="linguagem">
            <option value="pt" ${configuracoes.linguagem === "pt" ? "selected" : ""}>Português</option>
            <option value="en" ${configuracoes.linguagem === "en" ? "selected" : ""}>English</option>
            <option value="es" ${configuracoes.linguagem === "es" ? "selected" : ""}>Español</option>
          </select>
        </div>

        <div class="config-option">
          <label for="fonte">${traduzir("fonte")}</label>
          <select id="fonte">
            <option value="times" ${configuracoes.fonte === "times" ? "selected" : ""}>${traduzir("fonteTimes")}</option>
            <option value="arial" ${configuracoes.fonte === "arial" ? "selected" : ""}>${traduzir("fonteArial")}</option>
            <option value="comic" ${configuracoes.fonte === "comic" ? "selected" : ""}>${traduzir("fonteComic")}</option>
            <option value="mono" ${configuracoes.fonte === "mono" ? "selected" : ""}>${traduzir("fonteMono")}</option>
          </select>
        </div>

        <div class="config-option">
          <label for="tema">${traduzir("tema")}</label>
          <select id="tema">
            <option value="claro" ${configuracoes.tema === "claro" ? "selected" : ""}>${traduzir("temaClaro")}</option>
            <option value="escuro" ${configuracoes.tema === "escuro" ? "selected" : ""}>${traduzir("temaEscuro")}</option>
            <option value="estilizadoClaro" ${configuracoes.tema === "estilizadoClaro" ? "selected" : ""}>${traduzir("temaEstilizadoClaro")}</option>
            <option value="estilizadoEscuro" ${configuracoes.tema === "estilizadoEscuro" ? "selected" : ""}>${traduzir("temaEstilizadoEscuro")}</option>
          </select>
        </div>

        <div class="config-option">
          <label for="tamanho">${traduzir("tamanhoFonte")}</label>
          <select id="tamanho">
            <option value="14" ${configuracoes.tamanho === "14" ? "selected" : ""}>${traduzir("tamanhoPequeno")}</option>
            <option value="16" ${configuracoes.tamanho === "16" ? "selected" : ""}>${traduzir("tamanhoNormal")}</option>
            <option value="18" ${configuracoes.tamanho === "18" ? "selected" : ""}>${traduzir("tamanhoGrande")}</option>
            <option value="20" ${configuracoes.tamanho === "20" ? "selected" : ""}>${traduzir("tamanhoMuitoGrande")}</option>
            <option value="22" ${configuracoes.tamanho === "22" ? "selected" : ""}>${traduzir("tamanhoExtraGrande")}</option>
          </select>
        </div>
      </section>
    </div>
  `;

  document.getElementById("linguagem").addEventListener("change", function() {
    configuracoes.linguagem = this.value;
    salvarConfiguracoes();
    aplicarLinguagem();
  });

  document.getElementById("fonte").addEventListener("change", function() {
    configuracoes.fonte = this.value;
    salvarConfiguracoes();
    aplicarFonte();
  });

  document.getElementById("tema").addEventListener("change", function() {
    configuracoes.tema = this.value;
    salvarConfiguracoes();
    aplicarTema();
  });

  document.getElementById("tamanho").addEventListener("change", function() {
    configuracoes.tamanho = this.value;
    salvarConfiguracoes();
    aplicarTamanhoFonte();
  });
}

links.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    const paginaSelecionada = this.dataset.page;
    menuToggle.checked = false;

    if (paginaSelecionada === "sair") {
      popup.classList.add("active");
      return;
    }

    if (paginaSelecionada === "configuracoes") {
      renderizarConfiguracoes();
      return;
    }

    renderizarPagina(paginaSelecionada);
  });
});

ficarButton.addEventListener("click", function() {
  popup.classList.remove("active");
});

sairButton.addEventListener("click", function() {
  window.close();
});

conteudo.dataset.pagina = "inicio";
aplicarTodasConfiguracoes();
renderizarPagina("inicio");
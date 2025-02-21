// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const disciplinasPorPeriodo = {
  "1periodo": [
      {
          code: "G00CFVR1.01",
          name: "Cálculo com Funções de Uma Variável Real",
          hours: 90,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_CALCULO_COM_FUNCOES_DE_UMA_VARIAVEL_REAL.pdf",
      },
      {
          code: "G00CSEC0.01",
          name: "Contexto Social e Profissional da Engenharia de Computação",
          hours: 30,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/10/PE_Contexto_Social_e_Profissional_da_Engenharia_de_Computacao.pdf",
      },
      {
          code: "G00GAAL1.01",
          name: "Geometria Analítica e Álgebra Linear",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_GEOMETRIA_ANALITICA_E_ALGEBRA_LINEAR.pdf",
      },
      {
          code: "G00LLPR0.01",
          name: "Laboratório de Lógica de Programação",
          hours: 30,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_LABORATORIO_DE_LOGICA_DE_PROGRAMACAO.pdf",
      },
      {
          code: "G00LPRO0.01",
          name: "Lógica de Programação",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_LOGICA_DE_PROGRAMACAO.pdf",
      },
      {
          code: "G00MCIE1.01",
          name: "Metodologia Científica",
          hours: 30,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_METODOLOGIA_CIENTIFICA.pdf",
      },
      {
          code: "G00MDIS0.01",
          name: "Matemática Discreta",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_MATEMATICA_DISCRETA.pdf",
      },
  ],
  "2periodo": [
      {
          code: "G00CFVV1.01",
          name: "Cálculo com Funções de Várias Variáveis I",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_CALCULO_COM_FUNCOES_DE_VARIAS_VARIAVEIS_I.pdf",
      },
      {
          code: "G00FITE0.01",
          name: "Filosofia da Tecnologia",
          hours: 30,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_FILOSOFIA_DA_TECNOLOGIA.pdf",
      },
      {
          code: "G00FMEC1.01",
          name: "Fundamentos de Mecânica",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_FUNDAMENTOS_DE_MECANICA.pdf",
      },
      {
          code: "G00INSE1.01",
          name: "Integração e Séries",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_INTEGRACAO_E_SERIES.pdf",
      },
      {
          code: "G00LPOO0.01",
          name: "Laboratório de Programação Orientada a Objetos",
          hours: 30,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_LABORATORIO_DE_PROGRAMACAO_ORIENTADA_A_OBJETOS.pdf",
      },
      {
          code: "G00LSDC0.01",
          name: "Laboratório de Sistemas Digitais para Computação",
          hours: 30,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_LABORATORIO_DE_SISTEMAS_DIGITAIS_PARA_COMPUTACAO.pdf",
      },
      {
          code: "G00POOB0.01",
          name: "Programação Orientada a Objetos",
          hours: 30,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_PROGRAMACAO_ORIENTADA_A_OBJETOS.pdf",
      },
      {
          code: "G00SDCO0.01",
          name: "Sistemas Digitais para Computação",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_SISTEMAS_DIGITAIS_PARA_COMPUTACAO.pdf",
      },
  ],
  "3periodo": [
      {
          code: "G00AEDA1.01",
          name: "Algoritmos e Estruturas de Dados I",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_ALGORITMOS_E_ESTRUTURAS_DE_DADOS_I.pdf",
      },
      {
          code: "G00AOCO0.01",
          name: "Arquitetura e Organização de Computadores I",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_ARQUITETURA_E_ORGANIZACAO_DE_COMPUTADORES_I.pdf",
      },
      {
          code: "G00CFVV2.01",
          name: "Cálculo com Funções de Várias Variáveis II",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_CALCULO_COM_FUNCOES_DE_VARIAS_VARIAVEIS_II.pdf",
      },
      {
          code: "G00EDOR1.01",
          name: "Equações Diferenciais Ordinárias",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_EQUACOES_DIFERENCIAIS_ORDINARIAS.pdf",
      },
      {
          code: "G00FEMOFT.01",
          name: "Física Experimental – Mecânica, Oscilações, Fluidos e Termodinâmica-(MOFT)",
          hours: 30,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_FISICA_EXPERIMENTAL_MECANICA_OSCILACOES_FLUIDOS_E_TERMODINAMICA_MOFT.pdf",
      },
      {
          code: "G00FOFT1.01",
          name: "Fundamentos de Oscilações, Fluidos e Termodinâmica – (OFT)",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_FUNDAMENTOS_DE_OSCILACOES_FLUIDOS_E_TERMODINAMICA_OFT.pdf",
      },
      {
          code: "G00LAED1.01",
          name: "Laboratório de Algoritmos e Estruturas De Dados I",
          hours: 30,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_LABORATORIO_DE_ALGORITMOS_E_ESTRUTURAS_DE_DADOS_I.pdf",
      },
      {
          code: "G00LAOC1.01",
          name: "Laboratório de Arquitetura e Organização de Computadores I",
          hours: 30,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_LABORATORIO_DE_ARQUITETURA_E_ORGANIZACAO_DE_COMPUTADORES_I.pdf",
      },
  ],
  "4periodo": [
      {
          code: "G00AEDA2.01",
          name: "Algoritmos e Estruturas de Dados II",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_ALGORITMOS_E_ESTRUTURAS_DE_DADOS_II.pdf",
      },
      {
          code: "G00AOCO2.01",
          name: "Arquitetura e Organização de Computadores II",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_ARQUITETURA_E_ORGANIZACAO_DE_COMPUTADORES_II.pdf",
      },
      {
          code: "G00CIREL0.01",
          name: "Circuitos Elétricos",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_CIRCUITOS_ELETRICOS.pdf",
      },
      {
          code: "G00ESTA1.01",
          name: "Estatística",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_ESTATISTICA.pdf",
      },
      {
          code: "G00FELE1.01",
          name: "Fundamentos de Eletromagnetismo",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_FUNDAMENTOS_DE_ELETROMAGNETISMO.pdf",
      },
      {
          code: "G00FEOFM1.01",
          name: "Física Experimental – Eletromagnetismo, Óptica e Física Moderna-(EOFM)",
          hours: 30,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_FISICA_EXPERIMENTAL_ELETROMAGNETISMO_OPTICA_E_FISICA_MODERNA_EOFM.pdf",
      },
      {
          code: "G00MNCO1.01",
          name: "Métodos Numéricos Computacionais",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_METODOS_NUMERICOS_COMPUTACIONAIS.pdf",
      },
  ],
  "5periodo": [
      {
          code: "G00BDAD1.01",
          name: "Banco de Dados I",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_BANCO_DE_DADOS_I.pdf",
      },
      {
          code: "G00ECOM0.01",
          name: "Eletrônica para Computação",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_ELETRONICA_PARA_COMPUTACAO.pdf",
      },
      {
          code: "G00ESOF1.01",
          name: "Engenharia de Software I",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_ENGENHARIA_DE_SOFTWARE_I.pdf",
      },
      {
          code: "G00GRAF0.01",
          name: "Grafos",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_GRAFOS.pdf",
      },
      {
          code: "G00LBDA1.01",
          name: "Laboratório de Banco de Dados I",
          hours: 30,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_LABORATORIO_DE_BANCO_DE_DADOS_I.pdf",
      },
      {
          code: "G00LECOM0.01",
          name: "Laboratório de Eletrônica para Computação",
          hours: 30,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_LABORATORIO_DE_ELETRONICA_PARA_COMPUTACAO.pdf",
      },
      {
          code: "G00LESO1.01",
          name: "Laboratório de Engenharia de Software I",
          hours: 30,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_LABORATORIO_DE_ENGENHARIA_DE_SOFTWARE_I.pdf",
      },
      {
          code: "G00LPRG0.01",
          name: "Linguagens de Programação",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_LINGUAGENS_DE_PROGRAMACAO.pdf",
      },
  ],
  "6periodo": [
      {
          code: "G00ESOF2.01",
          name: "Engenharia de Software II",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_ENGENHARIA_DE_SOFTWARE_II.pdf",
      },
      {
          code: "G00LFAU0.01",
          name: "Linguagens Formais e Autômatos",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_LINGUAGENS_FORMAIS_E_AUTOMATOS.pdf",
      },
      {
          code: "G00LRCO1.01",
          name: "Laboratório de Redes de Computadores I",
          hours: 30,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_LABORATORIO_DE_REDES_DE_COMPUTADORES_I.pdf",
      },
      {
          code: "G00LSSI0.01",
          name: "Laboratório de Sinais e Sistemas",
          hours: 30,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_LABORATORIO_DE_SINAIS_E_SISTEMAS.pdf",
      },
      {
          code: "G00RCOM1.01",
          name: "Redes de Computadores I",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_REDES_DE_COMPUTADORES_I.pdf",
      },
      {
          code: "G00SISI0.01",
          name: "Sinais e Sistemas",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_SINAIS_E_SISTEMAS.pdf",
      },
      {
          code: "G00SOPE0.01",
          name: "Sistemas Operacionais",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_SISTEMAS_OPERACIONAIS.pdf",
      },
  ],
  "7periodo": [
      {
          code: "G00CGRA0.01",
          name: "Computação Gráfica",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_COMPUTACAO_GRAFICA.pdf",
      },
      {
          code: "G00COMP0.01",
          name: "Compiladores",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_COMPILADORES.pdf",
      },
      {
          code: "G00FMIC0.01",
          name: "Fundamentos de Microcontroladores",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_FUNDAMENTOS_DE_MICROCONTROLADORES.pdf",
      },
      {
          code: "G00IART0.01",
          name: "Inteligência Artificial",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_INTELIGENCIA_ARTIFICIAL.pdf",
      },
      {
          code: "G00LFMI0.01",
          name: "Laboratório de Fundamentos de Microcontroladores",
          hours: 30,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_LABORATORIO_DE_FUNDAMENTOS_DE_MICROCONTROLADORES.pdf",
      },
      {
          code: "G00LSCO0.01",
          name: "Laboratório de Sistemas de Controle",
          hours: 30,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_LABORATORIO_DE_SISTEMAS_DE_CONTROLE.pdf",
      },
      {
          code: "G00SCON0.01",
          name: "Sistemas de Controle",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_SISTEMAS_DE_CONTROLE.pdf",
      },
  ],
  "8periodo": [
      {
          code: "G00AMAQ0.01",
          name: "Aprendizado de Máquina",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_APRENDIZADO_DE_MAQUINA.pdf",
      },
      {
          code: "G00IHCO0.01",
          name: "Interação Humano-Computador",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_INTERACAO_HUMANO_COMPUTADOR.pdf",
      },
      {
          code: "G00OTIM1.01",
          name: "Otimização I",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_OTIMIZACAO_I.pdf",
      },
      {
          code: "G00SDIS0.01",
          name: "Sistemas Distribuídos",
          hours: 60,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_SISTEMAS_DISTRIBUIDOS.pdf",
      },
  ],
  "9periodo": [
      {
          code: "G00INSO0.01",
          name: "Introdução à Sociologia",
          hours: 30,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_INTRODUCAO_A_SOCIOLOGIA.pdf",
      },
      {
          code: "G00MPCOM.01",
          name: "Metodologia de Pesquisa",
          hours: 30,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/11/planoEnsino_METODOLOGIA_DE_PESQUISA.pdf",
      },
  ],
  "10periodo": [
      {
          code: "G00PAOR0.01",
          name: "Psicologia Aplicada às Organizações",
          hours: 30,
          url: "https://www.eng-computacao.bh.cefetmg.br/wp-content/uploads/sites/188/2024/09/planoEnsino_PSICOLOGIA_APLICADA_AS_ORGANIZACOES.pdf",
      },
  ],
};

export default function handler(req, res) {
  res.status(200).json(disciplinasPorPeriodo);
}

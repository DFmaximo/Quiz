import entradaDados from 'readline-sync'

console.log('Quiz de Fatos Historicos\n');
console.log('Seja Bem-vindo Jogador(a)!\n');

let nome = entradaDados.question('Digite o seu nome: ')


const questoes = [
    { id: 1, pergunta: 'Quando aconteceu o atentado as Torres Gemeas?', resposta: '2001' },
    { id: 2, pergunta: 'Em que ano foi detectado o primeiro paciente com coronavirus?', resposta: '2019' },
    { id: 3, pergunta: 'Em que ano Steve jobs apresentou o primeiro Iphone sem teclas?', resposta: '2007' },
    { id: 4, pergunta: 'Qual o ano da morte de Stan Lee?', resposta: '2018' },
    { id: 5, pergunta: 'Qual o ano o Brasil tornou-se tetracampeao mundial de futebol?', resposta: '1994' },
    { id: 6, pergunta: 'O primeiro lancamento de foguete da SpaceX ocorreu em?', resposta: '2017' },
    { id: 7, pergunta: 'Em que ano foi apresentado o primeiro computador eletronico?', resposta: '1946' },
    { id: 8, pergunta: 'Em que ano ocorreu a revolucao Francesa?', resposta: '1789' },
    { id: 9, pergunta: 'Em que ano comecou a primeira guerra mundial?', resposta: '1914' },
    { id: 10, pergunta: 'Em que ano terminou a segunda guerra mundial?', resposta: '1945' },
    { id: 11, pergunta: 'O muro de Berlim foi derrubado em qual ano?', resposta: '1989' },
    { id: 12, pergunta: 'Qual o ano que o titanic afundou?', resposta: '1912' },
    { id: 13, pergunta: 'Qual o ano do lancamento do primeiro playstation?', resposta: '1994' },
    { id: 14, pergunta: 'Em que ano a declaracao universal dos direitos humanos foi assinada?', resposta: '1948' },
    { id: 15, pergunta: 'Em que ano a World Wide Web (WWW) foi criada por Tim Berners-Lee?', resposta: '1990' },
    { id: 16, pergunta: 'Em que ano o Euro foi introduzido como moeda unica na Europa?', resposta: '1999' },
    { id: 17, pergunta: 'Em que ano foi abolido a escravidao no Brasil?', resposta: '1888' },
    { id: 18, pergunta: 'Qual ano foi instaurado o regime militar no Brasil?', resposta: '1964' },
    { id: 19, pergunta: 'Em que ano o Brasil proclamou a Republica?', resposta: '1889' },
    { id: 20, pergunta: 'Em qual ano ocorreu a Revolta da Vacina no Rio de Janeiro?', resposta: '1904' },
    { id: 21, pergunta: 'Em que ano o Brasil sediou a Copa do Mundo pela primeira vez?', resposta: '1950' },
    { id: 22, pergunta: 'Em que ano foi adotado o Acordo de Paris sobre mudancas climaticas?', resposta: '2015' },
    { id: 23, pergunta: 'Em qual ano ocorreu a guerra das Malvinas?', resposta: '1982' },
    { id: 24, pergunta: 'Qual foi o ano em que Martin Luther King realizou o discurso "Eu Tenho um Sonho"?', resposta: '1963' },
    { id: 25, pergunta: 'Em que ano a Uniao Europeia (UE) foi estabelecida?', resposta: '1993' },
    { id: 26, pergunta: 'Em que ano a Guerra Civil Espanhola comecou?', resposta: '1936' },
    { id: 27, pergunta: 'Em que ano Nelson Mandela foi libertado da prisao?', resposta: '1990' },
    { id: 28, pergunta: 'Em que ano a Alemanha foi reunificada apos a Guerra Fria?', resposta: '1990' },
    { id: 29, pergunta: 'Qual foi o ano do acidente nuclear em Chernobyl?', resposta: '1986' },
    { id: 30, pergunta: 'Em que ano o homem pisou na Lua pela primeira vez?', resposta: '1969' }
  ];
  


function embaralharArray(array) {
    const funcaoComparacao = () => Math.random() - 0.5;
    return array.sort(funcaoComparacao);
  }
  
  const perguntasEmbaralhadas = embaralharArray(questoes).slice(0, 10);
  let acertos = 0;
    
  perguntasEmbaralhadas.forEach((pergunta, indice) => {
    const respostaUsuario = entradaDados.question(`${indice + 1}. ${pergunta.pergunta} \nDigite sua resposta: `);
    
    if (respostaUsuario.toLowerCase() === pergunta.resposta.toLowerCase()) {
      console.log('Você acertou!!')
      acertos++;
    } else {
      console.log('Resposta Errada!!');
    }
  });
  
  console.log(nome + ', você acertou ' + acertos + ' de ' + perguntasEmbaralhadas.length + ' perguntas.');

  if(acertos < 5 ){
    console.log('Pratique um pouco mais.')
  } else if(acertos >= 5 && acertos <= 10){
    console.log('MUITO BOM! Você acertou a maioria.')
  } else {'EXCELENTE! Você é um verdadeiro expert.'};
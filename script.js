var id = 1;
var limite = 5; 
var textos = [
    "<p>&emsp;&emsp;A Robotic League é uma equipe de robótica de escola pública, que participa de diversos" +
    " campeonatos como o <strong>TJR</strong> (Torneio Juvenil de Robótica), <strong>ITR</strong> (International Tournament of Robots) e a <strong>FIRA RoboWorld Cup</strong>, além disso" +
    ", o time participa de feiras científicas, como a <strong>FEBRACE</strong> (Feira Brasileira de Ciências e Engenharia). </p>" +
    "<p>&emsp;&emsp;Por ser de escola pública, a equipe precisa frequentemente realizar ações para arrecadar" +
    " dinheiro (como vendas de pastel na escola, vendas de pizza, vaquinhas online e pedágios), o valor arrecadado é usado para realizar" +
    " a compra de novos materiais e custear as passagens e hospedagem dos integrantes para os campeonatos. </p>" +
    "<p>&emsp;&emsp;Como integrante da equipe, participei de campeonatos em: <strong>João Pessoa - PB, São luis - MA" +
    " e São Paulo - SP</strong>, atuando na função de programador, além de realizar a edição dos Registros Multimidiáticos da equipe, também," +
    " juntamente com outro integrante, escrevemos o artigo <em>'Jogo Computadorizado Com a Finalidade de Auxiliar na Matemática'</em> com a"+
    " finalidade de participar da <strong>FEBRACE</strong>. Deixei a equipe no final de 2021 para prosseguir na vida acadêmica.</p>",
    
    "<p>&emsp;&emsp;<em>The Math Quest</em> é um jogo de plataforma 2D construído utilizando o motor de jogo <strong>Unity</strong> e a linguagem <strong>C#</strong>," +
    " ele foi feito juntamente com o artigo <em>'Jogo Computadorizado Para Auxiliar na Matemática'</em>, com o objetivo de participar da <em>Feira" +
    " Brasileira de Ciências e Engenharia</em> (FEBRACE). Tentamos tornar esse jogo algo cativante para o público alvo (principalmente crianças)" +
    " , trazendo elementos para <em>'gameficar'</em> o ensino, como pontuações, partículas para potencializar algumas ações, como por exemplo, " +
    " levar ou dar dano. </p>"+
    "<p>&emsp;&emsp;Para inserir a matemática nesse meio, criamos um algoritmo que pega questões de interpretação pré determinadas" +
    " em uma base de dados e <strong>randomiza</strong> as variáveis, tornando cada questão unica, o jogador então, após chegar no final de uma fase" +
    ", precisa acertar essa questão para progredir para o próximo nível. </p>"+
    "<p>&emsp;&emsp;Um diferencial do <em>The Math Quest</em> é que, o jogo consegue identificar em quais operações matemáticas" +
    " o usuário tem mais dificuldade (por meio do tempo para responder, quantidade de erros, incerteza da resposta, etc), sabendo" +
    " disso o algoritmo da prioridade para a dificuldade, permitindo ao jogador treinar aonde tem mais dificuldades. </p>" +
    "<p>&emsp;&emsp;Esse projeto foi feito internamente na <strong>Robotic League</strong>, e foi realizado por mim e por um amigo" +
    " da equipe chamado <em>Sandro Altenhofen Junior</em>, usando este artigo fomos premiados em <strong>Terceiro Lugar</strong> nos <em>Prêmios Stemmer - Categoria Jovem Inovador</em>.</p>",

    "<p>&emsp;&emsp;Esse bot foi criado com o unico intuito de praticar programação, e por curiosidade de como eram feitos esses bots" +
    ", ele foi feito utilizando <strong>Python</strong> e a bibloteca <strong>Tweepy</strong> para se comunicar com a API do twitter, ele é hospedado nos servidores da <strong>Heroku</strong>" +
    " em um plano gratuito, e portanto, fica online apenas nos primeiros 20 dias do mês. Atualmente o BOT não é utilizado, visto que eu divulguei" +
    " apenas para alguns amigos e não fui muito pra frente com a divulgação, se ele continua funcionando é um segredo pra mim, mas ele de fato, em algum momento, funcionou. </p>" +
    "<p>&emsp;&emsp;Para utilizar o BOT, é necessario tweetar algo marcando o @ do BOT, caso você marque algum amigo no mesmo tweet," +
    " o bot ira responder o tweet com um tabuleiro pronto, sendo o jogador 1 você e o jogador 2 seu amigo, para fazer uma jogada, é necessário" +
    " responder esse tweet marcando o BOT e falando a casa da jogada <em>(exemplo: '@VelhaBOT C1')</em>." +
    " <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/VelhaBOT/status/1360275350496886789'>Nessa thread</a> é possível ver um exemplo do BOT funcionando 100%.</p>",

    "<p>&emsp;&emsp;Sim, mais um projeto envolvendo jogo da velha, porque não? Esse site foi criado com o objetivo" +
    " de praticar <strong>HTML, CSS</strong> e <strong>JavaScript</strong>, inicialmente a ideia era pra ser um homem vs maquina comum, no entanto, acabei finalizando com certa facilidade" +
    " e quis complicar um pouco, foi ai que pensei em tornar esse site <strong>multiplayer</strong>, dessa forma, fui atras de aprender <strong>PHP</strong> e <strong>Banco de Dados</strong>" +
    ", também tive que aprender sobre <strong>JQuery</strong>, pois não podia usar as requisições <strong>GET</strong> e <strong>POST</strong>" +
    " para puxar os dados do banco enquanto a partida rolava, pois esse método <strong>atualiza a pagina</strong>, então, utilizei as requisições <strong>ajax</strong>, que conseguem" +
    " pegar os dados atualizados sem 'dar refresh' na página. </p>" +
    "<p>&emsp;&emsp;No entanto, como na parte do front-end eu não tinha muita prática, esse site basicamente só funciona" +
    " na resolução Full HD (e se você se esforçar, em HD também) pois não me preocupei em deixar o site <strong>responsivo</strong>. Outro porém é que não publiquei esse" +
    " site em nenhum lugar, pois um host é meio caro e preciso de um serviço de banco de dados na nuvem também, mas é aquela história né? O importante é que na minha máquina funciona!</p>",

    "<p>&emsp;&emsp;Esse site foi criado com o principal objetivo de passar na matéria de <strong>informática básica</strong>, mas também" +
    " quis aproveitar pra aprender coisas novas (e se possível, o suficiente pra entrar na área, alguem me da um emprego na área logo por favor)," +
    " ao contrario do meu ultimo projeto onde eu ignorei completamente a existência de outras resoluções além da minha, dessa vez eu quis fazer um site" +
    " responsivo, por conta disso, fui atras de aprender sobre <strong>Bootstrap</strong> (que é inclusive usado pelo site do curso) além disso, aprendi" +
    " sobre as <em>'Media Queries'</em> do <strong>CSS</strong>, aprendi sobre os arquivos de <strong>vetor</strong> (.svg) e sofri algumas horas no photoshop para aprender a fazer" +
    " uma logo nesse formato, e também usei um pouco de <strong>JavaScript</strong> na página de projetos</p>"
]
var titulo = ["Robotic League","The Math Quest","Velha BOT", "tic-tac-toe", "Esse Site"]
var ano = ["2018 a 2022", "2019", "2020", "2021","2022"]
var desc = ["Projeto de Robótica da Escola EEB Bom Pastor",
            "Jogo computadorizado com o objetivo de auxiliar na matemática",
            "BOT que joga o jogo da velha no twitter",
            "Site para jogar o Jogo da Velha multiplayer",
            "Avaliação de Informatica Básica"]
var hyperlink1 = ["https://www.youtube.com/c/RoboticLeague","https://www.youtube.com/watch?v=qhvUkuKFBvY&ab_channel=JeanRossa","https://twitter.com/VelhaBOT","https://www.youtube.com/watch?v=eWE2L1xrvhA&ab_channel=JeanRossa","https://github.com/JeanRossa/ccuffs-site"]
var hyperlink2 = ["https://www.instagram.com/robotic.league/","https://github.com/JeanRossa/TheMathQuest","https://github.com/JeanRossa/JogoDaVelhaBOT","https://github.com/JeanRossa/tic-tac-toe",""]
var hyperlink3 = ["https://carlosrutz.com/robotica","https://www.kongregate.com/games/JeanR18/the-math-quest","","",""]
var icon1 = ["icons/youtube.svg","icons/youtube.svg","icons/twitter.svg","icons/youtube.svg","icons/github.svg"]
var icon2 = ["icons/instagram.svg","icons/github.svg","icons/github.svg","icons/github.svg",""]
var icon3 = ["icons/link.svg","icons/controller.svg","","",""]
att(id);
function back(){
    id -= 1
    if (id <= 0){
        id = limite
    }
    att(id)
}
function next(){
    id += 1
    if (id > limite){
        id = 1
    }
    att(id)
}
function att(x){
    document.getElementById("img-projeto").src="fotos-projetos/Projeto" + x + ".jpg";
    document.getElementById("title-projeto").innerHTML = titulo[x-1];
    document.getElementById("year-projeto").innerHTML = ano[x-1];
    document.getElementById("desc-projeto").innerHTML = desc[x-1];
    document.getElementById("txt-projeto").innerHTML = textos[x-1];
    document.getElementById("icon-1").src=icon1[x-1];
    document.getElementById("icon-2").src=icon2[x-1];
    document.getElementById("icon-3").src=icon3[x-1];
    document.getElementById("link-1").href=hyperlink1[x-1];
    document.getElementById("link-2").href=hyperlink2[x-1];
    document.getElementById("link-3").href=hyperlink3[x-1];
}
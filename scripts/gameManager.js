function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

let currentQuestion = 1;
let answered = false;
let diceText = document.getElementById("diceTextId");
let consequenceText = document.getElementById("consequenceId");
let optionsText = document.getElementById("optionsId");

let questions = [
    "Ítalo, um aluno bem aplicado começa a ser zoado por seus colegas de classe. O que ele faz?",
    "Helena é uma jovem que começou a compartilhar seu dia a dia nas redes sociais. Um grupo de pessoas da escola começam a zombar dela nos comentários fazendo piadas sobre sua aparência. Como helena pode reagir?",
    "Gustavo tem dificuldade em se enturmar com os colegas, ele é introvertido e está enfrentando dificuldades o que faz com que suas notas sempre estejam baixas. Alguns colegas percebem e zombam dele, o chamando de nomes desnecessários. O que ele faz?"
]
let answers = [
    [   
        "ignorar e não fazer nada.",
        "Conversar com um responsável sobre o que está acontecendo.",
        "Reagir e tentar se defender sozinho."
    ],
    [
        "Ignorar e continuar postando como se nada estivesse acontecendo.",
        "Denunciar os comentários e bloquear os agressores.",
        "Responder diretamente aos agressores de forma pública."
    ],
    [
        "Ignorar as provocações e tentar lidar com isso sozinho.",
        "Conversar com um professor ou responsável sobre a situação.",
        "Reagir de forma agressiva ou defensiva."
    ]
]
let consequences = [
    [
        [
            "O bullying se intensifica. Ítalo se isola cada vez mais, afetando sua autoestima e sua saúde mental. Com o tempo, ele começa a evitar ir à escola, sentindo-se deprimido e sem forças para reagir. A situação fica cada vez mais difícil de lidar.",
            "Mesmo Ítalo  ignorando a maioria das provocações, o bullying persiste em algumas situações, deixando-o incomodado, ele tenta seguir em frente, mas ele ainda se sente vulnerável.",
            "Ítalo consegue ignorar os insultos e não deixa que isso afete seu desempenho escolar ou seu bem-estar. Foca nos estudos e encontrando apoio apenas em seus amigos mais próximos. O bullying diminui gradualmente, já que os colegas percebem que suas atitudes não o afetam como eles esperavam."
        ],
        [
            "O responsável não tomar a situação a sério, o que faz Ítalo se sentir desamparado. Isso pode até fazer com que o bullying se intensifique, já que o agressor sente que não há consequências reais para seu comportamento. Ítalo fica ainda mais frustrado e perde a confiança nas pessoas ao seu redor.",
            "O responsável escuta Ítalo e tenta ajudar, mas a solução é apenas parcial. As provocações diminuam um pouco, não há uma resolução completa. ",
            "O responsável toma a situação com seriedade e a questão é tratada imediatamente com os agressores. A escola adota medidas de prevenção ao bullying, criando um ambiente mais seguro para Ítalo e outros alunos. O bullying diminui significativamente. Ítalo se sente apoiado e respeitado por seus colegas e professores."
        ],
        [
            "Italo responde agressivamente aos insultos, com palavras duras e gestos impensados. Isso piora a situação e os agressores o atacam mais ainda, outros colegas podem se afastar de Ítalo, pensando que ele também está contribuindo para o problema. A agressão aumenta, e Ítalo acaba sendo punido pela escola por ter reagido de forma impulsiva.",
            "Ítalo tenta se defender, mas sua reação não é totalmente eficaz. Embora o bullying diminua um pouco, ele ainda se sente desconfortável com a situação. Às vezes, ele sente que sua resposta não foi suficiente para resolver o problema de forma definitiva, mas ao menos as provocações não são tão intensas.",
            "Ítalo, de forma assertiva, responde de maneira calma e firme, fazendo com que os agressores percebam que ele não aceitará mais esse tipo de comportamento. Isso faz com que o bullying diminua, pois os colegas começam a respeitar mais Ítalo. Ele ganha confiança em si mesmo e consegue se defender de forma saudável, sem se envolver em brigas."
        ]
    ],
    [
        [
            "Helena continua postando normalmente, tentando ignorar os ataques, mas os cyberbullying não param. Ao contrário, começam a ficar ainda mais intensos, já que os colegas percebem que ela não está reagindo. Ela se sente cada vez mais isolada e desmotivada a compartilhar suas experiências. Com o tempo, ela pode até decidir excluir sua conta nas redes sociais para se proteger. Esse isolamento a afeta emocionalmente e diminui sua autoestima.",
            "Helena tenta seguir em frente, ignorando as provocações, mas as piadas continuam aparecendo. Ela começa a se sentir desconfortável com os ataques, mas, aos poucos, o cyberbullying começa a diminuir à medida que as pessoas perdem o interesse. Ela ainda se sente um pouco afetada, mas consegue continuar postando, embora sem a mesma liberdade e alegria de antes.",
            "Isabela decide continuar postando, ignorando os comentários negativos. Ela recebe apoio de alguns amigos e pessoas que a admiram pela sua coragem. Com o tempo, as provocações diminuem porque os agressores percebem que ela não se importa com as críticas. Isabela se fortalece e aprende a usar as redes sociais para se conectar com pessoas que realmente a apoiam, tornando-se mais confiante."
        ],
        [
            "Helena denuncia os comentários e bloqueia os agressores, mas não há um acompanhamento adequado da plataforma. Os colegas que estavam atacando Isabela começam a espalhar ainda mais rumores e fofocas sobre ela, dizendo que ela é “frágil” ou “não sabe lidar com críticas”. Isabela se sente ainda mais pressionada e insegura, achando que a situação só piorou. Além disso, ela pode se sentir sozinha, já que nem todos na escola a apoiam.",
            "Helena denuncia os agressores e bloqueia os comentários, mas, como os ataques não param completamente, ela acaba ficando mais desconfiada das redes sociais. Embora os insultos diminuam em público, ela ainda sente que há uma atmosfera negativa em torno dela. Ela tenta continuar suas postagens, mas com menos frequência e sem a mesma liberdade que tinha antes. ",
            "Ao denunciar os comentários abusivos e bloquear os agressores, Hellena consegue fazer com que os ataques cessem na plataforma. Além disso, a escola toma conhecimento da situação e oferece apoio a ela, como uma conversa com os responsáveis. Ela se sente mais segura, e o grupo de colegas que a intimidava começa a ser punido pela atitude desrespeitosa. Helena aprende a lidar com o uso consciente das redes sociais e passa a se sentir mais confiante ao compartilhar seus conteúdos online."
        ],
        [
            'Helena responde aos ataques de forma pública, utilizando uma linguagem agressiva e rebatendo as provocações. Isso gera uma briga virtual, que se espalha para mais pessoas, incluindo outros colegas da escola. A situação piora, com todos assistindo ao conflito online, e Helena acaba sendo vista de forma negativa tanto pelos agressores quanto por outros alunos. O bullying se intensifica e ela se sente ainda mais humilhada.',
            'Helena responde aos ataques, mas a resposta não é suficiente para acabar com o bullying de imediato. Embora ela tenha se defendido de maneira racional, algumas pessoas ainda continuam a zombar dela em grupos fechados. No entanto, ela não é mais tão afetada pelas provocações. A situação melhora aos poucos, mas o bullying persiste, embora em menor intensidade.',
            'Helena, ao invés de reagir com agressividade, responde de forma firme e assertiva, mostrando que não vai tolerar insultos. Ela escreve algo como: "Todos têm o direito de serem respeitados e não vou deixar que me tratem assim". Esse tipo de resposta ajuda a mostrar que ela está consciente do que está acontecendo e não tem medo de se defender. Os agressores sentem vergonha da postura madura dela e a situação começa a se acalmar. Outros amigos e colegas de escola a apoiam, e a confiança de Isabela cresce.'
        ]
    ],
    [
        [
            "Gustavo tenta ignorar, mas as piadas se tornam cada vez mais frequentes. Ele começa a sentir uma pressão enorme, não apenas para melhorar as notas, mas também para se encaixar socialmente. Isso o deixa ainda mais isolado e triste.",
            'Gustavo tenta ignorar as provocações, mas as piadas ainda o afetam. Ele se sente cada vez mais isolado e desmotivado. Embora ele tenha momentos de crescimento acadêmico, suas dificuldades continuam presentes. A situação melhora um pouco, mas não completamente, e ele ainda sente que é visto como alguém "diferente" ou "problemático" pela maioria dos colegas.',
            "Gustavo decide ignorando as provocações e se concentrar no que gosta de fazer: a leitura e alguns hobbies solitários. Ele começa a desenvolver uma rotina de estudo mais focada em suas dificuldades, se dedicando mais à recuperação das notas. Ele aprende a não se importar com as piadas e perceber que, ao se concentrar em seu próprio crescimento, as provocações diminuem gradualmente, porque os outros alunos perdem o interesse em zombá-lo, já que ele não reage. Sua confiança melhora aos poucos, e ele consegue até fazer amizade com um colega que o vê de forma mais positiva."
        ],
        [
            'Gustavo decide procurar um professor e compartilhar suas dificuldades acadêmicas e as provocações que está sofrendo, mas o professor não tem uma resposta eficaz ou a situação é tratada de maneira superficial. Os colegas de Gustavo começam a perceber que ele foi "delatar" o que estava acontecendo e o isolam ainda mais, dizendo coisas como "foi reclamar com a professora, viu?" ou "ah, é só mimimi". Gustavo se sente mais envergonhado e percebe que a ajuda que recebeu não foi suficiente para mudar a situação. Ele passa a se sentir mais vulnerável e com menos apoio, já que as atitudes dos colegas não mudam.',
            "Gustavo compartilha suas dificuldades com um professor, que tenta ajudar com sua parte acadêmica, mas o apoio emocional e social da turma não melhora muito. Algumas piadas ainda continuam, mas ele consegue se concentrar mais nos estudos. Embora o bullying diminua um pouco, ele ainda se sente meio deslocado na escola.",
            "Gustavo procura um professor de confiança, que percebe o quanto ele está afetado e começa a orientá-lo de maneira prática sobre como melhorar seu desempenho nas aulas. Além disso, o professor chama a atenção da turma sobre o comportamento inadequado dos colegas de Gustavo, alertando-os sobre o impacto das piadas e do bullying. Com o tempo, as provocações diminuem e a turma começa a mudar de atitude. Gustavo começa a perceber que tem o apoio de algumas pessoas e consegue melhorar suas notas ao receber apoio acadêmico. Ele se sente mais seguro e começa a se abrir mais com alguns colegas, formando amizades. As piadas param e ele começa a se sentir mais acolhido."
        ],

        [
            'Gustavo, cansado de ser zombado, decide reagir de forma agressiva, rebatendo as piadas com palavras duras ou até empurrando os colegas quando é provocado. Isso piora ainda mais a situação, já que seus colegas começam a vê-lo como alguém "problemático" e "difícil". Ele acaba se envolvendo em conflitos diretos com outros alunos e até com alguns professores. O bullying se intensifica, e ele é cada vez mais excluído socialmente. Sua raiva só agrava a solidão e as dificuldades de interação. A situação se torna mais tensa, e ele se sente cada vez mais perdido, sem saber como sair dessa espiral de isolamento e violência.',
            "Gustavo reage de forma um pouco agressiva ao ser zombado, mas com o tempo ele aprende a lidar com a situação de forma mais controlada. Embora a reação não tenha resolvido completamente o bullying, ela faz com que alguns colegas comecem a respeitar seus limites e a atitude de não permitir mais as provocações, mas  a situação ainda não se resolve totalmente, e ele ainda se sente desconfortável com alguns colegas, especialmente quando as piadas continuam de forma mais sutil. ",
            'Gustavo, ao perceber que as provocações estão o afetando profundamente, responde de forma firme, mas com calma, dizendo algo como: "Eu não aceito ser tratado assim, por favor, parem com essas piadas." Seus colegas percebem que ele não vai mais se deixar afetar facilmente, e algumas atitudes começam a mudar. A turma começa a respeitar mais Gustavo, e ele se sente mais confiante em dizer o que pensa. Além disso, ele começa a perceber que, ao lidar com o problema de forma madura, ele acaba ganhando o respeito de algumas pessoas. Gustavo passa a se sentir mais acolhido e respeitado, mesmo que ainda tenha dificuldades sociais.'
        ]
    ]
]

function ChangeScreen(sectionName = "")
{
    // Seleciona todas as seções
    const sections = document.querySelectorAll('section');

    // Adiciona a classe "disabled" a todas as seções
    sections.forEach(section => {
        section.classList.add('disabled');
        section.classList.remove('active');
    });

    // Remove a classe "disabled" da seção com o ID especificado
    const activeSection = document.getElementById(sectionName);
    if (activeSection) {
        activeSection.classList.remove('disabled');
        activeSection.classList.remove('disabled');
    }
}
function d20() {
    var randomNumber = parseInt((Math.random()*20)+1);
    return randomNumber;
}

function UpdateQuestion () {
    document.getElementById("questionId").innerHTML = questions[currentQuestion-1];
    const answerButtons = document.getElementsByClassName("answer-btn");
    for (var i = 0; i < answerButtons.length; i++)
    {
        answerButtons[i].innerHTML = answers[currentQuestion-1][i];
    }
    document.getElementById("questionNumberId").innerHTML =  "- ["+currentQuestion+"/3] -"
}
function CleanQuestion () {
    diceText.classList.add('disabled');
    consequenceText.classList.add('disabled');
    optionsText.classList.add('disabled');
    document.getElementsByClassName("selected")[0].classList.remove('selected');
    answered = false;
}
async function AnswerQuestion(buttonPressed) {
    if (!answered){
        answered = true;
        diceValue = d20();

        document.getElementById(buttonPressed).classList.add('selected');
        diceText.innerHTML = "Você tirou "+diceValue+" no dado!"
        diceText.classList.remove('disabled');

        await sleep(1000)

        if (diceValue <= 7) consequenceText.innerHTML = consequences[currentQuestion-1][buttonPressed][0];
        else if (diceValue <= 14) consequenceText.innerHTML = consequences[currentQuestion-1][buttonPressed][1];
        else if (diceValue > 14) consequenceText.innerHTML = consequences[currentQuestion-1][buttonPressed][2];
        consequenceText.classList.remove('disabled');

        await sleep(2000)
        optionsText.classList.remove('disabled');
    }
}
function NextQuestion () {
    if (currentQuestion < 3)
    {
        CleanQuestion();
        currentQuestion++;
        UpdateQuestion();
    }
    else 
    {
        ChangeScreen("finalSection");
        CleanQuestion();
        currentQuestion = 1;
        UpdateQuestion();
    }
}

UpdateQuestion();
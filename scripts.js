const videos = [
    {
        src: "./videos/video01.mp4",
        name: "Introdução ao HTML",
        contentTitle: "Criando um Arquivo HTML a partir de um TXT",
        contentAuthor: "DevMedia",
        videoDescription: "Este conteúdo ensina como criar um arquivo HTML a partir de um arquivo TXT e explica a estrutura básica de um documento HTML.",
        articleTitle: "Criando um Arquivo HTML a partir de um TXT",
        article: `
            <p>Para criar um arquivo HTML a partir de um arquivo TXT, siga os passos abaixo:</p>
            <ol>
                <li>Abra um editor de texto, como o Bloco de Notas ou o VS Code.</li>
                <li>Escreva ou cole o conteúdo HTML desejado no editor de texto.</li>
                <li>Salve o arquivo com a extensão <strong>.html</strong>. Por exemplo, <em>index.html</em>.</li>
                <li>Abra o arquivo HTML em um navegador para ver o resultado.</li>
            </ol>
            <h2>Estrutura Básica de um Documento HTML</h2>
            <p>Um documento HTML básico tem a seguinte estrutura:</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Título&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;p&gt;Isso aqui é um parágrafo&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
            </code></pre>
            <h3>Explicação dos Elementos</h3>
            <ul>
                <li><strong>&lt;!DOCTYPE html&gt;</strong>: Declaração do tipo de documento, indicando que é um documento HTML5.</li>
                <li><strong>&lt;html&gt;</strong>: Elemento raiz do documento HTML.</li>
                <li><strong>&lt;head&gt;</strong>: Contém meta-informações sobre o documento, como o título.</li>
                <li><strong>&lt;title&gt;</strong>: Define o título do documento, exibido na barra de título do navegador.</li>
                <li><strong>&lt;body&gt;</strong>: Contém o conteúdo visível da página, como textos, imagens, links, etc.</li>
                <li><strong>&lt;p&gt;</strong>: Define um parágrafo.</li>
            </ul>
        `,
        download: "downloads/HTML.txt",
        questions: [
            {
                question: "Qual é a extensão correta para salvar um arquivo HTML?",
                options: [".html", ".txt", ".doc", ".pdf"],
                answer: ".html"
            },
            {
                question: "Qual elemento contém o título do documento HTML?",
                options: ["title", "head", "body", "html"],
                answer: "title"
            },
            {
                question: "Qual tag é usada para definir um parágrafo em HTML?",
                options: ["p", "h1", "div", "span"],
                answer: "p"
            },
            {
                question: "Qual declaração indica que o documento é HTML5?",
                options: ["!DOCTYPE html", "html5", "!DOCTYPE", "html"],
                answer: "!DOCTYPE html"
            },
            {
                question: "Onde é inserido o conteúdo visível de uma página HTML?",
                options: ["body", "head", "title", "html"],
                answer: "body"
            }
        ]
    },
    {
        src: "video2.mp4",
        name: "Criação de Aplicações Web",
        contentTitle: "WEB FRACOS - INTERMEDIÁRIO",
        contentAuthor: "Lucas Santos - Desenvolvedor front-end",
        videoTitle: "Como criar uma aplicação web?",
        videoDescription: "Neste conteúdo, você aprenderá a criar uma aplicação web do zero utilizando HTML, CSS e JavaScript. Vamos explorar as melhores práticas e ferramentas necessárias.",
        articleTitle: "Artigo sobre Criação de Aplicações Web",
        article: "Este artigo fornece um guia passo a passo sobre como criar uma aplicação web utilizando HTML, CSS e JavaScript, além de dicas sobre melhores práticas.",
        download: "downloads/criacao-aplicacoes-web.zip",
        questions: [
            {
                question: "Qual é a capital da Alemanha?",
                options: ["Paris", "Londres", "Roma", "Berlim"],
                answer: "Berlim"
            },
            {
                question: "Qual é 3 + 3?",
                options: ["5", "6", "7", "8"],
                answer: "6"
            },
            {
                question: "Qual a cor da grama?",
                options: ["Azul", "Verde", "Amarelo", "Vermelho"],
                answer: "Verde"
            },
            {
                question: "Qual é a capital da França?",
                options: ["Paris", "Londres", "Roma", "Berlim"],
                answer: "Paris"
            },
            {
                question: "Qual é 4 + 4?",
                options: ["7", "8", "9", "10"],
                answer: "8"
            },
            {
                question: "Qual a cor do sol?",
                options: ["Azul", "Amarelo", "Verde", "Vermelho"],
                answer: "Amarelo"
            },
            {
                question: "Qual é a capital da Itália?",
                options: ["Paris", "Londres", "Roma", "Berlim"],
                answer: "Roma"
            },
            {
                question: "Qual é 5 + 5?",
                options: ["9", "10", "11", "12"],
                answer: "10"
            },
            {
                question: "Qual a cor do mar?",
                options: ["Azul", "Amarelo", "Verde", "Vermelho"],
                answer: "Azul"
            },
            {
                question: "Qual é a capital da Espanha?",
                options: ["Paris", "Madrid", "Roma", "Berlim"],
                answer: "Madrid"
            }
        ]
    }
];

let currentVideoIndex = 0;
let score = 0;
let totalScore = 0;
const videoStatus = videos.map(() => ({ completed: false }));

document.addEventListener("DOMContentLoaded", () => {
    loadVideo(currentVideoIndex);
    document.getElementById('article').addEventListener('click', () => {
        document.getElementById('modalArticle').style.display = 'flex';
    });
    document.getElementById('closeArticle').addEventListener('click', () => {
        document.getElementById('modalArticle').style.display = 'none';
    });
    document.getElementById('next').addEventListener('click', () => {
        document.getElementById('modalQuiz').style.display = 'flex';
    });
    document.getElementById('closeQuiz').addEventListener('click', () => {
        document.getElementById('modalQuiz').style.display = 'none';
    });
    document.getElementById('nextVideo').addEventListener('click', () => {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        loadVideo(currentVideoIndex);
        document.getElementById('modalQuiz').style.display = 'none';
        document.getElementById('quizResult').style.display = 'none';
        document.getElementById('quizForm').style.display = 'block';
    });
});

function loadVideo(index) {
    const videoData = videos[index];
    document.getElementById('videoPlayer').src = videoData.src;
    document.getElementById('contentTitle').textContent = videoData.contentTitle;
    document.getElementById('contentAuthor').textContent = videoData.contentAuthor;
    document.getElementById('videoTitle').textContent = videoData.videoTitle;
    document.getElementById('videoDescription').textContent = videoData.videoDescription;
    document.getElementById('articleTitle').textContent = videoData.articleTitle;
    document.getElementById('articleContent').innerHTML = videoData.article;
    generateQuiz(videoData.questions);
    updateVideoList();
}

function generateQuiz(questions) {
    const quizForm = document.getElementById('quizForm');
    quizForm.innerHTML = '';
    const selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 3);
    selectedQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `<p>${q.question}</p>`;
        q.options.sort(() => 0.5 - Math.random()).forEach(option => {
            questionDiv.innerHTML += `
                <label>
                    <input type="radio" name="q${index}" value="${option}"> ${option}
                </label><br>
            `;
        });
        quizForm.appendChild(questionDiv);
    });
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Finalizar Quiz';
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        calculateScore(selectedQuestions);
    });
    quizForm.appendChild(submitButton);
}

function calculateScore(questions) {
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption) {
            const isCorrect = selectedOption.value === q.answer;
            if (isCorrect) score++;
            answersDiv.innerHTML += `
                <div class="answer ${isCorrect ? 'correct' : 'incorrect'}">
                    <p>${q.question}</p>
                    <p>Sua resposta: ${selectedOption.value} - ${isCorrect ? 'Correta' : 'Errada'}</p>
                    <p>Resposta correta: ${q.answer}</p>
                </div>
            `;
        }
    });
    totalScore += score;
    videoStatus[currentVideoIndex].completed = true;
    document.getElementById('currentScore').textContent = score;
    document.getElementById('totalScore').textContent = totalScore;
    document.getElementById('quizForm').style.display = 'none';
    document.getElementById('quizResult').style.display = 'block';
    updateVideoList();
}

function updateVideoList() {
    const videoList = document.getElementById('videoList');
    videoList.innerHTML = '';
    videos.forEach((video, index) => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        if (videoStatus[index].completed) {
            videoItem.classList.add('completed');
        }
        videoItem.textContent = `${video.name} - ${videoStatus[index].completed ? 'Completo' : 'Não feito'}`;
        videoItem.addEventListener('click', () => {
            currentVideoIndex = index;
            loadVideo(currentVideoIndex);
        });
        videoList.appendChild(videoItem);
    });
}
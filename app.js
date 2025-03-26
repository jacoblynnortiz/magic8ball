let button = document.getElementById('button');

let questionInput = document.getElementById('questionInput');

let ballFace = document.getElementById('ballFace');

let ballsAnswer = document.getElementById('ballsAnswer');

let answers = [
    {
        "affirmative": [
            "It is certain.",
            "It is decidedly so.",
            "Without a doubt.",
            "Yes definitely.",
            "You may rely on it.",
            "As I see it, yes.",
            "Most likely.",
            "Outlook good.",
            "Yes.",
            "Signs point to yes."
        ]
    },
    {
        "nonCommittal": [
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and ask again."
        ]
    },
    {
        "negative": [
            "Don't count on it.",
            "My reply is no.",
            "My sources say no.",
            "Outlook not so good.",
            "Very doubtful."
        ]
    }
]

button.addEventListener('click', function (e) {
    e.preventDefault();

    if (questionInput.value == '')
        return;

    questionInput.value = '';

    pickResponseType();
});

function pickResponseType() {

    let ballResponseTypeNum = Math.floor(Math.random() * 2)
    let ballResponseType;

    switch (ballResponseTypeNum) {
        case 0:
            ballResponseType = 'affirmative';
            pickAnswer(ballResponseType);
            break;
        case 1:
            ballResponseType = 'nonCommittal';
            pickAnswer(ballResponseType);
            break;
        case 2:
            ballResponseType = 'negative';
            pickAnswer(ballResponseType);
            break;
    }
}

function pickAnswer(ballResponseType) {

    let ballResponse;

    switch (ballResponseType) {
        case 'affirmative':
            randChoice = Math.floor(Math.random() * 9);

            ballResponse = answers[0].affirmative[randChoice];
            break;
        case 'nonCommittal':
            randChoice = Math.floor(Math.random() * 3);

            ballResponse = answers[1].nonCommittal[randChoice];
            break;
        case 'negative':
            randChoice = Math.floor(Math.random() * 4);

            ballResponse = answers[2].negative[randChoice];
            break;
    }

    ballsAnswer.innerText = ballResponse;

    ballFace.classList.add('flip-ball');

    setTimeout(() => {
        ballFace.classList.remove('flip-ball');
    }, 3000);
}
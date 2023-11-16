// function AddMessage() {
//     var result = document.getElementById("result");

//     var container = document.createElement('div');
//     container.className = 'newContainer';

//     var name = document.createElement('h5');
//     name.className = 'name';
//     name.textContent = document.getElementById("name").value;

//     var date = document.createElement('h5');
//     date.className = 'date';
//     date.textContent = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();

//     var hr = document.createElement('hr');

//     var message = document.createElement('p');
//     message.className = 'message';
//     message.textContent = document.getElementById("message").value;

//     container.appendChild(name);
//     container.appendChild(date);
//     container.appendChild(hr);
//     container.appendChild(message);

//     result.appendChild(container);

//     document.getElementById("name").value = '';
//     document.getElementById("message").value = '';
// }



//----------------------------------------------------------------------------------------------------

// var currentQuestion = 0;
// var questions = [
//     {
//         title: "Питання 1",
//         question: "Яка столиця України?",
//         optionA: "Київ",
//         optionB: "Львів",
//         correctAnswer: "a"
//     },
//     {
//         title: "Питання 2",
//         question: "Яке найбільше озеро в світі?",
//         optionA: "Каспійське море",
//         optionB: "Велике Солоне озеро",
//         correctAnswer: "a"
//     },
//     {
//         title: "Питання 3",
//         question: "Яка найвища гора в світі?",
//         optionA: "Еверест",
//         optionB: "Кіліманджаро",
//         correctAnswer: "a"
//     },
//     {
//         title: "Питання 4",
//         question: "Яка найбільша країна за територією, окрім Росії?",
//         optionA: "Канада",
//         optionB: "Китай",
//         correctAnswer: "a"
//     },
//     {
//         title: "Питання 5",
//         question: "Яке найбільше океан?",
//         optionA: "Тихий океан",
//         optionB: "Атлантичний океан",
//         correctAnswer: "a"
//     }
// ];

// var score = 0;

// function displayQuestion() {
//     var questionTitle = document.getElementById("questionTitle");
//     var question = document.getElementById("question");
//     var optionA = document.getElementById("optionA");
//     var optionB = document.getElementById("optionB");
//     var nextButton = document.querySelector('button[onclick="nextQuestion()"]');
//     var finishButton = document.querySelector('button[onclick="finishTest()"]');

//     if (currentQuestion < questions.length - 1) {
//         questionTitle.textContent = questions[currentQuestion].title;
//         question.textContent = questions[currentQuestion].question;
//         optionA.textContent = questions[currentQuestion].optionA;
//         optionB.textContent = questions[currentQuestion].optionB;

//         nextButton.style.display = "block";
//         finishButton.style.display = "none";
//     } else {
//         nextButton.style.display = "none";
//         finishButton.style.display = "block";
//     }
// }


// function nextQuestion() {
//     var selectedAnswer = document.querySelector('input[name="answer"]:checked');
//     if (selectedAnswer) {
//         if (selectedAnswer.value === questions[currentQuestion].correctAnswer) {
//             score++;
//         }
//         currentQuestion++;
//         selectedAnswer.checked = false;
//         displayQuestion();
//     }
// }

// function finishTest() {
//     var selectedAnswer = document.querySelector('input[name="answer"]:checked');
//     if (selectedAnswer) {
//         if (selectedAnswer.value === questions[currentQuestion].correctAnswer) {
//             score++;
//         }
//         displayResult();
//     }
// }

// function displayResult() {
//     var questionDiv = document.getElementById("questions");
//     var resultDiv = document.getElementById("result");
//     var scoreElement = document.querySelector("#result #score");
//     questionDiv.style.display = "none";
//     resultDiv.style.display = "block";
//     scoreElement.textContent = "Ваш результат: " + score + " з " + questions.length;
// }

// displayQuestion();

//------------------------------------------------------------------------------------------------------------


function textTransform() {

    var bold = document.getElementById("boldCheckbox").checked;
    var underline = document.getElementById("underlineCheckbox").checked;
    var italic = document.getElementById("italicCheckbox").checked;

    var alignment = "";
    var alignment_radios = document.getElementsByName("alignment");

    for (var i = 0; i < alignment_radios.length; i++) {
        if (alignment_radios[i].checked) {
            alignment = alignment_radios[i].value;
            break;
        }
    }

    var text = document.getElementById("text").value;

    var changedText = text;
    if (bold) {
        changedText = "<b>" + changedText + "</b>";
    }
    if (underline) {
        changedText = "<u>" + changedText + "</u>";
    }
    if (italic) {
        changedText = "<i>" + changedText + "</i>";
    }

    var alignedText = "<div style=\"text-align: " + alignment + "\">" + changedText + "</div>";

    document.getElementById("result").innerHTML = alignedText;

    document.getElementById("text").value = '';
}
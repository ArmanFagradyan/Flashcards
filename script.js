const flashcards = document.getElementsByClassName('flashcards')[0];
const createBox = document.getElementsByClassName('create__box')[0];
const question = document.getElementById('question');
const answer = document.getElementById('answer');

let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

contentArray.forEach(divMaker);
function divMaker(text){
    const div = document.createElement("div");
    const h2_question = document.createElement("h2");
    const h2_answer = document.createElement("h2");
    const delButton = document.createElement("button");

    div.className = 'flashcard';

    h2_question.setAttribute('style', "border-top: 1px solid red; padding: 15px; margin-top: 30px; user-select: none;");
    h2_question.innerHTML = text.my_question;

    h2_answer.setAttribute('style', "text-align: center; display: none; color: red; user-select: none;");
    h2_answer.innerHTML = text.my_answer;

    delButton.setAttribute('style', "width: 5px; height: 5px; color: red");

    div.appendChild(h2_question);
    div.appendChild(h2_answer);
    div.appendChild(delButton);

    div.addEventListener("click", function(){
        if(h2_answer.style.display == "none")
            h2_answer.style.display = "block";
        else
            h2_answer.style.display = "none";
    });

    delButton.addEventListener("click", () => {
        div.remove();
    });

    flashcards.appendChild(div);
}

function addNewCard(){
    const flashcard_content = {
        'my_question' : question.value,
        'my_answer' : answer.value
    }

    contentArray.push(flashcard_content);
    localStorage.setItem('items', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1]);
    question.value = '';
    answer.value = '';
}

function clearCards(){
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}

function showCreateCardBox(){
    createBox.style.display = "block";
}

function hideCreateCardBox(){
    createBox.style.display = "none";
}

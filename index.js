let questions = [{
  
    'ques' : `1) In a doubly linked list, the number of pointers affected for an insertion operation will be`,
    'a': '5',
   'b' : '0',
  'c' : '1',
  'd' : 'None of The Above',
  'correct' : 'a'
},

{
  
    'ques' : `2) Which of the following operations is performed more efficiently by doubly linked list than by linear linked list?`,
    'a': 'Deleting a node whose location is given',
   'b' : 'Searching an unsorted list for a given item',
  'c' : 'Inserting a node after the node with a given location',
  'd' : 'None of The Above',
  'correct' : 'a'
},

{
  
    'ques' : `3) The time required to search an element in a linked list of length n is`,
    'a': 'O (log n)',
   'b' : 'O (n)',
  'c' : 'O (1)',
  'd' : 'O (n2)',
  'correct' : 'b'
},

{
  
    'ques' : `4) The minimum number of fields with each node of doubly linked list is`,
    'a': '1',
   'b' : '2',
  'c' : '3',
  'd' : '4',
  'correct' : 'b'
}];


var screen = document.getElementById("mains");
var question = document.getElementById("que");
var first = document.getElementById("section1");
var second = document.getElementById("section2");
var third = document.getElementById("section3");
var fourth = document.getElementById("section4");
var button = document.getElementById("sub");


let index = 0;
let right = 0;
let wrong = 0;
let total = questions.length;

const getselect = () => {
    let answers = document.getElementsByName("option");
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            return answers[i].value;
        }
    }
    return null;
};

const reset = () => {
    let answers = document.getElementsByName("option");
    for (let i = 0; i < answers.length; i++) {
        answers[i].checked = false;
    }
};

const loadQuestion = () => {

    if (index >= total) {
        screen.innerHTML = `
            Thanks for participating... <br>
            You got = ${right}/${total} correct
        `;
        return;
    }

  reset();

  question.innerText = questions[index].ques;
  first.innerText = questions[index].a;
  second.innerText = questions[index].b;
  third.innerText = questions[index].c;
  fourth.innerText = questions[index].d;


};

button.addEventListener("click", () => {
    let selected = getselect();

    if (selected == null) {
        alert("Please select an option!");
        return;
    }

    if (selected == questions[index].correct) {
        right++;
    } else {
        wrong++;
    }

    index++;
    loadQuestion();
});

// Initial call
loadQuestion();
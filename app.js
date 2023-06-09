var value = document.getElementById('value');
var totalnum = document.getElementById('totelvalue');
var displayquestion = document.getElementById('Question');
var btn = document.getElementById('btn');

var array = [
    {
      question: "HTML Stands for ______",
      options: ["HTML", "HTML", "Hypertext Markup Language", "HTML"],
      correctAnswer: "Hypertext Markup Language",
    },
    {
      question: "CSS Stands for ______",
      options: ["CSS", "CSS", "Cascading Style Sheet", "CSS"],
      correctAnswer: "Cascading Style Sheet",
    },
    {
      question: "JS Stands for ______",
      options: ["JS", "JS", "JavaScript", "JS"],
      correctAnswer: "JavaScript",
    },
    {
      question: "RAM Stands for ______",
      options: ["RAM", "RAM", "Random Access Memory", "RAM"],
      correctAnswer: "Random Access Memory",
    },
    {
      question: "SQL Stands for ______",
      options: ["SQL", "SQL", "Structured Query Language", "SQL"],
      correctAnswer: "Structured Query Language",
    },
    {
      question: "is HTML is Programming Language?",
      options: ["YES", "NO"],
      correctAnswer: "NO",
    },
  ];
  
   console.log(totalnum);
  var indexVal = 0  ; 
  function renderQuestion(){
    var que = array[indexVal]
    displayquestion.innerHTML = que.question;
    totalnum.innerHTML = array.length;
    value.innerHTML = indexVal + 1;
    
    
    btn.innerHTML = ""
    for(var i =0; i<que.options.length; i++){
      var correctAnswer = que.correctAnswer
      btn.innerHTML += 
      `<button class="BB col-md-5  bg-info me-3 py-2 " 
        onclick="ans('${que.correctAnswer}','${que.options[i]}')">
        ${que.options[i]}</button>`
          
      
    }
        
  
      }
      renderQuestion();
      
    var marks = 0;
    function ans(a,b){
      indexVal++
      renderQuestion() 
      if(a == b){
          marks++
        }
        console.log(marks);

    }
  

    




















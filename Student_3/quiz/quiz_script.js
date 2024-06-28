const qusestions=[
    {
        qusestion:"Which automobile manufacturer produces the iconic sports car, the 911?",
        answers:[
            {text:"Mercedes-Benz",correct:false},
            {text:"Porsche",correct:true},
            {text:"Ferrari",correct:false},
            {text:"Lamborghini",correct:false},
        ]
    },
    {
        qusestion:"What does the acronym 'ABS' stand for in the context of automotive technology?",
        answers:[
            {text:"Automatic Brake System",correct:false},
            {text:"Anti-Brake Skid",correct:false},
            {text:"Advanced Brake Sensing",correct:false},
            {text:"Anti-lock Braking System",correct:true},
        ]
    },
    {
        qusestion:"Which country is known for producing the luxury car brand Rolls-Royce?",
        answers:[
            {text:"Germany",correct:false},
            {text:"japan",correct:false},
            {text:"United Kingdom",correct:true},
            {text:"Sri lanka",correct:false},
        ]
    },
    {
        qusestion:"What is the name of the electric car company founded by Elon Musk?",
        answers:[
            {text:"Tesla Motors",correct:true},
            {text:" Electra Autos",correct:false},
            {text:"Volt Vehicles",correct:false},
            {text:" Eco-Electric",correct:false},
        ]
    },
    {
        qusestion:"Which car is often referred to as the 'pony car' and has models like GT and Shelby GT500?",
        answers:[
            {text:"Chevrolet Camaro",correct:false},
            {text:"Dodge Challenger",correct:false},
            {text:"Ford Mustang",correct:true},
            {text:"Pontiac Firebird",correct:false},
        ]
    },
    {
        qusestion:"Which famous Italian carmaker is responsible for creating the LaFerrari, an exceptional hybrid sports car?",
        answers:[
            {text:"Lamborghini",correct:false},
            {text:"Maserati",correct:false},
            {text:"Ferrari",correct:true},
            {text:"Alfa Romeo",correct:false},
        ]
    },
    {
        qusestion:"What is the top speed of Bugatti Veyron Super Sport, one of the fastest production cars in the world?",
        answers:[
            {text:"220 mph (354 km/h)",correct:false},
            {text:"145 mph (394 km/h)",correct:false},
            {text:"267 mph (430 km/h)",correct:true},
            {text:"300 mph (483 km/h)",correct:false},
        ]
    },
    {
        qusestion:"Which brand is renowned for its focus on safety and developed innovations such as the three-point seatbelt?",
        answers:[
            {text:"Volvo",correct:true},
            {text:"BMW",correct:false},
            {text:"Audi",correct:false},
            {text:"Mercedes-Benz",correct:false},
        ]
    },
    {
        qusestion:"In automotive terms, what does the abbreviation 'RPM' stand for?",
        answers:[
            {text:"Revolutions Per Mile",correct:false},
            {text:"Rotations Per Minute",correct:false},
            {text:"Revolutions Per Meter",correct:true},
            {text:"Rotations Per Mile",correct:false},
        ]
    },
    {
        qusestion:"What is the name of the off-road competition where drivers navigate through challenging terrain using specialized vehicles?",
        answers:[
            {text:"Grand Prix",correct:false},
            {text:"Le Mans",correct:false},
            {text:"Baja 1000",correct:true},
            {text:"Formula One",correct:false},
        ]
    }
];
const questionElement =document.getElementById("question");
const answerButtons =document.getElementById("answer-buttons");
const nextButton =document.getElementById("next-btn");
const questioNum =document.getElementById("qNum");
const startQuizBtn =document.getElementById("startQuizBtn");
const backmp4 =document.getElementById("backmp4");
// const times_up =document.getElementById();


const targetQuestions = 10;
let currentQuestionIndex=0;
let score=0;
let lefttime =0;



function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    startQuizBtn.style.display = "none";//hide start button
    backmp4.style.display = "none";//hide start button
    showQuestion();
}

function time(){
    var seconds = 60;//satart time
    var countdown = document.getElementById("countdown");
    var timeToShow = document.getElementById("timeToShow");
    var goodPerformance =document.getElementById("goodPerformance");
    var badPerformance =document.getElementById("badPerformance");
    var finishdHead =document.getElementById("finishdHead");

    var countdownInterval = setInterval(function () {
    seconds--;
    countdown.innerHTML =  seconds + " seconds remaining.";
        if (seconds<10){//if time is low than 10 it will be red
        countdown.innerHTML = seconds + " seconds remaining.";
        countdown.style.color = "red";}
    if (seconds == 0 || currentQuestionIndex == targetQuestions) {//after submition
        clearInterval(countdownInterval);
        questioNum.innerHTML="";
        document.getElementById("time").style.display = "none";//dispaly none
        clearInterval(countdownInterval);
        questioNum.innerHTML="";
        lefttime = 60 - seconds;//reaming time

        timeToShow.innerHTML = `<strong>you took ${lefttime} seconds </strong>`;//time display
        finishdHead.innerHTML="congratulations quiz is completed";//question header after submit

        if(score>=5){
            goodPerformance.innerHTML="Execellent Mark keep up the good work";//if marksabove 5 display this
        }else{
            badPerformance.innerHTML="Try hard";//if marks bekow 5 display this
        }
        showScore();
    } 

}, 1000);

}

function showQuestion(){
    resetState();
    let  currentQuestion=qusestions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=currentQuestion.qusestion;

    questioNum.innerHTML="Question:-\n"+questionNo+"/10"; //display question Number

    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect= selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
           button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";   
}

function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${qusestions.length}!`;//display score
    nextButton.innerHTML="play again"; //rename button
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<qusestions.length){//conditions for show score
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<qusestions.length && lefttime==0){//submit conditions 
        handleNextButton();
    }else{ 
      location.reload();//reload page
    }
});

//Start click 
startQuizBtn.addEventListener("click", () => {
    startQuiz();
    time(currentQuestionIndex, targetQuestions);
  });


const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const img = document.getElementById("person-img");
const message = document.getElementById("message");
let currentItem = 0;


function showPerson() {
    img.src = reviews[currentItem].img;
    message.textContent = reviews[currentItem].message;
}


nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();


});
prevBtn.addEventListener("click", function () {

    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();

});

const questions = document.querySelectorAll(".question");
questions.forEach(function(question){
    // the parameter 'question' in here is pointing to the single question
    // console.log(question);
    const btn = question.querySelector(".question-btn");
    
    // console.log(btn);
    btn.addEventListener("click",function(){
        const show_text = question.querySelector(".question-text");
      
        questions.forEach(function(item){
            
            if(item !== question){
                const qst_text = item.querySelector(".question-text");
                qst_text.classList.remove("show-text");
            }

        });
                show_text.classList.toggle("show-text");
        
    });

});
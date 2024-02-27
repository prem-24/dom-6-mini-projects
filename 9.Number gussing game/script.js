'use strict';

let num = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
let score = 10;

function clickEvent(){

        let guess = Number(document.querySelector('.guess').value);
        // console.log(typeof guess);
        if(!guess){
            document.querySelector('.message').textContent = "No Number...😑"; 
        }else if(num === guess){
            document.querySelector('.number').textContent = num;
            let message = document.querySelector('.message');
            message.textContent = "Hey you won it...💥🫡";
            document.querySelector('body').style.backgroundColor = "#5FC278";
            document.querySelector('body').style.Color = "white";
            document.querySelector('header h1').style.color = "white";
            document.querySelector('.between').textContent = '';
            document.querySelector('.number').style.cssText = 'font-size: 5rem; background: #A7B9AB; color: white; border: 2.5px solid #3B6B47; width: 15rem; height: 15rem';
            document.querySelector('.guess').style.cssText = 'background: #A7B9AB; color: white; border: 2.5px solid #3B6B47;';
            const elements = document.querySelectorAll('.right p, .right span');
            elements.forEach(element => {
              element.style.color = 'white';
            });
        }else if(guess>num){
            if(score>0){
                document.querySelector('.message').textContent = "Too high...😐"; 
                // score--;
                document.querySelector('.score').textContent = --score;
            }else{
                document.querySelector('.message').textContent = "You lost the game 😤"; 
            }
           
        }else if(guess<num){
            if(score>0){
                document.querySelector('.message').textContent = "Too Low...😐"; 
                document.querySelector('.score').textContent = --score;
            }else{
                document.querySelector('.message').textContent = "You lost the game 😤"; 
            }
           
        }
    }
    function again() {
        score = 10;
        document.querySelector('.score').textContent = 10;
    
        // Re-select the number element and reset its content
        let numberElement = document.querySelector('.number');
        numberElement.textContent = '?';
        // numberElement.style.borderRadius = '2px'; // For a circular shape
        numberElement.style.border = '2px solid white'; // Border color and width

    
        // Change the message content
        let message = document.querySelector('.message');
        message.textContent = "Start guessing...🤔🤔";
    
        // Reset the background color and styles
        document.querySelector('body').style.backgroundColor = '#4586F0';
        numberElement.style.width = '15rem';
        numberElement.style.background =  '#eee';
        numberElement.style.color = '#3B4454';
        // numberElement.style.border = '2.5px solid #9068b8';
        message.style.color='white'
        document.querySelector('.guess').style.cssText = 'background-color: none; border: 4px solid #eee;';

    }


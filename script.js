const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const taskAssigned = document.getElementById("taskAssigned");
const totalTask = document.getElementById("totalTask");
const createNotification = document.getElementById('createNotification');


// btn1.addEventListener("click",function(event){
//     const numberedTaskAssigned = parseInt(taskAssigned.innerText);
//     const newTaskAssigned = numberedTaskAssigned -1;
//     console.log(newTaskAssigned);

//     taskAssigned.innerText = newTaskAssigned;
//      // totalTask
//     const intTotalTask = parseInt(totalTask.innerText);
//     const newTotalTaskAssigned = intTotalTask +1;
//     console.log(newTotalTaskAssigned);
//     totalTask.innerText = newTotalTaskAssigned;

// // create notification

//     const cardTitle = event.target.closest(".card").querySelector(".card-title").innerText;

//     const notification = document.createElement('p');
//     notification.innerText = `You have completed the task "${cardTitle}" at ${new Date().toLocaleTimeString("en-US")}.`;
//     notification.classList.add('notification-style');
//     createNotification.appendChild(notification);


// // Button Disabled

//     btn1.classList.add("btn-disabled");
//     console.log(cardTitle);

// });




function btnClicked(btnID){

    const btnWork = document.getElementById(btnID);

    btnWork.addEventListener("click",function(event){
        const numberedTaskAssigned = parseInt(taskAssigned.innerText);
        const newTaskAssigned = numberedTaskAssigned -1;
        console.log(newTaskAssigned);
    
        taskAssigned.innerText = newTaskAssigned;
         // totalTask
        const intTotalTask = parseInt(totalTask.innerText);
        const newTotalTaskAssigned = intTotalTask +1;
        console.log(newTotalTaskAssigned);
        totalTask.innerText = newTotalTaskAssigned;
    
    // create notification
    
        const cardTitle = event.target.closest(".card").querySelector(".card-title").innerText;
    
        const notification = document.createElement('p');
        notification.innerText = `You have completed the task "${cardTitle}" at ${new Date().toLocaleTimeString("en-US")}.`;
        notification.classList.add('notification-style');
        createNotification.appendChild(notification);
    
    
    // Button Disabled
    
    btnWork.classList.add("btn-disabled");
        console.log(cardTitle);
    
    });



}

btnClicked("btn-1");
btnClicked("btn-2");
btnClicked("btn-3");
btnClicked("btn-4");
btnClicked("btn-5");
btnClicked("btn-6");


// Today's Date

const calenderDate = document.getElementById('calenderDate');
const todayDate = new Date().toDateString();
calenderDate.innerText = todayDate;


document.getElementById('clearHistory').addEventListener('click',function(){
    createNotification.innerText = '';
})
























































// Random BG Color Change

document.getElementById("root").addEventListener('click', function(){
    const body = document.getElementById("body-bg");
    body.style.backgroundColor = generateRGBColor();

});


function generateRGBColor(){
    let red = parseInt(Math.random()*255);
let green = parseInt(Math.random()*255);
let blue = parseInt(Math.random()*255);
    return `rgb(${red},${green},${blue})`;

}


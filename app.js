document.getElementById('btn1').addEventListener('click', () => {

    document.getElementById('btn1').disabled = true;


    const time = new Date().toLocaleTimeString('en-US', { hour12: true });


    const taskTitleElement = document.getElementById('task-title1');
    if (!taskTitleElement) {
        console.error("Element with ID 'task-title1' not found.");
        return;
    }
    const history = taskTitleElement.innerText;

    const newDiv = document.createElement('div');
    newDiv.innerHTML = <p class="bg-[#F4F7FF] p-2 rounded-md shadow-md">You have completed ${history} at ${time}</p>;

    const historyContainer = document.getElementById('history');
    if (!historyContainer) {
        console.error("Element with ID 'history' not found.");
        return;
    }
    historyContainer.appendChild(newDiv);
});
document.getElementById('btn2').addEventListener('click', () => {

    document.getElementById('btn2').disabled = true;


    const time = new Date().toLocaleTimeString('en-US', { hour12: true });


    const taskTitleElement = document.getElementById('task-title2');
    if (!taskTitleElement) {
        console.error("Element with ID 'task-title1' not found.");
        return;
    }
    const history = taskTitleElement.innerText;

    const newDiv = document.createElement('div');
    newDiv.innerHTML = <p class="bg-[#F4F7FF] p-2 rounded-md shadow-md">You have completed ${history} at ${time}</p>;

    const historyContainer = document.getElementById('history');
    if (!historyContainer) {
        console.error("Element with ID 'history' not found.");
        return;
    }
    historyContainer.appendChild(newDiv);
});
document.getElementById('btn3').addEventListener('click', () => {

    document.getElementById('btn3').disabled = true;


    const time = new Date().toLocaleTimeString('en-US', { hour12: true });


    const taskTitleElement = document.getElementById('task-title3');
    if (!taskTitleElement) {
        console.error("Element with ID 'task-title1' not found.");
        return;
    }
    const history = taskTitleElement.innerText;

    const newDiv = document.createElement('div');
    newDiv.innerHTML = <p class="bg-[#F4F7FF] p-2 rounded-md shadow-md">You have completed ${history} at ${time}</p>;

    const historyContainer = document.getElementById('history');
    if (!historyContainer) {
        console.error("Element with ID 'history' not found.");
        return;
    }
    historyContainer.appendChild(newDiv);
});
document.getElementById('btn4').addEventListener('click', () => {

    document.getElementById('btn4').disabled = true;


    const time = new Date().toLocaleTimeString('en-US', { hour12: true });


    const taskTitleElement = document.getElementById('task-title4');
    if (!taskTitleElement) {
        console.error("Element with ID 'task-title1' not found.");
        return;
    }
    const history = taskTitleElement.innerText;

    const newDiv = document.createElement('div');
    newDiv.innerHTML = <p class="bg-[#F4F7FF] p-2 rounded-md shadow-md">You have completed ${history} at ${time}</p>;

    const historyContainer = document.getElementById('history');
    if (!historyContainer) {
        console.error("Element with ID 'history' not found.");
        return;
    }
    historyContainer.appendChild(newDiv);
});
document.getElementById('btn5').addEventListener('click', () => {

    document.getElementById('btn5').disabled = true;


    const time = new Date().toLocaleTimeString('en-US', { hour12: true });


    const taskTitleElement = document.getElementById('task-title5');
    if (!taskTitleElement) {
        console.error("Element with ID 'task-title1' not found.");
        return;
    }
    const history = taskTitleElement.innerText;

    const newDiv = document.createElement('div');
    newDiv.innerHTML = <p class="bg-[#F4F7FF] p-2 rounded-md shadow-md">You have completed ${history} at ${time}</p>;

    const historyContainer = document.getElementById('history');
    if (!historyContainer) {
        console.error("Element with ID 'history' not found.");
        return;
    }
    historyContainer.appendChild(newDiv);
});
document.getElementById('btn6').addEventListener('click', () => {

    document.getElementById('btn6').disabled = true;


    const time = new Date().toLocaleTimeString('en-US', { hour12: true });


    const taskTitleElement = document.getElementById('task-title6');
    if (!taskTitleElement) {
        console.error("Element with ID 'task-title1' not found.");
        return;
    }
    const history = taskTitleElement.innerText;

    const newDiv = document.createElement('div');
    newDiv.innerHTML = <p class="bg-[#F4F7FF] p-2 rounded-md shadow-md">You have completed ${history} at ${time}</p>;

    const historyContainer = document.getElementById('history');
    if (!historyContainer) {
        console.error("Element with ID 'history' not found.");
        return;
    }
    historyContainer.appendChild(newDiv);
});
document.getElementById('clear').addEventListener('click',()=>{
    const container = document.getElementById('history').innerHTML=``
  
})
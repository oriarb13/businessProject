document.getElementById("content").style.backgroundColor="lightBlue";
const array1 = document.querySelectorAll(".text");
for (let i = 0; i < array1.length; i++) {
    array1[i].style.color="red";
}

const array2 = document.querySelectorAll("#list li");
for (let i = 0; i < array2.length; i++) {
    console.log(array2[i].textContent);
}

const myBtn = document.querySelector(".btn");

myBtn.addEventListener("click", function () {
    const array2 = document.querySelectorAll("#list li");
    for (let i = 0; i < array2.length; i++) {
        array2[i].style.backgroundColor="yellow";
    }
});



/////2
const myBtn1 = document.querySelector(".btn1");
function addItem(){
        let newLi = document.createElement("li");
        newLi.textContent="New Item";
        list2.appendChild(newLi);
    
    
        newLi.addEventListener("click",function () {
            const items=list2.querySelectorAll("li");
            for (let i = 0; i < items.length; i++) {
                items[i].classList.remove("selected");   
            }   
            newLi.classList.add("selected");
        });
}
myBtn1.addEventListener("click",addItem)

//     const list11 = document.getElementById("#List2");
//     list11.removeChild(list11.firstElementChild);
// });

const removeB = document.querySelector(".btn-remove-first");
removeB.addEventListener("click", function () {
    const firstItem = list2.firstElementChild;
    list2.removeChild(firstItem);
});

const removeC = document.querySelector(".btn-remove-last");
removeC.addEventListener("click", function () {
    const lastItem = list2.lastElementChild;
    list2.removeChild(lastItem);
});

const removeD = document.querySelector(".btn-remove-selected");
removeD.addEventListener("click", function () {
    let selectedOne=items.querySelector(".selected");
    list2.querySelector.removeChild(selectedOne);
});



////3
const greetingDiv = document.getElementById("greeting");
const nameInput = document.getElementById("nameInput");

nameInput.addEventListener("input", function (ev) { 
    inputValue = ev.target.value;   
    greetingDiv.textContent = `hello, ${inputValue}`;
});

////////////////////////////////איך לאפס את זה
const clear = document.querySelector("clear");
clear.addEventListener("click", function () {
    const nameInput = document.getElementById('nameInput');
    const greeting = document.getElementById('greeting');
    nameInput.value = '';
    greeting.textContent =null;
});


//4

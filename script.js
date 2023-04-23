//Todo list App

const tittle = document.getElementById("tittle");
const description = document.getElementById("description");
const form = document.querySelector(".form");
const container = document.querySelector(".container"); 

// array of object
const tasks = localStorage.getItem("tasks")
?JSON.stringify(localStorage.getItem("tasks"))
:[] ;

showTasks();

function showTasks(){
    tasks.forEach((value,index)=>{
        const div=document.createElement("div");
        div.setAttribute("class","task");

        const innerDiv=document.createElement("div");
        div.append(innerDiv);

        const p=document.createElement("p");
        p.innerText=value.tittle;
        innerDiv.append(p);

        const span=document.createElement("span");
        span.innerText=value.description;
        innerDiv.append(span);

        const btn=document.createElement("button");
        btn.setAttribute("class","deletebtn");
        btn.innerText="-";

        btn.addEventListener("click",()=>{
            removeTasks()
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            showTasks();
        })
        div.append(btn);
        container.append(div);
    })
}

function removeTasks(){
    tasks.forEach(()=>{
    const div=document.querySelector(".task");
    div.remove();
})
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removeTasks();

    tasks.push({
        tittle: tittle.value,
        description:description.value,
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showTasks();
});
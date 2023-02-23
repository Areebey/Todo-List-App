

const tittle = document.getElementById("tittle");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container"); 

const tasks = [] // array of object

function showTasks(){
    tasks.forEach((value,index)=>{
        const div=document.createElement("div")
        div.setAttribute("class","task");

        const innerDiv=document.createElement("innerDiv");
        div.append(innerDiv);

        const p=document.createElement("p")
        p.innerText=value.tittle;
        innerDiv.append(p);

        const span=document.createElement("span")
        span.innerText=value.description;
        innerDiv.append(span);

        const btn=document.createElement("button")
        btn.setAttribute("class","deletebtn")
        btn.innerText="-";
        div.append(btn);
        container.append(div);
    })
}

function removeTasks(){
    tasks.forEach(()=>{
    const div=document.querySelector(".task")
    div.remove()
})
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removeTasks();
    tasks.push({
        tittle: "Areeb",
        description:"Complete your work",
    })
    showTasks();
})
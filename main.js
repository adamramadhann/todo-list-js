const input = document.getElementById("input-todo");
const btnAdd = document.getElementById("btn-add-todo");
const listTodo = document.getElementById("list-todo");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

renderTodo()

function renderTodo() {
    listTodo.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li"); 

        li.className = todo.done ? "w-[300px] flex items-center justify-between p-3 my-3 rounded-md bg-gray-200 line-trought bg-yellow-200" : "w-[300px] flex items-center justify-between p-3 my-3 rounded-md bg-gray-200"

        li.innerHTML = `
            <span>${todo.text}</span>
            <div class="flex items-center gap-3">
                <button class="p-2 text-sm bg-green-200 hover:cursor-pointer hover:bg-green-300 rounded-md">⭕️</button>
                <button class="p-2 text-sm bg-red-200 hover:cursor-pointer hover:bg-red-300 rounded-md">❌</button>
            </div>
        `
        listTodo.appendChild(li)
    });
}


function saveData() {
    localStorage.setItem("todos", JSON.stringify(todos))
}


btnAdd.addEventListener("click", () => {
    const text = input.value.trim();

    if( text === "" ) return alert("input tidak boleh kosong broo !!!");

    todos.push({
        text : text,
        done : false
    })

     input.value = "";
     saveData()
     renderTodo()
})
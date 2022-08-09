const addTodos = document.querySelector(".add");
const ul = document.querySelector(".todos");
const searchInput = document.querySelector(".searcher");

// ADDING NEW TODOS

addTodos.addEventListener("submit", (event) => {

    event.preventDefault();
    const todo = addTodos.add.value.trim();
    if (todo.length > 0) {
        const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center text-light py-3">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
        `;
        ul.innerHTML += html;
        addTodos.reset();
    }
    
});

// SEARCH SECTION

const searchTodos = (value) => {
    Array.from(ul.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(value))
        .forEach(todo => todo.classList.add("filtered"));

    Array.from(ul.children)
        .filter(todo => todo.textContent.toLowerCase().includes(value))
        .forEach(todo => todo.classList.remove("filtered"));
};

searchInput.addEventListener("keyup", e => {
    const value = searchInput.value.trim().toLowerCase();
    searchTodos(value);

});

// DELETING TODOS

ul.addEventListener("click", event => {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }
});

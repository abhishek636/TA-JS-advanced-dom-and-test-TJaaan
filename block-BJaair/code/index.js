let form = document.querySelector("form");
let ul = document.querySelector("ul");


let datas = JSON.parse(localStorage.getItem('cards')) || [];


form.addEventListener('submit', (event) => {
    event.preventDefault();
    let title = event.target.elements.title.value;
    let category = event.target.elements.category.value;
    datas.push({title, category});
    localStorage.setItem('cards', JSON.stringify(datas));
    createUI(datas, ul);
});

function handleEdit(event, info, i, label) {
    let elm = event.target;
    let input = document.createElement('input');
    input.value = info;

    input.addEventListener('keyup', (e) => {
        if(e.keyCode === 13) {
            let updated = e.target.value;
            datas[i][label] = updated;
            createUI();
            localStorage.setItem('cards', JSON.stringify(datas));
        }
    });

    input.addEventListener('blur', (e) => {
        let updated = e.target.value;
        datas[i][label] = updated;
        createUI();
        localStorage.setItem('cards', JSON.stringify(datas));
    });
    let parent = event.target.parentElement;
    parent.replaceChild(input, elm); 
}

function createUI(data = datas, root = ul) {
    root.innerHTML = "";
    let fragment = new DocumentFragment();
    data.forEach((card, index) => {
        let li = document.createElement("li");
        let h4 = document.createElement("h4");
        h4.addEventListener('dblclick', (event) => handleEdit(event, card.title, index, 'title'));
        h4.innerText = card.title;
        let h2 = document.createElement("h2");
        h2.addEventListener('dblclick', (event) => handleEdit(event, card.category, index, 'category'));
        h2.innerText = card.category;
        li.append(h4, h2);
        fragment.appendChild(li);
    });
    root.append(fragment);
}

createUI(datas, ul);
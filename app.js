const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholders.addEventListener('dragover')
    placeholders.addEventListener('dragenter')
    placeholders.addEventListener('dragleave')
    placeholders.addEventListener('drop')
}

function dragstart(event) {
    setTimeout(() => event.target.classList.add('hide'), 0)
    event.target.classList.add('hold')
}

function dragend(event) {
    event.target.classList.remove('hold', 'hide')
}
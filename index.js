const list = [
    {
        "id" : 1,
        "name" : "Estudar React",
        "category" : "Estudos",
        "isCompleted" : false
    },
    {
        "id" : 2,
        "name" : "Implementar função X",
        "category" : "Trabalho",
        "isCompleted" : false
    },
    {
        "id" : 3,
        "name" : "Fazer compras",
        "category" : "Pessoal",
        "isCompleted" : false
    },
    {
        "id" : 4,
        "name" : "Estudar CSS",
        "category" : "Estudos",
        "isCompleted" : true
    }
]

document.addEventListener("DOMContentLoaded", () => {
    list.map((todo) => {
        const todolist = document.getElementById('list')
        const item = document.createElement('div')
        const subtext = document.createElement('div')
        const subbtn = document.createElement('div')
        const paragraph1 = document.createElement('p')
        const paragraph2 = document.createElement('p')
        const btn1= document.createElement('button')
        const btn2 = document.createElement('button')

        paragraph1.textContent = `${todo.name}`
        paragraph2.textContent = `Categoria: ${todo.category}`
        subtext.appendChild(paragraph1)
        subtext.appendChild(paragraph2)
        subtext.classList.add('itemtext')

        btn1.textContent = 'Completar'
        btn2.textContent = 'Deletar'
        btn1.classList.add('completar')
        if(todo.isCompleted === true){
            subtext.classList.add('completeditem')
            btn1.textContent = 'Desfazer'
        }

        btn1.addEventListener('click', function () {
            if(subtext.classList.value === "itemtext"){
                subtext.classList.remove('itemtext')
                subtext.classList.add('completeditem')
                btn1.textContent = 'Desfazer'
                todo.isCompleted = true
                filterItems()
            } else {
                subtext.classList.remove('completeditem')
                subtext.classList.add('itemtext')
                btn1.textContent = 'Completar'
                todo.isCompleted = false
                filterItems()
            }
        })
        btn2.classList.add('deletar')
        btn2.addEventListener('click', function () {
            const index = list.findIndex(item => item.id == todo.id)
            list.splice(index, 1)
            document.getElementById(todo.id).remove()
        })
        subbtn.appendChild(btn1)
        subbtn.appendChild(btn2)
        subbtn.classList.add('btn')
    
        item.appendChild(subtext)
        item.appendChild(subbtn)
        item.classList.add('item')
        item.setAttribute('id', todo.id)

        todolist.appendChild(item)
    })
})

function filterItems (){
    const filter = document.getElementById('filter').value
    list.map((todo) => {
        const show = document.getElementById(todo.id)
        if(filter === 'all'){
            show.style.display = ''
        }
        else if((filter === 'completed' && todo.isCompleted == true) || (filter === 'notcompleted' && todo.isCompleted == false)){
            show.style.display = ''
        }
        else if((filter === 'completed' && todo.isCompleted == false) || (filter === 'notcompleted' && todo.isCompleted == true)){
            show.style.display = 'none'
        }
    })
}

function addItem () {
    const nextIndex = list[list.length-1].id + 1

    const input = document.getElementById('nametodo')
    const content = input.value.trim()
    input.value = ''

    const cat = document.getElementById('todocat').value

    list.push({
        "id" : nextIndex,
        "name" : `${content}`,
        "category" : `${cat}`,
        "isCompleted" : false
    })

    list.map((todo) => {
        if(todo.id === nextIndex){
            const todolist = document.getElementById('list')
            const item = document.createElement('div')
            const subtext = document.createElement('div')
            const subbtn = document.createElement('div')
            const paragraph1 = document.createElement('p')
            const paragraph2 = document.createElement('p')
            const btn1= document.createElement('button')
            const btn2 = document.createElement('button')

            paragraph1.textContent = `${todo.name}`
            paragraph2.textContent = `Categoria: ${todo.category}`
            subtext.appendChild(paragraph1)
            subtext.appendChild(paragraph2)
            subtext.classList.add('itemtext')

            btn1.textContent = 'Completar'
            btn2.textContent = 'Deletar'
            btn1.classList.add('completar')
        if(todo.isCompleted === true){
            subtext.classList.add('completeditem')
            btn1.textContent = 'Desfazer'
        }

        btn1.addEventListener('click', function () {
            if(subtext.classList.value === "itemtext"){
                subtext.classList.remove('itemtext')
                subtext.classList.add('completeditem')
                btn1.textContent = 'Desfazer'
                todo.isCompleted = true
                filterItems()
            } else {
                subtext.classList.remove('completeditem')
                subtext.classList.add('itemtext')
                btn1.textContent = 'Completar'
                todo.isCompleted = false
                filterItems()
            }
        })
        btn2.classList.add('deletar')
        btn2.addEventListener('click', function () {
            const index = list.findIndex(item => item.id == todo.id)
            list.splice(index, 1)
            document.getElementById(todo.id).remove()
        })
        subbtn.appendChild(btn1)
        subbtn.appendChild(btn2)
        subbtn.classList.add('btn')
    
        item.appendChild(subtext)
        item.appendChild(subbtn)
        item.classList.add('item')
        item.setAttribute('id', todo.id)

        todolist.appendChild(item)
        }
    })
}
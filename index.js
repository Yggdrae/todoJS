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

document.addEventListener("DOMContentLoaded", (add) => {
    list.map((todo) => {
        const todolist = document.getElementById('list')
        const item = document.createElement('div')
        const subtext = document.createElement('div')
        const subbtn = document.createElement('div')
        const paragraph1 = document.createElement('p')
        const paragraph2 = document.createElement('p')
        const btn1= document.createElement('button')
        const btn2 = document.createElement('button')

        btn1.textContent = 'Completar'
        btn2.textContent = 'Deletar'
        btn1.classList.add('completar')
        btn2.classList.add('deletar')
        subbtn.appendChild(btn1)
        subbtn.appendChild(btn2)
        subbtn.classList.add('btn')

        paragraph1.textContent = `${todo.name}`
        if(todo.isCompleted === true) paragraph1.classList.add('completed')
        paragraph2.textContent = `Categoria: ${todo.category}`
        subtext.appendChild(paragraph1)
        subtext.appendChild(paragraph2)
        subtext.classList.add('itemtext')
    
        item.appendChild(subtext)
        item.appendChild(subbtn)
        item.classList.add('item')
        console.log(item)

        todolist.appendChild(item)
    })
})

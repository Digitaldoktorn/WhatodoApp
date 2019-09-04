document.addEventListener('DOMContentLoaded', function(){
    const list = document.querySelector('#task-list ul')

    // delete tasks (using event bubbling)
    list.addEventListener('click', function(e){
        if(e.target.className == 'delete'){
            const li = e.target.parentElement; // this is the parent element of the button
            list.removeChild(li)
        }
    })

    // add books
    const addForm = document.forms['add-task']
    addForm.addEventListener('submit', function(e){
        e.preventDefault()
        const value = addForm.querySelector('input[type="text"]').value

        // create elements
        const li = document.createElement('li')
        const taskName = document.createElement('span')
        const deleteBtn = document.createElement('span')
        const checkBox = document.createElement('input')
        checkBox.setAttribute("type", "checkbox")

        // add content
        taskName.textContent = value
        deleteBtn.textContent = 'X'
        
        // add classes
        taskName.classList.add('name')
        deleteBtn.classList.add('delete')

        // append to DOM - the order matters
        li.appendChild(checkBox)
        li.appendChild(taskName)
        li.appendChild(deleteBtn)
        list.appendChild(li)

    })

    // hide tasks
    const hideBox = document.querySelector('#hide')
    hideBox.addEventListener('change', function(e){
        if(hideBox.checked){
            list.style.display = 'none'
        } else {
            list.style.display = 'initial'
        }
    })

    // filter tasks
    const searchBar = document.forms['search-tasks'].querySelector('input')
    searchBar.addEventListener('keyup', function(e){
        const term = e.target.value.toLowerCase()
        const tasks = list.getElementsByTagName('li')
        Array.from(tasks).forEach(function(task){
            const title = task.firstElementChild.textContent
            if(title.toLowerCase().indexOf(term) != -1){
                task.style.display = 'block'
            } else {
                task.style.display = 'none'
            }
        })
    })
    
    // tabbed content
    const tabs = document.querySelector('.tabs')
    const panels = document.querySelectorAll('.panel')
    tabs.addEventListener('click', function(e){
        const targetPanel = document.querySelector(e.target.dataset.tabtarget)
        panels.forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active')
            } else {
                panel.classList.remove('active')
            }
        })

    })
})
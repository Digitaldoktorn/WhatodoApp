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

        // add content
        taskName.textContent = value
        deleteBtn.textContent = 'delete'

        // add classes
        taskName.classList.add('name')
        deleteBtn.classList.add('delete')


        // append to DOM - the order matters
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
    
    
})
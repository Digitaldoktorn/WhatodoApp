const list = document.querySelector('#task-list ul')

// tabbed content
const tabs = document.querySelector('.tabs')
const panels = document.querySelectorAll('.panel')
tabs.addEventListener('click', function(e) {
    if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target)
        panels.forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active')
            } else {
                panel.classList.remove('active')
            }
        })
    }
})

// delete tasks
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li)
    }
})
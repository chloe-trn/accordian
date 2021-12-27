let widgets = document.querySelectorAll('.accordian-widget')

Array.prototype.slice.call(widgets).forEach(function (widget) {

    let widgetTypeOpenMany = widget.hasAttribute('data-open-many')
    let widgetTypeOpenOne = widget.hasAttribute('data-open-one')
    let openBtns = document.querySelectorAll('.accordian-button')
    let contentAreas = document.querySelectorAll('.accordian-content')

    widget.addEventListener('click', function (e) { 
        e.preventDefault()
        let clickedTarget = e.target
        let isTargetOpen = clickedTarget.getAttribute('aria-expanded') === 'true'

        // data-many-open behavior paths:  
        if(widgetTypeOpenMany && !isTargetOpen){
            clickedTarget.setAttribute('aria-expanded', 'true');
            let clickedTargetContent = document.getElementById(clickedTarget.getAttribute('aria-controls'))
            clickedTargetContent.removeAttribute('hidden')
        }
        else if(widgetTypeOpenMany && isTargetOpen){
            clickedTarget.setAttribute('aria-expanded', 'false');
            let clickedTargetContent = document.getElementById(clickedTarget.getAttribute('aria-controls'))
            clickedTargetContent.setAttribute('hidden', '')
        }

        // data-one-open behavior paths: 
        if(widgetTypeOpenOne && !isTargetOpen){
          
            // close previous openedTarget 

            // open the current one 

        }else if(widgetTypeOpenOne && isTargetOpen){

        }

        
    })
    
})
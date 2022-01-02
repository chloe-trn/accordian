let widgets = document.querySelectorAll('.accordian-widget')

Array.prototype.slice.call(widgets).forEach(function (widget) {

    let widgetTypeOpenMany = widget.hasAttribute('data-open-many')
    let widgetTypeOpenOne = widget.hasAttribute('data-open-one')

    widget.addEventListener('click', function (e) { 
        e.preventDefault()
        let clickedTarget = e.target
        let isTargetOpen = clickedTarget.getAttribute('aria-expanded') === 'true'

        console.log(clickedTarget.getAttribute('aria-expanded'))

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
            // close any previous opened content 
            let contentAreas = widget.querySelectorAll('.accordian-content')
            let openBtns = widget.querySelectorAll('.accordian-button')

            Array.prototype.slice.call(contentAreas).forEach(function (contentArea) {
                contentArea.setAttribute('hidden', '')
            })

            Array.prototype.slice.call(openBtns).forEach(function (openBtn) {
                openBtn.setAttribute('aria-expanded', 'false')
            })
        
            // open the current one 
            clickedTarget.setAttribute('aria-expanded', 'true');
            let clickedTargetContent = document.getElementById(clickedTarget.getAttribute('aria-controls'))
            clickedTargetContent.removeAttribute('hidden')

        }else if(widgetTypeOpenOne && isTargetOpen){
            // close target
            clickedTarget.setAttribute('aria-expanded', 'false');
            let clickedTargetContent = document.getElementById(clickedTarget.getAttribute('aria-controls'))
            clickedTargetContent.setAttribute('hidden', '')

        }   
    })
    
})
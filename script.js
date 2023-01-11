let x,y
    document.getElementsByTagName('body')[0].addEventListener('mousemove',(event)=>{
        x=event.clientX
        y=event.clientY
        let _span = document.createElement('span')
        let _num = Math.floor((Math.random()*250)+50)
        let _rand = Math.random()
        _span.style.width = _num + 'px'
        _span.style.height = _num + 'px'
        _span.style.left = x + 'px'
        _span.style.top = y + 'px'
        _span.style.opacity = _rand
        document.getElementsByTagName('body')[0].appendChild(_span)
    })
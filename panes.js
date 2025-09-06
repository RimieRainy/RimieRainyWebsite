const panes = document.querySelectorAll('.pane')
let z = 1

window.addEventListener('load', () => {
    const panes = document.querySelectorAll('.pane');

    panes.forEach(pane => {
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    const paneWidth = pane.offsetWidth;
    const paneHeight = pane.offsetHeight;

    pane.style.left = (winWidth - paneWidth) / 2 + 'px';
    pane.style.top = (winHeight - paneHeight) / 2 + 'px';
    })
})

panes.forEach(pane => {
    const title = pane.querySelector('.window-header')


    pane.addEventListener('mousedown', () => {
        z = z + 1
        pane.style.zIndex = z;
    })

    title.addEventListener('mousedown', (event) => {
        pane.classList.add('dragging')

        let l = pane.offsetLeft
        let t = pane.offsetTop

        let startX = event.pageX
        let startY = event.pageY

        const drag = (event) => {
            let newLeft = l + (event.pageX - startX)
            let newTop = t + (event.pageY - startY)

            const paneWidth = pane.offsetWidth
            const paneHeight = pane.offsetHeight
            const windowWidth = window.innerWidth
            const windowHeight = window.innerHeight

            const maxLeft = windowWidth - paneWidth;
            const maxTop = windowHeight - paneHeight;

            newLeft = Math.max(0, Math.min(newLeft, maxLeft));
            newTop = Math.max(0, Math.min(newTop, maxTop));

            pane.style.left = `${newLeft}px`;
            pane.style.top = `${newTop}px`;
        }

        const mouseup = () => {
            pane.classList.remove('dragging');

            document.removeEventListener('mousemove', drag)
            document.removeEventListener('mouseup', mouseup)
        }
       
        document.addEventListener('mousemove', drag)
        document.addEventListener('mouseup', mouseup)
    })

})


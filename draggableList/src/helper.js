let dragStartIndex;
let dragEndIndex;

function dragStart() {
    console.log("Event:", "dragstart")
    dragStartIndex = +this.closest('li').getAttribute('data-index')
    console.log(dragStartIndex)

}

function getStartIndex() {
    return dragStartIndex;
}

function getEndIndex() {
    return dragEndIndex;
}

function dragEnter() {
    // console.log("Event:", "dragenter")
    this.classList.add('over')

}



function dragDrop() {
    // console.log("Event:", "dragdrop")
    dragEndIndex = this.getAttribute('data-index');

    this.classList.remove('over');

}

function dragOver(e) {
    // console.log("Event:", "dragover")
    e.preventDefault()
}

function dragLeave() {
    // console.log("Event:", "dragleave")
    this.classList.remove('over')

}

function addEventListener() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItem = document.querySelectorAll('.draggable-list li');

    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", dragStart);
    })

    dragListItem.forEach(item => {
        item.addEventListener('dragover', dragOver)
        item.addEventListener('drop', dragDrop)
        item.addEventListener('dragenter', dragEnter)
        item.addEventListener('dragleave', dragLeave)

    })

}

export default { addEventListener, getStartIndex, getEndIndex }
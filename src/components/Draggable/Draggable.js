
export default class Draggable {
    constructor(parent, children) {
        this.parent = parent;
        this.children = document.querySelectorAll(children);

        this.isDragging = false;
        this.dragging = null;


        this.parent.addEventListener('mouseup', this.handleMouseUp);
        this.parent.addEventListener('mousemove', this.handleMouseMove);
        this.children.forEach(child => child.addEventListener('mousedown', this.handleClick));
    }

    handleMouseMove = (e) => {
        if (this.isDragging) {
            const x = e.clientX - this.dragging.offsetLeft;
            const y = e.clientY;
            console.log(x)
            this.dragging.style.left = `${x}px`;
            this.dragging.style.top = `${y}px`;
        }
    }

    handleClick = (e) => {
        this.isDragging = true;
        this.dragging = e.target;
    }

    handleMouseUp = () => {
        this.isDragging = false;
        this.dragging = null;
    }
}


class Node {
    constructor(parent, neighbors) {
        this.parent = parent;
        this.neighbors = neighbors;
    }
}
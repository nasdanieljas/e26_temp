
class Queue {
    constructor() {
        this.items = []
        this.count = 0
         
    }

    // Add element to rear of queue
    enqueue(element) {
        this.items[this.count] = element
        this.count += 1;
        return element;
    }

    // Return and remove front element in queue
    // Return undefined if queue is empty
    dequeue() {
        if(this.count == 0) return undefined

        let deleteItem = this.items[0]

        for (let i = 0; i < this.count - 1; i++) {
            this.items[i] = this.items[i + 1];
        }

        this.count -= 1
        this.items.length = this.count;

        console.log(`${deleteItem} removed`)
        return deleteItem;
    }

    // Check front element in queue
    peek() {
        if (this.count == 0) return undefined;

        console.log(`Front element is ${this.items[0]}`)
        return this.items[0];
    }

    // Check if queue is empty
    isEmpty() {
        console.log(this.count == 0 ? 'Queue is empty' : 'Queue is NOT empty')
        return this.count == 0;
    }

    // Check size of queue
    size() {
        console.log(`${this.count} elements in queue`)
        return this.count;
    }

    // Print elements in stack
    print() {
        let str = '';

        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + ' ';
        }

        return str
    }

    // Clear queue
    clear() {
        this.items = [];
        this.count = 0;
        console.log('Queue cleared..');
        return this.items;
    }
}

const queue = new Queue()

$(document).ready(function(){
    $("#stack").append(`<div class="row bg-primary push">${queue.enqueue(100)}</div>`);
    $("#stack").append(`<div class="row bg-success push">${queue.enqueue(200)}</div>`);
    $("#stack").append(`<div class="row bg-primary push">${queue.enqueue(300)}</div>`);
    $("#stack").append(`<div class="row bg-success push">${queue.enqueue(400)}</div>`);

    $("button.btn-success").click(function(){
    let element = $(".form-control").val();

    if(element.trim() === "") {
        alert("Please enter data.");
        return
    }

    let result = queue.enqueue(element);

    $("#stack").append(`<div class="row bg-primary push">${result}</div>`);

    $(".form-control").val("");

    });

    $("button.btn-danger").click(function(){

    let deleted = queue.dequeue();

    if(deleted === undefined) {
        alert("Queue is empty. Nothing to dequeue.");
        return;
    }

    $("#stack .push").first().remove();

    $(".popped .pop").text(deleted).show();

    });

    $("button.btn-warning").click(function(){

    $("#stack .push").removeClass("border border-warning");

    if(queue.isEmpty()) {
        alert("Queue is empty. Nothing to peek.")
        return;
    }

    $("#stack .push").first().addClass("border border-warning");

    });

    $("button.btn-light").click(function(){

    queue.clear();

    $("#stack").empty();

    $(".popped .pop").empty().hide();

    });
});


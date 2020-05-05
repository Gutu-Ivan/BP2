class Nod {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

}

class singleList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    addElement(value) {
        const nod = new Nod(value);
        let currentNod = this.head;

        if (!currentNod) {
            this.head = nod;
            this.tail = nod;
            this.size++;
            return nod;
        }

        this.tail.next = nod;
        this.tail = nod;
        this.size++;
        return nod;
    }

    printElements() {
        let currentNod = this.head;

        while (currentNod) {
            console.log(currentNod.data)
            currentNod = currentNod.next;
        }
    }

    getPosAverage() {
        let sum = 0;
        let counter = 0;
        let currentNod = this.head;
        while (currentNod) {
            if (currentNod.data > 0) {
                sum += currentNod.data;
            }
            counter++;
            currentNod = currentNod.next;
        }
        console.log(sum / counter);
    }

    reversePrint(currentNode) {
        if (currentNode) {
            this.reversePrint(currentNode.next)
            console.log(currentNode.data)
        }

    }

    getHead() {
        return this.head;
    }
}

const list = new singleList()
document.addEventListener(`DOMContentLoaded`, () => {
    const inputNumber = document.querySelector('#inputNumber')
    const addNumber = document.querySelector('#addNumber')
    const calcAverage = document.querySelector('#calculateAverage')
    const reversePrint = document.querySelector('#reversePrint')

    addNumber.addEventListener(`click`, () => {
        list.addElement(Number(inputNumber.value))
    });
    calcAverage.addEventListener(`click`, () => {
        list.getPosAverage()
    });
    reversePrint.addEventListener(`click`, () => {
        list.reversePrint(list.getHead())
    });
});


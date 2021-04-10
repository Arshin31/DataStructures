class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class CircularList{
    constructor(){
        this.head = null;
    }

    addtoList(data){
        var curr = this.head;
        var newNode = new Node(data);

        if(curr == null){
            this.head = newNode;
            newNode.next = this.head;
        }
        else{
            while(curr.next != this.head){
                curr = curr.next;
            }
            curr.next = newNode;
            newNode.next = this.head;
        }
    }

    printData(){
        var curr = this.head;
        while(curr.next != this.head){
            console.log(curr.data);
            curr = curr.next;
        }
        console.log(curr.data);
    }

    deleteFrom(pos){
        var curr = this.head;
        var count=0;
        var prev = null;

        if(pos == 0){
            var fnode = this.head;
            while(curr.next != this.head){
                curr = curr.next;

            }
            this.head = fnode.next;
            curr.next = fnode.next;
            fnode.next = null;
        }

        else{
            while(curr.next != this.head){
                if(count == pos){
                    break;
                }
                count++;
                prev = curr;
                curr = curr.next;
            }
            var temp = curr.next;
            curr.next = null;
            prev.next = temp;

        }
    }

    insertAt(ele, pos){
        var newNode = new Node(ele);
        var curr = this.head;
        var count = 0;
        if(pos == 0){
            newNode.next = this.head;
            while(curr.next != this.head){
                curr = curr.next;
            }
            curr.next = newNode;
            this.head = newNode;
        }
        else{
            while(curr.next != this.head){
                if(count == pos-1){
                    break;
                }
                curr = curr.next;
                count++;
            }
            var temp = curr.next;
            curr.next = newNode;
            newNode.next = temp;
        }
    }

    reverseList(){
        var curr = this.head;
        var prev = null;
        var temp;
        var fnode = this.head;

        while(curr.next != this.head){
            temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;

        }
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;

        this.head = prev;
        fnode.next = this.head;
    }

}

var c1 = new CircularList();
c1.addtoList(10);
c1.addtoList(20);
c1.addtoList(30);
c1.addtoList(40);
c1.addtoList(50);
console.log("AFTER ADDING DATA....................")
c1.printData();

// c1.deleteFrom(0);

// console.log("AFTER DELETING 0th node..........................");
// c1.printData();

// c1.insertAt(60,0);
// console.log("after INSERTION>>>>>>>>>>>>>>>>>>>>>>>");

// c1.printData();

c1.reverseList();
console.log("REVERSE LIST...................");
c1.printData();

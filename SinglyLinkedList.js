class Node{
    constructor(data){
        this.data = data;
        this.next =null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }

    add(data){
        var newNode = new Node(data);
        var curr = this.head;

        if(this.head == null){
            this.head = newNode;
        }
        else{
            while(curr.next != null){
                curr = curr.next;

            }
            curr.next = newNode;
       }

    }

    print(){
        var curr = this.head;
        while(curr != null){
            console.log(curr.data);
            curr = curr.next;
        }
    }

    insertAT(element,position){
        var newNode = new Node(element);
        var curr = this.head;
        var count=0;

        if(position==0){
            newNode.next= this.head;
            this.head = newNode;
        }
        else{
            while(curr.next != null){
                if(count==position-1){
                    break;
                }
                curr=curr.next;
                count++;
                
            }
            var temp;
            temp = curr.next;
            curr.next = newNode
            newNode.next = temp;

        }
    }

    delete(position){
        var curr = this.head;
        var count=0;
        var prev=null;

        if(position == 0){
            this.head=curr.next;
            curr.next=null;
        }
        else{
            while(curr.next != null){
                if(count == position){
                    break;
                }
                else{
                    prev = curr;
                    curr = curr.next;
                    count++;
                    
                }
            }
            var temp = curr.next;
            prev.next = temp;
            curr.next = null;
        }
    }

    reverse(){
        var curr = this.head;
        var prev = null;
        while(curr != null){
            var temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        this.head = prev;

    }
        
       
    
}

var L1 = new LinkedList();

L1.add(10);
L1.add(20);
L1.add(30);
L1.add(40);

L1.print();
// console.log("..............................After Insertion................")

// L1.insertAT(50,0);

// L1.print();

// L1.delete(0);

// console.log("............................After Deletion.........................");

// L1.print();

console.log("REVERSE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

L1.reverse();

L1.print();

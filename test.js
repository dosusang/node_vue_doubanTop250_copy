// var func = async (i) => {
//     console.log(await getdate())
// }

// var getdate = function() {
//     return new Date()
// }
// console.log(getdate()) 

var log = function(){
    return console.log.apply(this, arguments)
}

var boom = function(){
    console.log("boom")
}

//函数节流
var throttle = function(fn, interval=300){
    let canRun = true
    return function(){
        if(!canRun) return
        canRun = false
        setTimeout(function(){
            fn.apply(this, arguments)
            canRun = true
        }, interval)
    }
}

//console.log(Array.isArray(debounce))

//函数防抖
var debounce = function(fn, interval = 300) {
    let timeOut = null
    return function(){
        clearTimeout(timeOut)
        timeOut = setTimeout(function(){
            fn.apply(this, arguments)
        }, interval)
    }
}



// 如何创建BFC
// 1、float的值不是none.
// 2、position的值不是static或者relative。
// 3、display的值是inline-block、table-cell、flex、table-caption或者inline-flex
// 4、overflow的值不是visible


//setInterval(debounce(boom, 1000), 2000)

//js实现链表：
function LinkedList() {
    var Node = function (element) {　　　　　　　　//新元素构造
        this.element = element;
        this.next = null;
    };
    var length = 0;
    var head = null;

    this.append = function (element) {
        var node = new Node(element);　　　　　　　　//构造新的元素节点
        var current;
        if (head === null) {　　　　　　　　　　　　　//头节点为空时  当前结点作为头节点
            head = node;
        } else {
            current = head;　　　　　　　　　　　　　　
            while (current.next) {　　　　　　　　　　//遍历，直到节点的next为null时停止循环，当前节点为尾节点
                current = current.next;
            }
            current.next = node;　　　　　　　　　　　　//将尾节点指向新的元素，新元素作为尾节点
        }           
        length++;　　　　　　　　　　　　　　　　　　　　//更新链表长度
    };
    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            var current = head;
            var index = 0;
            var previous;
            if (position == 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
    this.insert = function (position, element) {
        if (position > -1 && position <= length) {　　　　　　　　//校验边界
            var node = new Node(element);　　　　　　　　
            current = head;
            var index = 0;
            var previous;
            if (position == 0) {　　　　　　　　　　　　　　　　　　　　//作为头节点，将新节点的next指向原有的头节点。
                node.next = current;
                head = node;　　　　　　　　　　　　　　　　　　　　　　　　//新节点赋值给头节点
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　//遍历结束得到当前position所在的current节点，和上一个节点
                previous.next = node;　　　　　　　　　　　　　　　　　　　　//上一个节点的next指向新节点  新节点指向当前结点，可以参照上图来看
                node.next = current;
            }
            length++;
            return true;
        } else {
            return false;
        }

    };
    this.toString = function () {
        var current = head;
        var string = '';
        while (current) {
            string += ',' + current.element;
            current = current.next;
        }
        return string;
    };
    this.indexOf = function (element) {
        var current = head;
        var index = -1;
        while (current) {
            if (element === current.element) {　　　　　　　　　　　　//从头节点开始遍历
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.getLength = function () {
        return length;
    }
}

// var a = new LinkedList()
// for(let i = 0; i < 10; i++){
//     a.append(i)
// }
// log(a.toString())

var quikSort = function(arr,left , right) {
    if(left >= right) return
    let index = arr[left]
    //log(index)
    let l = left
    let r = right
    while(l != r) {
        //log("r = %d, l= %d", l, r)
        while(arr[r] >= index && r > l) r--
        while(arr[l] <= index && r > l) l++
        let t = arr[l]
        arr[l] = arr[r]
        arr[r] = t
    }
    arr[left] = arr[l]
    arr[l] = index
    quikSort(arr, left, r-1)
    quikSort(arr, r+1, right)
}

var arr = [1,5,9,6,3,7,2,5,9]
quikSort(arr, 0, arr.length-1)
log(arr)

function getNthFibonacci(count) {
    if(count == 1 || count == 2)
        return 1
    var arr = [1,1]
    for (let i = 2; i < count; i++) {
        arr.push(arr[i-1]+arr[i-2])
    }
    return arr[count-1]
}

log(getNthFibonacci(3))
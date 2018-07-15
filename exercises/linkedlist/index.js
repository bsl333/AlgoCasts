// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document



class Node {
  constructor(data, next=null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst (data) {
    this.head = new Node(data, this.head) // replace the current head and set the next value to the previous head. 
  }

  size() {
    let node = this.head
    let counter = 0
    while (node) {
      counter++
      node = node.next
    }
    return counter
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let node = this.head
    while (node && node.next) {
      node = node.next
    }
    return node
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (!this.head) {
      return
    } 
    this.head = this.head.next
  }

  removeLast() {
    // case where there is no nodes
    if (!this.head) {
      return
    }
    // case where this is one node
    if (!this.head.next) {
      this.head = null
      return
    }
    // case where there is 2+ nodes
    let previous = this.head
    let node = this.head.next
    while (node.next) {
      previous = node
      node = node.next
    }
    previous.next = null
  }

  insertLast(data) {
    const node = new Node(data)
    if (!this.getLast()) {
      this.head = node
    }
    else {
      this.getLast().next = node
    }
  }

  getAt(index) {
    let node = this.getFirst()
    for (let i = 0; i < index; i++) {
      if (!node) {
        return null
      }
      node = node.next
    }
    return node
  }

  removeAt(index) {
    // head points to null
    if (!this.head) {
      return
    }
    // index equals 0
    if (index === 0) {
      this.head = this.head.next
    }
    // ensure that previous and previous.next exist to have linked list point to the node after index.
    const previous = this.getAt(index - 1)
    if (previous && previous.next) {
      previous.next = previous.next.next
    }
    // let node = this.getAt(index)
    // const previous = this.getAt(index - 1)

    // if (node) {
    //   if (index > 0) {
    //     this.getAt(index - 1).next = node.next
    //   } else {
    //     this.head = this.getAt(index + 1)
    //   }
    // }

    // return
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data)
    }

    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }

    const previous = this.getAt(index - 1) || this.getLast()
    previous.next = new Node(data, previous.next)

    // original approach but above is better
    // if (previous) {
    //   previous.next = new Node(data, previous.next)
    // } else {
    //   this.insertLast(data)
    // }
  }

  forEach(cb) {
    for (let i = 0; i < this.size(); i++) {
      cb(this.getAt(i), i, this)
    }
  }

  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
  }
}

module.exports = { Node, LinkedList };

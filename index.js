class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=>a-b)
    this.length=this.items.length;
  }

  get(pos) {
    if (pos<=this.length){
      return this.items[pos]
    }else{
      throw new Error('OutOfBounds')
    }
  }

  max() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    } else {    
    return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    } else {    
    return Math.min(...this.items);
    }
  }

  sum() {
    if (this.length === 0){
      return 0
    } else {
    return this.items.reduce((prevNumber, currNumber) => prevNumber + currNumber)
    }
  }

  avg() {
    if(this.items.length <= 0){s
      return 0;
    } else {
      return this.sum()/this.items.length
    } 
  }
}

module.exports = SortedList;

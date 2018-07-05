class HashTable {
  constructor() {
    this.storage = [];
    this.size = 25;
  }
  insert(value) {
    const key = this._hash(value, this.size);
    this.storage.push([key, value]);
  }

  remove(value) {
    
  }
  retrieve() {}
  _hash(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i) * 3;
    return sum % n;
  }
}

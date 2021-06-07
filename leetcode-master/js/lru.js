/**
 * 实现LRU缓存机制
 * get('x') x插入末尾...
 */
class lRU {
  constructor(size) {
    this.cache = new Map();
    this.size = size;
  }
  get(key) {
    if (this.cache.has(key)) {
      let value = this.cache.get(key);
      this.cache.delete(key);
      this.put(key, value);
      return this.cache.get(key);
    }
    return -1;
  }
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
      this.cache.put(key, value);
    } else if (this.cache.size < this.size) {
      this.cache.set(key, value);
    } else {
      this.cache.set(key, value);
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}

let cache = new lRU(2);
cache.put(1, 1);
cache.put(2, 2);
console.log("cache.get(1)", cache.get(1)); // 返回  1
cache.put(3, 3); // 该操作会使得密钥 2 作废
console.log("cache.get(2)", cache.get(2)); // 返回 -1 (未找到)
cache.put(4, 4); // 该操作会使得密钥 1 作废
console.log("cache.get(1)", cache.get(1)); // 返回 -1 (未找到)
console.log("cache.get(3)", cache.get(3)); // 返回  3
console.log("cache.get(4)", cache.get(4)); // 返回  4

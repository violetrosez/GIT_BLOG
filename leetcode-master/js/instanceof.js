// instance(a,b)
function instanceOf(child, father) {
  while (true) {
    if (child == null) {
      return false;
    }
    if (child.__proto__ === father.prototype) {
      return true;
    }
    child = child.__proto__;
  }
}

function person() {}
function person2() {}
let a = new person();
let b = new person2();
console.log(instanceOf(a, b));

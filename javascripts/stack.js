function StackUnderflowError() {
  this.message = "값이 더 필요해요 (Stack underflow)";
}

function Stack(name) {
  var arr = [];

  return {
    push: function (item) {
      arr.push(item);
    },
    peek: function (offset) {
      offset = offset || 1;
      return arr[arr.length - offset];
    },
    pop: function () {
      if (arr.length > 0) {
        return arr.pop();
      } else {
        console.warn("Stack underflow in " + name);
        throw new StackUnderflowError();
      }
    },
    print: function () {
      return arr.join(" ") + " <- Top ";
    },
    size: function () {
      return arr.length;
    }
  };
}

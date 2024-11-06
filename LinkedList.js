const nodeConstruct = function (value) {
  let next = null;
  return {
    value,
    next,
  };
};

const ListConstruct = function (value) {
  let a = 0;

  let head = null;

  const tail = function (item) {
    if (item.next == null) return item;
    return tail(item.next);
  };

  const append = function (node) {
    if (!head) {
      head = nodeConstruct(node);
    } else {
      let b = tail(head);
      b.next = nodeConstruct(node);
    }
  };

  const at = function (n) {
    a = 0;
    function placeName(node) {
      if (n == a) return node.value;
      a++;
      return placeName(node.next);
    }
    return placeName(head);
  };

  const prepend = function (node) {
    let rand = nodeConstruct(node);
    rand.next = head;
    head = rand;
  };

  const toString = function () {
    let listString = "";

    const printName = function (List) {
      listString = `${listString} (${List.value}) ->`;
      if (List.next == null) {
        listString = `${listString} null`;
        return listString;
      }
      return printName(List.next);
    };
    console.log(printName(head));
  };

  const find = function (query) {
    a = 0;
    function placeFind(node) {
      if (node.value == query) return a;
      if (node.next == null) return null;
      a++;
      return placeFind(node.next);
    }
    return placeFind(head);
  };

  const contains = function (node) {
    function placeContains(query) {
      if (query.value == node) return true;
      if (query.next == null) return false;
      return placeContains(query.next);
    }
    return placeContains(head);
  };

  const pop = function () {
    let ba = at(size() - 2);
    function remove(node) {
      if (node.value == ba) {
        node.next = null;
        return;
      }
      return remove(node.next);
    }
    remove(head);
  };

  const size = function () {
    a = 0;
    const placeSize = function (node) {
      if (node) a++;
      if (node.next == null) return a;
      return placeSize(node.next);
    };
    return placeSize(head);
  };

  return {
    append,
    at,
    prepend,
    toString,
    find,
    contains,
    pop,
    size,
    tail,
  };
};

export { ListConstruct };

import { ListConstruct } from "./LinkedList.js";

const list = ListConstruct("list");

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// uncomment below to test list.contains()
// console.log(list.contains("snake"));

// uncomment to test list.at()
// console.log(list.at(3));

// uncomment to test list.size()
// console.log(list.size());

// uncomment to test list.prepend()
// console.log(list.prepend("spider"));

// uncomment to test list.find()
// console.log(list.find("snake"));

console.log(list.toString());

// uncomment to test list.pop()
// list.pop();
// console.log(list.toString());

function render(template, data) {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    console.log(key);
    return data[key.trim()];
  });
}

let template = "我是{{{name}}}，年龄{{age}}，性别{{sex}}";
let data = {
  name: "姓名",
  age: 18,
};
console.log(render(template, data));
// 我是姓名，年龄18，性别undefined

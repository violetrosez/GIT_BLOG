//  请实现 DOM2JSON 一个函数，可以把一个 DOM 节点输出 JSON 的格式
// '<div>
//   <span>
//     <a></a>
//   </span>
//   <span>
//     <a></a>
//     <a></a>
//   </span>
// </div>'

// 把上诉dom结构转成下面的JSON格式

// {
//   tag: 'DIV',
//   children: [
//     {
//       tag: 'SPAN',
//       children: [
//         { tag: 'A', children: [] }
//       ]
//     },
//     {
//       tag: 'SPAN',
//       children: [
//         { tag: 'A', children: [] },
//         { tag: 'A', children: [] }
//       ]
//     }
//   ]
// }
function dom2json(dom) {
  let obj = {};
  obj.tag = dom.tagName;
  obj.children = [];
  dom.childNodes.forEach((e) => {
    obj.children.push(dom2json(e));
  });
  return obj;
}

let dom = document.createElement("div");
dom.innerHTML = `<div><span><a></a></span><span><a></a><a></a></span></div>`;

dom2json(dom);

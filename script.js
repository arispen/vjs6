const form = document.querySelector("#design");
let currentId = 1;
let selectedId = -1;

function addButton() {
  const id = "button" + currentId;
  const el = document.createElement("button");
  el.innerText = id;
  el.setAttribute("id", id);
  el.setAttribute("onclick", `openInspector("${id}")`);
  form.appendChild(el);
  currentId++;
}

function addInput() {
  const id = "input" + currentId;
  const el = document.createElement("input");

  el.innerText = id;
  el.setAttribute("id", id);
  el.setAttribute("onclick", `openInspector("${id}")`);
  form.appendChild(el);
  currentId++;
}

function addLabel() {
  const id = "label" + currentId;
  const el = document.createElement("span");
  el.innerText = id;
  el.setAttribute("id", id);
  el.setAttribute("onclick", `openInspector("${id}")`);
  form.appendChild(el);
  currentId++;
}

function openInspector(id) {
  selectedId = id;
  const el = document.querySelector("#" + id);
  const elementId = document.querySelector("#elementId");
  const elementText = document.querySelector("#elementText");
  elementId.innerText = id;
  elementText.value = el.innerText;
}

function editText() {
  const el = document.querySelector("#" + selectedId);
  const elementText = document.querySelector("#elementText");
  el.innerText = elementText.value;
  el.value = elementText.value;
}

function run() {
  //console.log(`${document.querySelector("#code").value}`)
  console.log(eval(document.querySelector("#code").value));

  const preview = document.querySelector("#preview");
  preview.appendChild(document.querySelector("#design").cloneNode(true));

  document.querySelector("#preview #button1").setAttribute("onclick", "button1_click()");
}
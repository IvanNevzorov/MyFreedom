function clickParentFirst() {
  console.log("clickParentFirst");
}

function clickParentSecond() {
  console.log("clickParentSecond");
}

function clickChildrenFirst(event) {
  event.stopPropagation();
  console.log("clickChildrenFirst");
}

function clickChildrenSecond() {
  console.log("clickChildrenSecond");
}

function clickTextFirst() {
  console.log("clickTextFirst");
}

function clickTextSecond(event) {
  console.log(event);
  console.log(this);
  console.log(event.target);

  if (event.ctrlKey || event.shiftKey) {
    console.log("ctrlKey");
  }

  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();

  console.log("clickTextSecond");
}

function clickTextTest() {
  console.log("clickTextTest");
}

const children = document.querySelector(".children");

children.addEventListener("contextmenu", clickChildrenFirst);
children.addEventListener("click", clickChildrenSecond);
children.removeEventListener("click", clickChildrenFirst);

const text = document.querySelector(".text");

text.addEventListener("click", clickTextFirst);
text.onclick = clickTextSecond;
text.addEventListener("click", clickTextTest);

// document.addEventListener("click", () => {
//   console.log("document");
// });



array.map(()=>{})
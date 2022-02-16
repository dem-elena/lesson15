const DomElement = function (
  selector,
  height,
  width,
  bg = "",
  fontSize = "16px"
) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.el = document.createElement("div");
  this.createElem = function () {
    if (this.selector.trim()[0] === ".") {
      this.el.classList.add(this.selector.slice(1));
    } else if (this.selector.trim()[0] === "#") {
      this.el.setAttribute("id", this.selector.slice(1));
    }
    this.el.style.width = this.width;
    this.el.style.height = this.height;
    this.el.style.backgroundColor = this.bg;
    this.el.style.fontSize = this.fontSize;
    return this.el;
  };
  this.setText = function (text) {
    this.el.textContent = text;
  };
  this.setPosition = function (pos) {
    this.el.style.position = pos;
  };
};
const myClass = ".myclass";
const elem1 = new DomElement(myClass, "200px", "200px", "lightblue", "30px");
const elem2 = new DomElement("#mydiv", "100px", "200px", "blue");
// console.log(elem);
// console.log(elem2);
elem1.setText("Hello, World!!!");
elem1.setPosition("absolute");
//elem1.createElem();
//console.log(elemDiv.setText("Hello, World!!!"));
document.body.append(elem1.createElem());
const square = document.querySelector(myClass);
//console.dir(square);
const moveSquare = function (event) {
  let a;
  // console.dir(square);
  if (event.code === "ArrowLeft") {
    if (square.style.left === "") {
      a = -20;
    } else {
      a = parseInt(square.style.left) - 20;
    }
    square.style.left = a + "px";
  } else if (event.code === "ArrowRight") {
    if (square.style.left === "") {
      a = 20;
    } else {
      a = parseInt(square.style.left) + 20;
    }
    square.style.left = a + "px";
  } else if (event.code === "ArrowUp") {
    if (square.style.top === "") {
      a = -20;
    } else {
      a = parseInt(square.style.top) - 20;
    }
    square.style.top = a + "px";
  } else if (event.code === "ArrowDown") {
    if (square.style.top === "") {
      a = 20;
    } else {
      a = parseInt(square.style.top) + 20;
    }
    square.style.top = a + "px";
  }
};

document.addEventListener("keydown", moveSquare);
//console.dir(square);
// elem2.createElem();
// console.log(elem2.el);

var colorList = [
  {
    name: "red"
  },
  {
    name: "green"
  },
  {
    name: "blue"
  }
];

var elements = [];

function number(data) {
  var that = this;
  this.name = data.name;

  this.nm = 0;
  
 
  
  
 

  this.eleNM = document.createElement("div");
  this.eleNM.innerHTML = this.nm;
  
//   STYLESSS
  this.eleNM.style.width = "200px";
  this.eleNM.style.height = "100px";
  
  this.eleNM.style.borderRadius = "10px";
  this.eleNM.style.fontSize = "18px";
  
 
  this.eleNM.style.textAlign = "center";
  this.eleNM.style.verticalAlign = "middle";
  this.eleNM.style.lineHeight = "90px";
  
  this.eleNM.style.backgroundColor=data.name;
  
  this.eleNM.style.color = "white";
 
  
  //   Click option to use

  this.eleNM.addEventListener("click", function () {
    that.additionNM();
  });

  document.body.appendChild(this.eleNM);
}

number.prototype.additionNM = function () {
  this.nm = this.nm +1;
  this.eleNM.innerHTML = this.nm;
};

for (var ii = 0; ii < colorList.length; ii++) {
  elements.push(new number(colorList[ii]));
}
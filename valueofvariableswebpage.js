# Used to show all variables in a firefox console for JS functions and components
for(var b in window) {    if(window.hasOwnProperty(b)) console.log(b+" = "+window[b]);  }

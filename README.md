it's solved :

renderer1 : 

  var imgData = canvas.toDataURL();

  localStorage.setItem("imgData", imgData);
  
renderer 2 :

 var dataImage = localStorage.getItem('imgData');

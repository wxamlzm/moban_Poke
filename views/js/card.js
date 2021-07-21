window.onload = function(){
  let mycard = document.getElementById('mycard');
  let str = '';
  for(var i = 0; i < data.length; i++){
    str += `
      <li>
        <img src="./img/poke/${data[i].id}.png" alt="">
        <p>${data[i].name}</p>
      </li>
    `
  }
  mycard.innerHTML = str;
}

window.onload = function(){

  let uname = document.getElementById('uname');
  let upwd = document.getElementById('upwd');
  let btn = document.getElementById('btn');
  
  btn.onclick = function(){
    let unameVal = uname.value;
    let upwdVal = upwd.value;
    
    ajax(unameVal, upwdVal);
  }
  
  function ajax(uname, upwd){
    let xhr = new XMLHttpRequest;
  
    xhr.onreadystatechange = function(){
      if(4 == xhr.readyState){
        if(xhr.status >= 200 && xhr.status < 300){
          let result = JSON.parse(xhr.responseText);
          console.log(result);
        }else {
          alert('response fail');
        }
      }
    }
  
    xhr.open('POST', '/user/login', true);
    let strUrl = `uname=${uname}&upwd=${upwd}`;
    xhr.send(strUrl)
  }
}

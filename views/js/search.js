window.onload = function(){
  // 获取dom
  let search = document.getElementById('search');
  let btn = document.getElementById('btn');
  let panel = document.getElementById('panel');

  // 当点击btn的时候，获取search的内容，匹配“数据库”返回的数据
  // 并且给到对应ID的图片展示在search-panel窗口上

  // 监听click事件
  btn.onclick = function(){
    let searchVal = search.value;

    showPoke(searchVal);
  }

  // 输出对应图片
  function showPoke(searchVal){
    // 清空面板
    panel.innerHTML = '';
    // 进行输入数据的判断
    if (searchVal == ''){
      panel.innerHTML = '<p class="response">请输入信息</p>';
    }else if (isNaN(searchVal)){
      // 为true 证明输入的是文字,匹配名字
      for(let i = 0; i < data.length; i++){
        if(searchVal == data[i].name){
          panel.innerHTML = `<img src='./img/poke/${data[i].id}.png' class='img'>`;
          return;
        }
      }
      panel.innerHTML = '<p class="response">请输入正确名称</p>';
    }else{
      // 为false 证明输入的是数字型， 匹配ID
      for(let i = 0; i < data.length; i++){
        if(searchVal == data[i].id){
          console.log(1);
          panel.innerHTML = `<img src='./img/poke/${data[i].id}.png' class='img'>`;
          return;
        }
      }
      panel.innerHTML = '<p class="response">请输入正确的ID</p>';
    }
  }
}

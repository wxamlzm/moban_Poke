let poke = document.getElementById('poke');
let strData = '';

for(let i = 1; i < data.length; i++){

  strData += `
    <tr>
      <td>${data[i].id}</td>
      <td><div class='sprite-icon sprite-icon-${data[i].id}'></td>
      <td>${data[i].name}</td>
    </tr>
  `
}
poke.innerHTML = strData;

let card = document.createElement('div');
card.style.width="200px";
card.style.cssText="height:200px; background:red"
card.innerHTML=`<p style="color:yellow">hello,world</p>`;
document.body.append(card);
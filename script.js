const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','開啟導覽選單');}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'關閉導覽選單':'開啟導覽選單');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const projects=[{title:'日常留白｜生活風格網站',description:'以留白與清楚的文字層級，練習打造閱讀舒適的生活風格網站。這是示範專案，尚無獨立上線頁面。',points:['響應式版面與手機閱讀體驗','色彩、字級與視覺層級','語意化 HTML 與鍵盤操作']},{title:'城市漫步｜週末探索計畫',description:'將週末散步整理成一個視覺提案，練習以主題、路線與文字，記錄日常中的新發現。此為示範概念。',points:['主題設定與資訊整理','海報視覺與版面構圖','以簡潔文案描述探索過程']},{title:'邊做邊學｜前端學習筆記',description:'用自己的語言整理前端觀念，從網頁結構、樣式到互動，一步步累積可回顧的學習紀錄。此為示範內容。',points:['HTML 語意與內容結構','CSS 響應式排版','JavaScript 事件與 DOM 操作']}];
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let count=0;document.querySelectorAll('.project').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;if(!card.hidden)count++;});document.querySelector('#filter-status').textContent=`顯示 ${count} 件作品`;}));
const dialog=document.querySelector('#details');
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{const item=projects[Number(button.dataset.project)];document.querySelector('#dialog-title').textContent=item.title;document.querySelector('#dialog-description').textContent=item.description;document.querySelector('#dialog-points').replaceChildren(...item.points.map(point=>{const li=document.createElement('li');li.textContent=point;return li;}));dialog.showModal();document.body.classList.add('modal-open');}));
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
document.querySelector('#year').textContent=new Date().getFullYear();

(()=>{var a={};(()=>{a.r=(a)=>{'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})}})();var b={};(()=>{const a=document.querySelector('.blogsList');(async()=>await fetch('/blogs').then((a)=>a.json()))().then((b)=>{0<b.blogs.length?b.blogs.forEach((b)=>{a.innerHTML+=`<li>
                <h3>${b.title}</h3>
                <p>${b.snippet}</p>
            </li>`}):a.innerHTML=`No Blogs Available`})})(),(()=>{'use strict';a.r(b)})()})();
//# sourceMappingURL=main.js.map
Array.compress=function(t){if(!t.length)return[];let e=[],n=t[0],r=1;for(let u=1;u<=t.length;u++)u===t.length||t[u]!==n?(e.push(r),e.push(n),u<t.length&&(n=t[u],r=1)):r++;return e},mod=(t,e)=>{let n=t%e;return n/e<0&&(n+=e),n},Array.decompress=function(t){if(0!==mod(t.length,2))return[];let e=[];for(let n=0;n<t.length;n+=2)for(let r=0;r<t[n];r++)e.push(t[n+1]);return e},Objectify=function(t){if("object"==typeof t)return t;try{return JSON.parse(t)}catch(e){}try{return t}catch(n){}},Stringify=function(t,e){return"object"==typeof t?e?JSON.stringify(t,null,4):JSON.stringify(t):String(t)},fetchURL=async function(t){let e=await fetch(t),n=await e.text();return n};
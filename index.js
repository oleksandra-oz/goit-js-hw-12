import{a as d,i as p,S as x}from"./assets/vendor-D0cagnvz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const y="47411566-1fe68ca00fdccc973e940a4de";async function L(s,e){try{const t=new URLSearchParams({key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15});return(await d.get(`https://pixabay.com/api/?${t}`)).data}catch(t){throw console.error("Error fetching images:",t),t}}async function w(s,e){try{const t=new URLSearchParams({key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e});return(await d.get(`https://pixabay.com/api/?${t}`)).data}catch(t){throw console.error("Error fetching next page:",t),t}}function h(s){return s.map(({webformatURL:e,largeImageURL:t,tags:i,likes:o,views:r,comments:c,downloads:b})=>`
      <a href="${t}" class="list-item">
      <div class="thumb"><img src="${e}" alt="${i}" class="list-img"></div>
      <ul class="info-box">
      <li class="info-item">
      <h2 class="info-text">Likes</h2>
      <p class="info-amount">${o}</p>
      </li>
      <li class="info-item">
      <h2 class="info-text">Views</h2>
      <p class="info-amount">${r}</p>
      </li>
      <li class="info-item">
      <h2 class="info-text">Comments</h2>
      <p class="info-amount">${c}</p>
      </li>
      <li class="info-item">
      <h2 class="info-text">Downloads</h2>
      <p class="info-amount">${b}</p>
      </li>
      </ul>
      </a>
        `).join("")}const S=document.querySelector(".form"),u=document.querySelector(".list"),n=document.querySelector(".loader"),a=document.querySelector(".load-more"),v=document.querySelector(".input");S.addEventListener("submit",P);a.addEventListener("click",q);let l,m;async function P(s){if(s.preventDefault(),l=1,m=v.value,a.style.display="none",n.style.display="inline-block",u.innerHTML="",s.currentTarget.elements.search.value.trim()===""){n.style.display="none",f();return}await L(m).then(e=>{if(e.total===0){n.style.display="none",f();return}n.style.display="none",u.insertAdjacentHTML("beforeend",h(e.hits)),g();const t=e.totalHits,i=Math.ceil(t/15);if(l>=i){p.info({position:"topRight",message:"We're sorry, but there are no more images for your request."}),a.style.display="none";return}l++,a.style.display="block"}).catch(e=>{n.style.display="none",p.error({position:"topRight",message:e.message,maxWidth:432})})}function f(){p.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:432}),u.innerHTML="",a.style.display="none"}function g(){new x(".list-item",{captions:!0,captionsData:"alt",captionDelay:150}).refresh()}async function q(s){s.preventDefault(),a.style.display="none",n.style.display="inline-block",await w(m,l).then(e=>{n.style.display="none",u.insertAdjacentHTML("beforeend",h(e.hits)),M(),g();const t=e.totalHits,i=Math.ceil(t/15);if(l>=i){p.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),a.style.display="none";return}l++,a.style.display="block"}).catch(e=>{n.style.display="none",p.error({position:"topRight",message:e.message,maxWidth:432})})}function M(){const e=document.querySelector(".list-item").getBoundingClientRect().height;window.scrollBy({left:0,top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map

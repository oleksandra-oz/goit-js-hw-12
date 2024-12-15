import{a as f,i as u,S as x}from"./assets/vendor-D0cagnvz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const y="47411566-1fe68ca00fdccc973e940a4de";async function L(o,e){const i=new URLSearchParams({key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15});return(await f.get(`https://pixabay.com/api/?${i}`)).data}async function S(o,e){const i=new URLSearchParams({key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e});return(await f.get(`https://pixabay.com/api/?${i}`)).data}function h(o){return o.map(({webformatURL:e,largeImageURL:i,tags:n,likes:t,views:s,comments:c,downloads:b})=>`
      <a href="${i}" class="list-item">
      <div class="thumb"><img src="${e}" alt="${n}" class="list-img"></div>
      <ul class="info-box">
      <li class="info-item">
      <h2 class="info-text">Likes</h2>
      <p class="info-amount">${t}</p>
      </li>
      <li class="info-item">
      <h2 class="info-text">Views</h2>
      <p class="info-amount">${s}</p>
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
        `).join("")}const v=document.querySelector(".form"),p=document.querySelector(".list"),r=document.querySelector(".loader"),a=document.querySelector(".load-more"),w=document.querySelector(".input");v.addEventListener("submit",P);a.addEventListener("click",q);let l,m;async function P(o){if(o.preventDefault(),l=1,m=w.value,a.style.display="none",r.style.display="inline-block",p.innerHTML="",o.currentTarget.elements.search.value.trim()===""){r.style.display="none",d();return}await L(m).then(e=>{if(e.total===0){r.style.display="none",d();return}r.style.display="none",p.insertAdjacentHTML("beforeend",h(e.hits)),g();const i=e.totalHits,n=Math.ceil(i/15);if(l>=n){u.info({position:"topRight",message:"We're sorry, but there are no more images for your request."}),a.style.display="none";return}l++,a.style.display="block"}).catch(e=>{r.style.display="none",u.error({position:"topRight",message:e.message,maxWidth:432})})}function d(){u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:432}),p.innerHTML="",a.style.display="none"}function g(){new x(".list-item",{captions:!0,captionsData:"alt",captionDelay:150}).refresh()}async function q(o){o.preventDefault(),a.style.display="none",r.style.display="inline-block",await S(m,l).then(e=>{r.style.display="none",p.insertAdjacentHTML("beforeend",h(e.hits)),M(),g();const i=e.totalHits,n=Math.ceil(i/15);if(l>=n){u.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),a.style.display="none";return}l++,a.style.display="block"}).catch(e=>{r.style.display="none",u.error({position:"topRight",message:e.message,maxWidth:432})})}function M(){const e=document.querySelector(".list-item").getBoundingClientRect().height;window.scrollBy({left:0,top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map

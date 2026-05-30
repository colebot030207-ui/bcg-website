/* Bucks County Gutter — shared scripts (all pages) */
(function(){
  "use strict";
  document.documentElement.classList.remove("no-js");

  // sticky/shrinking header
  var hdr=document.querySelector(".hdr");
  if(hdr){
    var onScroll=function(){hdr.classList.toggle("scrolled",window.scrollY>20);};
    onScroll();window.addEventListener("scroll",onScroll,{passive:true});
  }

  // mobile menu
  var burger=document.querySelector(".burger"),mnav=document.querySelector(".mnav");
  if(burger&&mnav){
    burger.addEventListener("click",function(){
      var o=mnav.classList.toggle("open");burger.classList.toggle("open",o);
      document.body.style.overflow=o?"hidden":"";
    });
    mnav.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){
      mnav.classList.remove("open");burger.classList.remove("open");document.body.style.overflow="";
    });});
  }

  // current year
  document.querySelectorAll("[data-year]").forEach(function(el){el.textContent=new Date().getFullYear();});

  // scroll reveal
  if("IntersectionObserver" in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}});
    },{threshold:.12,rootMargin:"0px 0px -40px 0px"});
    document.querySelectorAll(".reveal").forEach(function(el,i){
      el.style.transitionDelay=(Math.min(i,6)*60)+"ms";io.observe(el);
    });
    window.addEventListener("load",function(){
      setTimeout(function(){
        document.querySelectorAll(".reveal:not(.in)").forEach(function(el){
          var r=el.getBoundingClientRect();
          if(r.top<window.innerHeight){el.classList.add("in");}
        });
      },300);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function(el){el.classList.add("in");});
  }
})();

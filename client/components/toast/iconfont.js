(function(window){var svgSprite='<svg><symbol id="icon-1-copy" viewBox="0 0 1024 1024"><path d="M511.797 962c-247.607 0-449.051-201.446-449.051-449.058 0-247.607 201.446-449.051 449.051-449.051 247.612 0 449.058 201.442 449.058 449.051 0.004 247.607-201.442 449.058-449.058 449.058zM511.797 99.842c-227.783 0-413.095 185.316-413.095 413.095 0 227.787 185.316 413.107 413.097 413.107 227.787 0 413.107-185.319 413.107-413.107 0-227.781-185.319-413.095-413.107-413.095z"  ></path><path d="M759.055 401.129l-278.804 278.81c-12.858 12.858-32.457 14.862-47.417 6.029-2.769-1.644-5.379-3.652-7.759-6.029-0.007-0.004-0.007-0.004-0.007-0.004l-160.521-160.523c-15.237-15.236-15.237-39.943 0-55.183s39.943-15.239 55.179 0l132.938 132.938 251.217-251.22c15.243-15.239 39.943-15.239 55.179 0 15.231 15.239 15.231 39.943-0.007 55.183v0z"  ></path><path d=""  ></path></symbol><symbol id="icon-jinggao" viewBox="0 0 1031 1024"><path d="M512.004441 0C229.234346 0 0.004441 229.229905 0.004441 512s229.229905 512 512 512 512-229.229905 512-512S794.774537 0 512.004441 0z m316.823101 828.828185c-41.170683 41.170683-89.092993 73.484941-142.439989 96.047981-55.197593 23.345984-113.867596 35.18675-174.383112 35.186749s-119.185518-11.835682-174.383111-35.186749c-53.346997-22.563039-101.269306-54.877298-142.43999-96.047981-41.170683-41.170683-73.484941-89.092993-96.04798-142.43999-23.345984-55.197593-35.18675-113.867596-35.18675-174.383111s11.835682-119.185518 35.18675-174.383111c22.563039-53.352081 54.877298-101.27439 96.04798-142.445074 41.170683-41.170683 89.092993-73.484941 142.43999-96.04798 55.197593-23.345984 113.867596-35.18675 174.383111-35.18675s119.185518 11.835682 174.383112 35.18675c53.346997 22.563039 101.269306 54.877298 142.439989 96.04798 41.170683 41.170683 73.484941 89.092993 96.047981 142.43999 23.345984 55.197593 35.18675 113.867596 35.186749 174.383111s-11.835682 119.185518-35.186749 174.383111c-22.563039 53.352081-54.877298 101.27439-96.047981 142.445074z" fill="" ></path><path d="M512.44167 728.143545m-38.776093 0a38.776093 38.776093 0 1 0 77.552186 0 38.776093 38.776093 0 1 0-77.552186 0Z" fill="" ></path><path d="M513.158522 629.517948a33.300565 33.300565 0 0 0 33.300565-33.300565V300.132146a33.300565 33.300565 0 1 0-66.60113 0v296.085237a33.300565 33.300565 0 0 0 33.300565 33.300565z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)
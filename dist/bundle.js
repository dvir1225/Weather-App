(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap);"]),i.push([e.id,":root {\n    box-sizing: border-box;\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n}\n\n* {\n    font-family: 'Poppins', sans-serif;\n}\n\nhtml {\n    width: 100vw;\n    height: 100vh;\n}\n\nbody {\n    width: 100%;\n    height: 100%;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 300px;\n    background-color: #4F4F4F;\n    color: white;\n}\n\n.header-left {\n    display: flex;\n    align-items: center;\n    font-size: 26px;\n}\n\n.currentPlace {\n    margin-left: 20px;\n    font-size: 75%;\n}\n\n.welcomePage {\n    display: flex;\n    height: 50%;\n    width: 50%;\n    margin: 100px auto;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 100px;\n    border-radius: 25px;\n    color: white;\n}\n\n.searchbar input {\n    padding: 10px 20px;\n    border-radius: 5px;\n    border: none;\n    box-shadow: 1px 1px 3px black;\n    margin-right: 10px;\n}\n\n.getWeather {\n    background: linear-gradient(190deg, rgba(3,107,210,1) 0%, rgba(2,63,124,1) 100%);\n    font-weight: 600;\n    color: white;\n}\n\n.getWeather:hover {\n    background: linear-gradient(190deg, rgba(3,107,210,0.8) 0%, rgba(2,63,124,0.8) 100%);\n}\n\n.getWeather:active {\n    background: linear-gradient(190deg, rgba(3,107,210,0.6) 0%, rgba(2,63,124,0.6) 100%);\n\n}\n.hide {\n    display: none;\n}\n\n.greeting {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 75px;\n    font-size: 60px;\n    font-weight: 600;\n}\n\n.greeting > :nth-child(2) {\n    margin-top: 20px;\n    font-size: 75%;\n    font-weight: 400;\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(g);else{var m=o(g,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{function e(e){return new Date((new Date)[Symbol.toPrimitive]("number")+1e3*e.offset).toGMTString()}function n(e){let n;return"01d"===e?n="../src/images/clear.png":"01n"===e?n="../src/images/nt_clear.png":"02d"===e?n="../src/images/mostlysunny.png":"02n"===e?n="../src/images/nt_mostlysunny.png":"03d"===e?n="../src/images/mostlycloudy.png":"03n"===e?n="../src/images/nt_mostlycloudy.png":"04d"===e?n="../src/images/cloudy.png":"04n"===e?n="../src/images/nt_cloudy.png":"09d"===e?n="../src/images/chancerain.png":"09n"===e?n="../src/images/nt_chancerain.png":"10d"===e?n="../src/images/rain.png":"10n"===e?n="../src/images/nt_rain.png":"11d"===e?n="../src/images/tstorms.png":"11n"===e?n="../src/images/nt_tstorms.png":"13d"===e?n="../src/images/snow.png":"13n"===e?n="../src/images/nt_snow.png":"50d"===e?n="../src/images/fog.png":"50n"===e&&(n="../src/images/nt_fog.png"),n}var r=t(379),o=t.n(r),a=t(795),i=t.n(a),s=t(569),c=t.n(s),d=t(565),l=t.n(d),u=t(216),p=t.n(u),g=t(589),m=t.n(g),f=t(28),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),o()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const y={welcomePage:document.querySelector(".welcomePage"),currentWeatherCard:document.querySelector(".currentWeatherCard"),weather:document.getElementById("formSubmit"),forecast:document.getElementById("getForecast"),formInput:document.getElementById("formInput"),searchbar:document.querySelector(".searchbar"),placeName:document.querySelector(".placeName"),currentTemp:document.querySelector(".currentTemp"),feelsLike:document.querySelector(".feelsLike"),greeting:document.querySelector(".greeting")};let v=0;y.weather.addEventListener("click",(()=>{const t=y.formInput.value;clearInterval(v),v+=1,y.welcomePage.style.display="none",document.querySelector("header").appendChild(y.searchbar),y.searchbar.classList.contains("header")||y.searchbar.classList.add("header"),async function(t){try{const r=await async function(e){const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=c20e51e1cd4bf0147fee570dd34d8dd1&units=metric&exclude=minutely,hourly,daily,alerts`),t=await n.json();return console.log(t),{name:t.name,country:t.sys.country,current:Math.round(10*t.main.temp)/10,feelsLike:Math.round(10*t.main.feels_like)/10,weatherMain:t.weather[0].main,weatherDescription:t.weather[0].description,icon:t.weather[0].icon,visibility:t.visibility,humidity:t.main.humidity,wind:t.wind.speed,offset:t.timezone}}(t);(t=>{const r=document.querySelector(".currentWeatherCard"),o=t.visibility;document.querySelector(".currentPlace").innerHTML=`<span>${t.name}, ${t.country}</span>`,r.innerHTML=`\n    <div class="placeName">${t.name}, ${t.country}</div>\n    <div class="timeDate">${e(t)}</div>\n    <div class="currentTemp">Current temp is ${t.current}°C</div>\n    <div class="feelsLike">Feels like ${t.feelsLike} °C</div>\n    <div class="visibility">${(()=>{let e;return e=o<40?"Dense fog":o<200?"Thick fog":o<400?"Fog":o<1e3?"Moderate fog":o<2e3?"Very poor visibility":o<4e3?"Poor visibility":o<9e3?"Moderate visibility":o<2e4?"Good visibility":o<4e4?"Very good visibility":"Excellent visibility",e})()}</div>\n    <div class="icon"><img class="weatherIcon" src=${n(t.icon)} alt=""></div>`,setInterval((function(){document.querySelector(".timeDate").innerText=e(t)}),1e3)})(r),console.log("Got weather")}catch{console.log("Ooops... Couldn't get weather")}}(t),async function(e){try{const t=await async function(e){const n=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${e}&appid=c20e51e1cd4bf0147fee570dd34d8dd1&units=metric`);return await n.json()}(e);(function(e){let t=e.list;const r=document.querySelector(".forecastCards");t.forEach(((e,t)=>{const o=new Date(1e3*e.dt).toGMTString().slice(0,11),a=new Date(1e3*e.dt).getUTCHours();let i=e.weather[0].icon;r.innerHTML+=`\n        <div class="forecast ${t+1}" style="background-color:${(new Date).getHours()>=4&&(new Date).getHours()<=22?"#60B4E2":"#185E89"}">\n            <div class="forecast--dt">${o}, ${12===a?`${a}:00 PM`:0===a?"12:00 AM":a>12?a-12+":00 PM":`${a}:00 AM`}</div>\n            <div class="forecast--temp">${Math.round(10*e.main.temp)/10}°C</div>\n            <div class="forecast--humidity">${e.main.humidity}% Humidity</div>\n            <div class="forecast--wind">Wind speed is ${e.wind.speed} km/hr</div>\n            <div class="forecast--main>${e.weather[0].main}</div>\n            <div class="forecast--description">${e.weather[0].description}</div>\n            <div class="forecast--icon"><img class="forecast--icon-img" src=${n(i)} alt=""></div>\n        </div>`}))})(t),console.log("Got forecast")}catch{console.log("Ooops... Couldn't get forecast")}}(t)}));const b=(new Date).getHours();b>=4&&b<=22?(y.welcomePage.style.backgroundColor="#60B4E2",y.currentWeatherCard.style.backgroundColor="#60B4E2"):(y.welcomePage.style.backgroundColor="#185E89",y.currentWeatherCard.style.backgroundColor="#185E89"),y.greeting.innerHTML=`<span>${(()=>{let e;return e=b>=4&&b<12?"Good Morning":b>=12&&b<18?"Good Afternoon":b>=18&&b<22?"Good Evening":"Good Night",e})()},</span>\n    <span>Where would you like to get the weather at?</span>`})()})();
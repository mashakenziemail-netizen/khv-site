
(function(){
"use strict";
var IMAGES = {
hotelExteriors: [
"https://images.pexels.com/photos/18308569/pexels-photo-18308569.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/2771935/pexels-photo-2771935.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/32895277/pexels-photo-32895277.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/32011831/pexels-photo-32011831.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/19227989/pexels-photo-19227989.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/36688004/pexels-photo-36688004.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/31969409/pexels-photo-31969409.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/31124898/pexels-photo-31124898.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/31836902/pexels-photo-31836902.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/16901228/pexels-photo-16901228.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
],
hotelRooms: [
"https://images.pexels.com/photos/6434592/pexels-photo-6434592.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/8082217/pexels-photo-8082217.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/2736384/pexels-photo-2736384.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/7507131/pexels-photo-7507131.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/8134808/pexels-photo-8134808.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/7745929/pexels-photo-7745929.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/8082235/pexels-photo-8082235.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/6394617/pexels-photo-6394617.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/6434588/pexels-photo-6434588.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/6466496/pexels-photo-6466496.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
],
hotelLobbies: [
"https://images.pexels.com/photos/7821349/pexels-photo-7821349.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/6758531/pexels-photo-6758531.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/14011664/pexels-photo-14011664.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/6876590/pexels-photo-6876590.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/26729556/pexels-photo-26729556.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/6758532/pexels-photo-6758532.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/14036253/pexels-photo-14036253.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
],
hotelPools: [
"https://images.pexels.com/photos/7222170/pexels-photo-7222170.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/20705879/pexels-photo-20705879.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/3775150/pexels-photo-3775150.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/3757640/pexels-photo-3757640.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
],
cathedrals: [
"https://images.pexels.com/photos/14754546/pexels-photo-14754546.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/27134187/pexels-photo-27134187.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/19800979/pexels-photo-19800979.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/5772395/pexels-photo-5772395.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/14305072/pexels-photo-14305072.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/5018001/pexels-photo-5018001.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
],
parks: [
"https://images.pexels.com/photos/18872788/pexels-photo-18872788.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/34193027/pexels-photo-34193027.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/6206545/pexels-photo-6206545.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/29819862/pexels-photo-29819862.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/34880898/pexels-photo-34880898.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/179768/pexels-photo-179768.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
],
embankments: [
"https://images.pexels.com/photos/15138002/pexels-photo-15138002.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/15252479/pexels-photo-15252479.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/15048464/pexels-photo-15048464.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
],
museums: [
"https://images.pexels.com/photos/35870231/pexels-photo-35870231.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/29608796/pexels-photo-29608796.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/28377090/pexels-photo-28377090.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/35870237/pexels-photo-35870237.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/10391629/pexels-photo-10391629.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
],
squares: [
"https://images.pexels.com/photos/20203046/pexels-photo-20203046.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/10947778/pexels-photo-10947778.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/15900193/pexels-photo-15900193.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
],
natureLakes: [
"https://images.pexels.com/photos/27413503/pexels-photo-27413503.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/27522411/pexels-photo-27522411.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/27522408/pexels-photo-27522408.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/27413533/pexels-photo-27413533.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/27413505/pexels-photo-27413505.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/27522407/pexels-photo-27522407.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/27522395/pexels-photo-27522395.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/27413531/pexels-photo-27413531.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
],
dogSledding: [
"https://images.pexels.com/photos/36152834/pexels-photo-36152834.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/7074797/pexels-photo-7074797.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/36152821/pexels-photo-36152821.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/36152824/pexels-photo-36152824.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/36012645/pexels-photo-36012645.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/37687682/pexels-photo-37687682.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
],
fishing: [
"https://images.pexels.com/photos/10065977/pexels-photo-10065977.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/14021529/pexels-photo-14021529.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/33851719/pexels-photo-33851719.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/27819419/pexels-photo-27819419.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/33864430/pexels-photo-33864430.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
],
guidePortraits: [
"https://images.pexels.com/photos/28589238/pexels-photo-28589238.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=500",
"https://images.pexels.com/photos/17060523/pexels-photo-17060523.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=500",
"https://images.pexels.com/photos/35367077/pexels-photo-35367077.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=500",
"https://images.pexels.com/photos/38366748/pexels-photo-38366748.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=500",
"https://images.pexels.com/photos/33970129/pexels-photo-33970129.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=500",
"https://images.pexels.com/photos/30269648/pexels-photo-30269648.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=500"
],
foodShots: [
"https://images.pexels.com/photos/35751131/pexels-photo-35751131.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/4210808/pexels-photo-4210808.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/25390101/pexels-photo-25390101.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/19396430/pexels-photo-19396430.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/18265285/pexels-photo-18265285.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
],
cityShots: [
"https://images.pexels.com/photos/20158431/pexels-photo-20158431.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/27402904/pexels-photo-27402904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/32115971/pexels-photo-32115971.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/36355848/pexels-photo-36355848.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
"https://images.pexels.com/photos/36355847/pexels-photo-36355847.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
],
heroHome:"https://images.pexels.com/photos/20158431/pexels-photo-20158431.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
heroAbout:"https://images.pexels.com/photos/29819862/pexels-photo-29819862.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
heroHotels:"https://images.pexels.com/photos/31969409/pexels-photo-31969409.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
heroTours:"https://images.pexels.com/photos/27522408/pexels-photo-27522408.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
heroGuides:"https://images.pexels.com/photos/17060523/pexels-photo-17060523.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
heroContacts:"https://images.pexels.com/photos/14011664/pexels-photo-14011664.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000"
};
/* ===================== СОСТОЯНИЕ ===================== */
var FAV_KEY ="khv-tourism-favorites";
function getFavorites(){try{return JSON.parse(localStorage.getItem(FAV_KEY)) || [];}catch(e){return [];}}
function setFavorites(list){localStorage.setItem(FAV_KEY, JSON.stringify(list)); updateFavCount();}
function isFavorite(id){return getFavorites().indexOf(id) !== -1;}
window.toggleFavorite = function(id){
  var list = getFavorites();
  var idx = list.indexOf(id);
  if(idx===-1){list.push(id);} else {list.splice(idx,1);}
  setFavorites(list);
  render();
};
function updateFavCount(){
  var el = document.getElementById("khv-fav-count");
  if(el){var n = getFavorites().length; el.textContent = n; el.style.display = n>0 ?"flex" :"none";}
}

/* ===================== УТИЛИТЫ ВЁРСТКИ ===================== */
function stars(rating){
  var full = Math.floor(rating), half = (rating-full)>=0.5;
  var s ="";
  for(var i=0;i<5;i++){
    if(i<full) s += '<span class="text-amber-500">★</span>';
    else if(i===full && half) s += '<span class="text-amber-500">★</span>';
    else s += '<span class="text-slate-300">★</span>';
 }
  return s;
}
function heartBtn(id, extraCls){
  var fav = isFavorite(id);
  return '<button onclick="event.stopPropagation();toggleFavorite(\''+id+'\')" class="'+(extraCls||"")+' flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow hover:scale-105 transition" aria-label="В избранное">'+
    '<span style="color:'+(fav?'#f97316':'#94a3b8')+';font-size:18px;">'+(fav?'♥':'♡')+'</span></button>';
}
function crumbs(items){
  var html = '<nav class="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-slate-500"><a href="#/" class="hover:text-sky-700">🏠 Главная</a>';
  items.forEach(function(it){
    html += '<span>›</span>';
    if(it.href){html += '<a href="'+it.href+'" class="hover:text-sky-700">'+it.label+'</a>';}
    else {html += '<span class="font-medium text-slate-700">'+it.label+'</span>';}
 });
  html += '</nav>';
  return html;
}
function lightboxGallery(images, alt, idPrefix){
  var thumbs = images.map(function(src,i){
    return '<button onclick="openLightbox(\''+idPrefix+'\','+i+')" class="group aspect-[4/3] overflow-hidden rounded-xl">'+
      '<img src="'+src+'" alt="'+alt+' — фото '+(i+1)+'" loading="lazy" class="h-full w-full object-cover transition duration-300 group-hover:scale-105"/></button>';
 }).join("");
  window["__gallery_"+idPrefix] = images;
  return '<div class="grid grid-cols-2 gap-2 sm:grid-cols-4">'+thumbs+'</div>';
}
window.openLightbox = function(idPrefix, index){
  var images = window["__gallery_"+idPrefix];
  if(!images) return;
  window.__lightboxImages = images;
  window.__lightboxIndex = index;
  renderLightbox();
  document.getElementById("khv-lightbox").classList.remove("hidden");
};
window.closeLightbox = function(){document.getElementById("khv-lightbox").classList.add("hidden");};
window.lightboxNav = function(dir){
  var n = window.__lightboxImages.length;
  window.__lightboxIndex = (window.__lightboxIndex + dir + n) % n;
  renderLightbox();
};
function renderLightbox(){
  document.getElementById("khv-lightbox-img").src = window.__lightboxImages[window.__lightboxIndex];
}

/* ===================== ШАПКА / ФУТЕР / МОДАЛКИ ===================== */
var NAV_LINKS = [
  {href:"#/",label:"Главная"},{href:"#/o-gorode",label:"О Хабаровске"},{href:"#/oteli",label:"Отели"},
  {href:"#/dostoprimechatelnosti",label:"Достопримечательности"},{href:"#/tury",label:"Туры"},
  {href:"#/gidy",label:"Гиды"},{href:"#/blog",label:"Блог"},{href:"#/kontakty",label:"Контакты"}
];

function renderShell(){
  var nav = document.getElementById("khv-navbar");
  var links = NAV_LINKS.map(function(l){return '<a href="'+l.href+'" class="rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-sky-800">'+l.label+'</a>';}).join("");
  var mLinks = NAV_LINKS.map(function(l){return '<a href="'+l.href+'" onclick="closeMobileMenu()" class="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-600">'+l.label+'</a>';}).join("");
  nav.innerHTML =
    '<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">'+
      '<a href="#/" class="flex items-center gap-2">'+
        '<span class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-700 to-sky-500 text-lg font-black text-white shadow">Х</span>'+
        '<span class="leading-tight"><span class="block text-base font-bold text-sky-900">Visit Khabarovsk</span>'+
        '<span class="block text-[11px] font-medium uppercase tracking-wide text-orange-500">туризм и отдых</span></span>'+
      '</a>'+
      '<nav class="hidden items-center gap-1 lg:flex">'+links+'</nav>'+
      '<div class="hidden items-center gap-3 lg:flex">'+
        '<a href="#/izbrannoe" class="relative flex items-center text-slate-600 hover:text-orange-500" style="font-size:20px;">♥'+
          '<span id="khv-fav-count" style="display:none;" class="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">0</span></a>'+
        '<a href="tel:+74212000000" class="flex items-center gap-2 rounded-full bg-sky-800 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-700">☎ +7 (4212) 00-00-00</a>'+
      '</div>'+
      '<button onclick="toggleMobileMenu()" class="text-slate-700 lg:hidden" style="font-size:26px;" aria-label="Меню">☰</button>'+
    '</div>'+
    '<div id="khv-mobile-menu" class="hidden border-t border-slate-100 bg-white px-4 pb-4 lg:hidden">'+
      '<nav class="flex flex-col gap-1 pt-2">'+mLinks+
      '<a href="#/izbrannoe" onclick="closeMobileMenu()" class="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-slate-600">♥ Избранное</a>'+
      '<a href="tel:+74212000000" class="mt-2 flex items-center justify-center gap-2 rounded-full bg-sky-800 px-4 py-2.5 text-sm font-semibold text-white">☎ +7 (4212) 00-00-00</a>'+
      '</nav>'+
    '</div>';

  var footer = document.getElementById("khv-footer");
  footer.innerHTML =
    '<div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-10 pt-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">'+
      '<div><div class="mb-3 flex items-center gap-2"><span class="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-600 to-sky-400 font-black text-white">Х</span>'+
      '<span class="text-lg font-bold text-white">Visit Khabarovsk</span></div>'+
      '<p class="text-sm leading-relaxed text-slate-400">Туристический портал о Хабаровске: отели, экскурсии, туры по краю и услуги гидов. Помогаем спланировать путешествие на Дальний Восток.</p>'+
      '<div class="mt-4 flex gap-3">'+
        '<a href="#" class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-white hover:bg-sky-700">ВК</a>'+
        '<a href="#" class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-white hover:bg-sky-700">TG</a>'+
        '<a href="#" class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-white hover:bg-sky-700">IG</a>'+
      '</div></div>'+
      '<div><h4 class="mb-3 font-semibold text-white">Разделы</h4><ul class="space-y-2 text-sm">'+
        '<li><a href="#/o-gorode" class="hover:text-white">О Хабаровске</a></li>'+
        '<li><a href="#/oteli" class="hover:text-white">Гостиницы и отели</a></li>'+
        '<li><a href="#/dostoprimechatelnosti" class="hover:text-white">Достопримечательности</a></li>'+
        '<li><a href="#/tury" class="hover:text-white">Туры и экскурсии</a></li>'+
        '<li><a href="#/gidy" class="hover:text-white">Услуги гидов</a></li>'+
        '<li><a href="#/galereya" class="hover:text-white">Фотогалерея</a></li></ul></div>'+
      '<div><h4 class="mb-3 font-semibold text-white">Информация</h4><ul class="space-y-2 text-sm">'+
        '<li><a href="#/blog" class="hover:text-white">Блог и новости</a></li>'+
        '<li><a href="#/faq" class="hover:text-white">Частые вопросы</a></li>'+
        '<li><a href="#/kontakty" class="hover:text-white">Контакты и бронирование</a></li>'+
        '<li><a href="#/politika" class="hover:text-white">Политика конфиденциальности</a></li></ul></div>'+
      '<div><h4 class="mb-3 font-semibold text-white">Контакты</h4><ul class="space-y-3 text-sm">'+
        '<li>📍 г. Хабаровск, ул. Муравьёва-Амурского, 1, оф. 305</li>'+
        '<li>☎ +7 (4212) 00-00-00</li>'+
        '<li>✉ info@tourism-khabarovsk.ru</li>'+
        '<li>🕒 Ежедневно 9:00–20:00</li>'+
        '<li>💬 WhatsApp/Viber: +7 (999) 00-00-000</li></ul></div>'+
    '</div>'+
    '<div class="border-t border-slate-800 py-5 text-center text-xs text-slate-500">© 2026 Visit Khabarovsk — туристический портал. Сайт носит информационный характер.</div>';

  updateFavCount();
}
window.toggleMobileMenu = function(){document.getElementById("khv-mobile-menu").classList.toggle("hidden");};
window.closeMobileMenu = function(){document.getElementById("khv-mobile-menu").classList.add("hidden");};

/* ----- Модальные окна (формы) ----- */
function fieldHtml(label, inputHtml){
  return '<label class="mb-4 block text-sm"><span class="mb-1.5 block font-medium text-slate-700">'+label+'</span>'+inputHtml+'</label>';
}
var inputCls ="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-sky-600";

window.openModal = function(title, bodyHtml){
  document.getElementById("khv-modal-title").textContent = title;
  document.getElementById("khv-modal-body").innerHTML = bodyHtml;
  document.getElementById("khv-modal").classList.remove("hidden");
  document.body.style.overflow ="hidden";
};
window.closeModal = function(){
  document.getElementById("khv-modal").classList.add("hidden");
  document.body.style.overflow ="";
};

window.openBookingModal = function(hotelId){
  var options = HOTELS.map(function(h){return '<option value="'+h.id+'"'+(h.id===hotelId?" selected":"")+'>'+h.name+' — '+h.stars+'★</option>';}).join("");
  var body =
    '<form onsubmit="return submitForm(event,\'Заявка на бронирование отправлена! Наш менеджер свяжется с вами в течение часа.\')">'+
    fieldHtml("Отель",'<select required class="'+inputCls+'">'+options+'</select>')+
    '<div class="grid grid-cols-2 gap-3">'+
      fieldHtml("Дата заезда",'<input type="date" required class="'+inputCls+'"/>')+
      fieldHtml("Дата выезда",'<input type="date" required class="'+inputCls+'"/>')+
    '</div>'+
    '<div class="grid grid-cols-2 gap-3">'+
      fieldHtml("Гостей",'<input type="number" min="1" value="2" required class="'+inputCls+'"/>')+
      fieldHtml("Тип номера",'<select required class="'+inputCls+'"><option>Эконом / Стандарт</option><option>Комфорт / Улучшенный</option><option>Люкс</option></select>')+
    '</div>'+
    fieldHtml("Ваше имя",'<input type="text" required placeholder="Иван Иванов" class="'+inputCls+'"/>')+
    '<div class="grid grid-cols-2 gap-3">'+
      fieldHtml("Телефон",'<input type="tel" required placeholder="+7 (___) ___-__-__" class="'+inputCls+'"/>')+
      fieldHtml("Email",'<input type="email" required placeholder="you@mail.ru" class="'+inputCls+'"/>')+
    '</div>'+
    '<button type="submit" class="mt-2 w-full rounded-full bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600">Забронировать</button>'+
    '</form>';
  openModal("Бронирование отеля", body);
};

window.openTourOrderModal = function(tourId){
  var options = TOURS.map(function(t){return '<option value="'+t.id+'"'+(t.id===tourId?" selected":"")+'>'+t.name+' — от '+money(t.price)+'</option>';}).join("");
  var body =
    '<form onsubmit="return submitForm(event,\'Заявка на тур отправлена! Мы свяжемся с вами для уточнения деталей и оплаты.\')">'+
    fieldHtml("Имя",'<input type="text" required placeholder="Ваше имя" class="'+inputCls+'"/>')+
    '<div class="grid grid-cols-2 gap-3">'+
      fieldHtml("Телефон",'<input type="tel" required placeholder="+7 (___) ___-__-__" class="'+inputCls+'"/>')+
      fieldHtml("Email",'<input type="email" required placeholder="you@mail.ru" class="'+inputCls+'"/>')+
    '</div>'+
    fieldHtml("Выберите тур",'<select required class="'+inputCls+'">'+options+'</select>')+
    '<div class="grid grid-cols-2 gap-3">'+
      fieldHtml("Дата",'<input type="date" required class="'+inputCls+'"/>')+
      fieldHtml("Человек",'<input type="number" min="1" value="2" required class="'+inputCls+'"/>')+
    '</div>'+
    fieldHtml("Пожелания",'<textarea rows="3" class="'+inputCls+'" placeholder="Например: нужен трансфер из отеля"></textarea>')+
    '<button type="submit" class="mt-2 w-full rounded-full bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600">Отправить заявку</button>'+
    '</form>';
  openModal("Заказать тур", body);
};

window.openGuideOrderModal = function(name){
  var body =
    '<form onsubmit="return submitForm(event,\'Заявка отправлена! Гид свяжется с вами для согласования маршрута.\')">'+
    fieldHtml("Имя",'<input type="text" required placeholder="Ваше имя" class="'+inputCls+'"/>')+
    '<div class="grid grid-cols-2 gap-3">'+
      fieldHtml("Телефон",'<input type="tel" required placeholder="+7 (___) ___-__-__" class="'+inputCls+'"/>')+
      fieldHtml("Дата",'<input type="date" required class="'+inputCls+'"/>')+
    '</div>'+
    fieldHtml("Пожелания к маршруту",'<textarea rows="3" class="'+inputCls+'" placeholder="Расскажите, что хотели бы увидеть"></textarea>')+
    '<button type="submit" class="mt-2 w-full rounded-full bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600">Заказать гида</button>'+
    '</form>';
  openModal("Заказать гида:"+name, body);
};

window.openContactModal = function(title){
  var body =
    '<form onsubmit="return submitForm(event,\'Сообщение отправлено! Мы ответим вам в ближайшее время.\')">'+
    fieldHtml("Имя",'<input type="text" required placeholder="Ваше имя" class="'+inputCls+'"/>')+
    fieldHtml("Телефон или Email",'<input type="text" required placeholder="+7 ... или you@mail.ru" class="'+inputCls+'"/>')+
    fieldHtml("Сообщение",'<textarea rows="4" required class="'+inputCls+'" placeholder="Ваш вопрос или пожелание"></textarea>')+
    '<button type="submit" class="mt-2 w-full rounded-full bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600">Отправить</button>'+
    '</form>';
  openModal(title ||"Обратная связь", body);
};

window.submitForm = function(e, successText){
  e.preventDefault();
  document.getElementById("khv-modal-body").innerHTML =
    '<div class="space-y-4"><div class="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">✅ '+successText+'</div>'+
    '<button onclick="closeModal()" class="w-full rounded-full bg-sky-800 py-2.5 font-medium text-white hover:bg-sky-700">Закрыть</button></div>';
  return false;
};
/* ===================== СТРАНИЦЫ ===================== */
function pageHero(image, title, subtitle){
  return '<section class="relative flex min-h-[42vh] items-end overflow-hidden pt-24">'+
    '<img src="'+image+'" alt="'+title+'" class="absolute inset-0 h-full w-full object-cover"/>'+
    '<div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-slate-950/10"></div>'+
    '<div class="relative mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">'+
    '<h1 class="max-w-3xl text-3xl font-extrabold text-white drop-shadow sm:text-4xl lg:text-5xl">'+title+'</h1>'+
    (subtitle?'<p class="mt-3 max-w-2xl text-base text-slate-100 sm:text-lg">'+subtitle+'</p>':'')+
    '</div></section>';
}

function hotelCardHtml(h){
  return '<div class="khv-reveal group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl">'+
    '<div class="relative h-52 overflow-hidden cursor-pointer" onclick="location.hash=\'#/oteli/'+h.id+'\'">'+
      '<img src="'+h.images[0]+'" alt="Отель '+h.name+'" loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-110"/>'+
      '<span class="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-sky-800">'+"★".repeat(h.stars)+'</span>'+
      heartBtn("hotel-"+h.id,"absolute right-3 top-3")+
    '</div>'+
    '<div class="p-5">'+
      '<h3 class="mb-1 text-lg font-bold text-slate-900">'+h.name+'</h3>'+
      '<div class="mb-2 flex items-center gap-2 text-xs text-slate-500">📍 '+h.address+'</div>'+
      '<div class="mb-3 flex items-center gap-2">'+stars(h.rating)+'<span class="text-xs text-slate-500">'+h.rating+' ('+h.reviewsCount+' отзывов)</span></div>'+
      '<p class="mb-4 khv-line-clamp-2 text-sm text-slate-600">'+h.short+'</p>'+
      '<div class="flex items-center justify-between">'+
        '<div><span class="text-xs text-slate-400">от</span> <span class="text-lg font-extrabold text-sky-800">'+money(h.rooms[0].price)+'</span><span class="text-xs text-slate-400"> / ночь</span></div>'+
        '<a href="#/oteli/'+h.id+'" class="rounded-full bg-sky-800 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700">Подробнее</a>'+
      '</div>'+
    '</div></div>';
}

function attractionCardHtml(a){
  return '<div class="khv-reveal group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl">'+
    '<a href="#/dostoprimechatelnosti/'+a.id+'" class="relative block h-48 overflow-hidden">'+
      '<img src="'+a.images[0]+'" alt="'+a.name+'" loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-110"/>'+
      '<span class="absolute left-3 top-3 rounded-full bg-orange-500 px-2.5 py-1 text-xs font-bold text-white">'+a.category+'</span>'+
    '</a>'+
    '<div class="p-5">'+
      '<h3 class="mb-2 text-lg font-bold text-slate-900">'+a.name+'</h3>'+
      '<div class="mb-1 flex items-center gap-2 text-xs text-slate-500">📍 '+a.address+'</div>'+
      '<div class="mb-3 flex items-center gap-2 text-xs text-slate-500">🕒 '+a.hours+'</div>'+
      '<p class="mb-4 khv-line-clamp-3 text-sm text-slate-600">'+a.description+'</p>'+
      '<a href="#/dostoprimechatelnosti/'+a.id+'" class="text-sm font-semibold text-sky-800 hover:underline">Читать подробнее →</a>'+
    '</div></div>';
}

function tourCardHtml(t){
  return '<div class="khv-reveal group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl">'+
    '<div class="relative h-48 overflow-hidden cursor-pointer" onclick="location.hash=\'#/tury/'+t.id+'\'">'+
      '<img src="'+t.images[0]+'" alt="'+t.name+'" loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-110"/>'+
      heartBtn("tour-"+t.id,"absolute right-3 top-3")+
    '</div>'+
    '<div class="p-5">'+
      '<h3 class="mb-2 text-lg font-bold text-slate-900">'+t.name+'</h3>'+
      '<div class="mb-3 flex flex-wrap items-center gap-3 text-xs text-slate-500"><span>⏱ '+t.duration+'</span><span>👥 '+t.groupSize+'</span></div>'+
      '<p class="mb-4 khv-line-clamp-2 text-sm text-slate-600">'+t.short+'</p>'+
      '<div class="flex items-center justify-between">'+
        '<div><span class="text-xs text-slate-400">от</span> <span class="text-lg font-extrabold text-sky-800">'+money(t.price)+'</span></div>'+
        '<a href="#/tury/'+t.id+'" class="rounded-full bg-sky-800 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700">Подробнее</a>'+
      '</div>'+
    '</div></div>';
}

function pageHome(){
  var advantages = [
    ["🏛️","Уникальная культура и история","Хабаровск — единственный крупный российский город на берегу Амура, соединяющий русскую, казачью и коренную дальневосточную культуру."],
    ["📍","Ворота на Дальний Восток","Отсюда удобно отправиться в Комсомольск-на-Амуре, к озеру Амут, в заповедники и на Шантарские острова."],
    ["☀️","Отдых в любой сезон","Летние речные прогулки и рыбалка, золотая осень в парках, зимние собачьи упряжки и подлёдная рыбалка."],
    ["🛡️","Безопасность и комфорт","Развитая туристическая инфраструктура, гиды с лицензией и отели на любой бюджет."],
    ["💰","Доступные цены","Экскурсии от 1500 ₽, номера в отелях от 2800 ₽ за ночь."],
    ["✈️","Удобная логистика","Международный аэропорт, вокзал на Транссибе и трансфер до всех ключевых точек города."]
 ];
  var advHtml = advantages.map(function(a){
    return '<div class="khv-reveal rounded-2xl border border-slate-100 bg-slate-50 p-6 hover:shadow-md transition">'+
      '<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-800 text-white text-xl">'+a[0]+'</div>'+
      '<h3 class="mb-2 font-bold text-slate-900">'+a[1]+'</h3><p class="text-sm text-slate-600">'+a[2]+'</p></div>';
 }).join("");

  var blogHtml = BLOG.slice(0,3).map(function(p){
    return '<div class="khv-reveal overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">'+
      '<img src="'+p.image+'" alt="'+p.title+'" class="h-40 w-full object-cover" loading="lazy"/>'+
      '<div class="p-5"><div class="mb-1 text-xs text-slate-400">'+p.date+'</div>'+
      '<h3 class="mb-2 khv-line-clamp-2 font-bold text-slate-900">'+p.title+'</h3>'+
      '<a href="#/blog/'+p.id+'" class="text-sm font-semibold text-sky-800 hover:underline">Читать далее →</a></div></div>';
 }).join("");

  return (
    '<section class="relative flex min-h-[92vh] items-center overflow-hidden pt-16">'+
      '<img src="'+IMAGES.heroHome+'" alt="Панорама Хабаровска на закате" class="absolute inset-0 h-full w-full object-cover"/>'+
      '<div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/30"></div>'+
      '<div class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">'+
        '<span class="inline-block rounded-full bg-orange-500/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">Туризм в Хабаровске 2026</span>'+
        '<h1 class="mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">Откройте для себя <span class="text-orange-400">Хабаровск</span> — столицу Дальнего Востока</h1>'+
        '<p class="mt-6 max-w-2xl text-lg text-slate-100">Величественный Амур, дальневосточная тайга, уютные набережные и гостеприимные отели. Планируйте отдых в Хабаровске: отели, экскурсии, туры по краю и услуги гидов — всё в одном месте.</p>'+
        '<div class="mt-8 flex flex-wrap gap-4">'+
          '<a href="#/tury" class="flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 font-semibold text-white shadow-lg hover:bg-orange-600">Выбрать тур →</a>'+
          '<a href="#/oteli" class="flex items-center gap-2 rounded-full bg-white/95 px-6 py-3.5 font-semibold text-sky-900 shadow-lg hover:bg-white">Забронировать отель</a>'+
        '</div>'+
        '<div class="mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">'+
          '<div><div class="text-2xl font-extrabold text-white sm:text-3xl">600 000+</div><div class="text-xs text-slate-200 sm:text-sm">туристов в год</div></div>'+
          '<div><div class="text-2xl font-extrabold text-white sm:text-3xl">14</div><div class="text-xs text-slate-200 sm:text-sm">отелей на сайте</div></div>'+
          '<div><div class="text-2xl font-extrabold text-white sm:text-3xl">12</div><div class="text-xs text-slate-200 sm:text-sm">экскурсий и туров</div></div>'+
          '<div><div class="text-2xl font-extrabold text-white sm:text-3xl">18</div><div class="text-xs text-slate-200 sm:text-sm">достопримечательностей</div></div>'+
        '</div>'+
      '</div>'+
    '</section>'+

    '<section class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">'+
      '<h2 class="mb-5 text-2xl font-bold text-slate-900 sm:text-3xl">Хабаровск — жемчужина Приамурья для вашего путешествия</h2>'+
      '<div class="space-y-4 text-base leading-relaxed text-slate-600">'+
      '<p>Хабаровск — один из крупнейших городов российского Дальнего Востока, раскинувшийся на высоком правом берегу могучего Амура. Город с более чем 165-летней историей сочетает купеческую архитектуру конца XIX века, советский монументализм и современные небоскрёбы.</p>'+
      '<p>Отдых в Хабаровске подходит абсолютно любому туристу. Любителям истории понравятся Успенский и Спасо-Преображенский соборы, краеведческий музей имени Гродекова и Амурский утёс. Ценители природы оценят экскурсии в Большехехцирский заповедник, туры на озеро Амут и рыбалку на Амуре.</p>'+
      '<p>Мы собрали проверенную информацию: актуальные цены на туры и номера, реальные отзывы туристов, подробные программы экскурсий и контакты лицензированных гидов. Начните планирование путешествия прямо сейчас!</p>'+
      '</div>'+
      '<button onclick="openContactModal(\'Бесплатная консультация\')" class="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-800 px-6 py-3.5 font-semibold text-white shadow-lg hover:bg-sky-700">Получить бесплатную консультацию →</button>'+
    '</section>'+

    '<section class="bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">'+
      '<h2 class="mb-10 text-center text-2xl font-bold text-slate-900 sm:text-3xl">Почему стоит выбрать отдых в Хабаровске</h2>'+
      '<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">'+advHtml+'</div>'+
    '</div></section>'+

    '<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">'+
      '<div class="mb-10 flex flex-wrap items-end justify-between gap-4"><div><h2 class="text-2xl font-bold text-slate-900 sm:text-3xl">Популярные отели Хабаровска</h2><p class="mt-2 text-slate-500">Бронирование лучших гостиниц города</p></div><a href="#/oteli" class="font-semibold text-sky-800 hover:underline">Все отели →</a></div>'+
      '<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">'+HOTELS.slice(0,3).map(hotelCardHtml).join("")+'</div>'+
    '</section>'+

    '<section class="bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">'+
      '<div class="mb-10 flex flex-wrap items-end justify-between gap-4"><div><h2 class="text-2xl font-bold text-slate-900 sm:text-3xl">Главные достопримечательности</h2><p class="mt-2 text-slate-500">Что обязательно стоит увидеть</p></div><a href="#/dostoprimechatelnosti" class="font-semibold text-sky-800 hover:underline">Все достопримечательности →</a></div>'+
      '<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">'+ATTRACTIONS.slice(0,3).map(attractionCardHtml).join("")+'</div>'+
    '</div></section>'+

    '<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">'+
      '<div class="mb-10 flex flex-wrap items-end justify-between gap-4"><div><h2 class="text-2xl font-bold text-slate-900 sm:text-3xl">Туры и экскурсии по краю</h2><p class="mt-2 text-slate-500">От обзорных прогулок до экспедиций на Шантарские острова</p></div><a href="#/tury" class="font-semibold text-sky-800 hover:underline">Все туры →</a></div>'+
      '<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">'+TOURS.slice(0,3).map(tourCardHtml).join("")+'</div>'+
    '</section>'+

    '<section class="bg-gradient-to-br from-sky-900 to-sky-700 py-16 text-center text-white"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">'+
      '<h2 class="text-2xl font-bold sm:text-3xl">Готовы отправиться в путешествие по Хабаровску?</h2>'+
      '<p class="mt-3 text-slate-100">Оставьте заявку — подберём отель, тур и гида под ваши пожелания бесплатно.</p>'+
      '<button onclick="openContactModal(\'Оставить заявку\')" class="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg hover:bg-orange-600">Оставить заявку →</button>'+
    '</div></section>'
 );
}
/* ===================== РОУТЕР ===================== */
var TITLES = {
 "":"Туризм в Хабаровске — отели, туры, экскурсии и гиды | Visit Khabarovsk",
 "o-gorode":"О Хабаровске — история, климат, транспорт | Visit Khabarovsk",
 "oteli":"Гостиницы и отели Хабаровска — бронирование | Visit Khabarovsk",
 "dostoprimechatelnosti":"Достопримечательности Хабаровска | Visit Khabarovsk",
 "tury":"Туры и экскурсии по Хабаровску и краю | Visit Khabarovsk",
 "gidy":"Услуги гидов в Хабаровске | Visit Khabarovsk",
 "kontakty":"Контакты и бронирование | Visit Khabarovsk",
 "blog":"Блог и новости туризма | Visit Khabarovsk",
 "faq":"Частые вопросы | Visit Khabarovsk",
 "galereya":"Фотогалерея Хабаровска | Visit Khabarovsk",
 "izbrannoe":"Избранное | Visit Khabarovsk",
 "politika":"Политика конфиденциальности | Visit Khabarovsk"
};

function render(){
  var hash = location.hash.replace(/^#\/?/,"");
  var parts = hash.split("/").filter(Boolean);
  var root = document.getElementById("khv-app");
  var html;

  if(parts.length===0){html = pageHome(); document.title = TITLES[""];}
  else if(parts[0]==="o-gorode"){html = pageAbout(); document.title = TITLES["o-gorode"];}
  else if(parts[0]==="oteli" && parts[1]){html = pageHotelDetail(parts[1]); var hh=HOTELS.filter(function(x){return x.id===parts[1];})[0]; document.title = hh ? hh.name+" — бронирование отеля в Хабаровске" : TITLES["oteli"];}
  else if(parts[0]==="oteli"){html = pageHotels(); document.title = TITLES["oteli"];}
  else if(parts[0]==="dostoprimechatelnosti" && parts[1]){html = pageAttractionDetail(parts[1]); var aa=ATTRACTIONS.filter(function(x){return x.id===parts[1];})[0]; document.title = aa ? aa.name+" — достопримечательность Хабаровска" : TITLES["dostoprimechatelnosti"];}
  else if(parts[0]==="dostoprimechatelnosti"){html = pageAttractions(); document.title = TITLES["dostoprimechatelnosti"];}
  else if(parts[0]==="tury" && parts[1]){html = pageTourDetail(parts[1]); var tt=TOURS.filter(function(x){return x.id===parts[1];})[0]; document.title = tt ? tt.name+" — заказать тур в Хабаровске" : TITLES["tury"];}
  else if(parts[0]==="tury"){html = pageTours(); document.title = TITLES["tury"];}
  else if(parts[0]==="gidy"){html = pageGuides(); document.title = TITLES["gidy"];}
  else if(parts[0]==="kontakty"){html = pageContacts(); document.title = TITLES["kontakty"];}
  else if(parts[0]==="blog" && parts[1]){html = pageBlogDetail(parts[1]); var bb=BLOG.filter(function(x){return x.id===parts[1];})[0]; document.title = bb ? bb.title+" — Visit Khabarovsk" : TITLES["blog"];}
  else if(parts[0]==="blog"){html = pageBlog(); document.title = TITLES["blog"];}
  else if(parts[0]==="faq"){html = pageFAQ(); document.title = TITLES["faq"];}
  else if(parts[0]==="galereya"){html = pageGallery(); document.title = TITLES["galereya"];}
  else if(parts[0]==="izbrannoe"){html = pageFavorites(); document.title = TITLES["izbrannoe"];}
  else if(parts[0]==="politika"){html = pagePrivacy(); document.title = TITLES["politika"];}
  else {html = pageNotFound();}

  root.innerHTML = html;
  window.scrollTo(0,0);
  updateFavCount();
  setupReveal();
  if(parts[0]==="tury" && !parts[1]){updateTourCalc();}
}

function setupReveal(){
  var els = document.querySelectorAll(".khv-reveal");
  if(!("IntersectionObserver" in window)){els.forEach(function(el){el.classList.add("khv-visible");}); return;}
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){entry.target.classList.add("khv-visible"); obs.unobserve(entry.target);}
   });
 }, {threshold:0.12});
  els.forEach(function(el){obs.observe(el);});
}

/* ===================== ВСПОМОГАТЕЛЬНЫЕ ВИДЖЕТЫ ===================== */
function backToTopCheck(){
  var btn = document.getElementById("khv-backtotop");
  if(!btn) return;
  btn.style.display = window.scrollY> 500 ?"flex" :"none";
}
window.addEventListener("scroll", backToTopCheck);
window.scrollToTop = function(){window.scrollTo({top:0,behavior:"smooth"});};

window.toggleChat = function(){document.getElementById("khv-chat-window").classList.toggle("hidden");};
window.sendChat = function(){
  var input = document.getElementById("khv-chat-input");
  var text = input.value.trim();
  if(!text) return;
  var box = document.getElementById("khv-chat-messages");
  box.innerHTML += '<div class="ml-auto max-w-[85%] rounded-2xl bg-sky-700 px-3 py-2 text-sm text-white" style="margin-left:auto;">'+text+'</div>';
  input.value ="";
  box.scrollTop = box.scrollHeight;
  setTimeout(function(){
    box.innerHTML += '<div class="max-w-[85%] rounded-2xl bg-slate-100 px-3 py-2 text-sm text-slate-700">Спасибо за вопрос! Наш менеджер свяжется с вами в ближайшее время.</div>';
    box.scrollTop = box.scrollHeight;
 }, 700);
};

/* ===================== ИНИЦИАЛИЗАЦИЯ ===================== */
function buildAppShell(){
  var root = document.getElementById("khv-root");
  root.innerHTML =
    '<div style="font-family:Roboto, \'Open Sans\', Arial, sans-serif;">'+
    '<header id="khv-navbar" class="fixed inset-x-0 top-0 z-50 bg-white/95 shadow-md backdrop-blur"></header>'+
    '<main id="khv-app" style="min-height:70vh;"></main>'+
    '<footer id="khv-footer" class="bg-slate-900 text-slate-300"></footer>'+
    '<button id="khv-backtotop" onclick="scrollToTop()" style="display:none;" class="fixed bottom-24 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-sky-800 text-white shadow-lg hover:bg-sky-700 md:bottom-6" aria-label="Наверх">↑</button>'+
    '<button onclick="toggleChat()" class="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-xl hover:bg-orange-600 text-2xl" aria-label="Чат">💬</button>'+
    '<div id="khv-chat-window" class="hidden fixed bottom-24 right-5 z-40 flex h-96 w-80 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">'+
      '<div class="bg-sky-800 px-4 py-3 text-sm font-semibold text-white">Онлайн-помощник Visit Khabarovsk</div>'+
      '<div id="khv-chat-messages" class="flex-1 space-y-2 overflow-y-auto p-3"><div class="max-w-[85%] rounded-2xl bg-slate-100 px-3 py-2 text-sm text-slate-700">Здравствуйте! 👋 Спросите про отели, туры или достопримечательности Хабаровска.</div></div>'+
      '<div class="flex items-center gap-2 border-t border-slate-100 p-2">'+
        '<input id="khv-chat-input" onkeydown="if(event.key===\'Enter\')sendChat()" placeholder="Напишите сообщение..." class="flex-1 rounded-full border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-500"/>'+
        '<button onclick="sendChat()" class="flex h-9 w-9 items-center justify-center rounded-full bg-sky-800 text-white hover:bg-sky-700">➤</button>'+
      '</div>'+
    '</div>'+
    '<div id="khv-modal" class="hidden fixed inset-0 z-[100] flex items-center justify-center p-4">'+
      '<div class="absolute inset-0 bg-slate-900/60" onclick="closeModal()"></div>'+
      '<div class="khv-modal-card relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8">'+
        '<button onclick="closeModal()" class="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200" aria-label="Закрыть">✕</button>'+
        '<h3 id="khv-modal-title" class="mb-5 pr-8 text-xl font-bold text-slate-900"></h3>'+
        '<div id="khv-modal-body"></div>'+
      '</div>'+
    '</div>'+
    '<div id="khv-lightbox" class="hidden fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/90 p-4">'+
      '<button onclick="closeLightbox()" class="absolute right-5 top-5 text-white/80 hover:text-white text-3xl" aria-label="Закрыть">✕</button>'+
      '<button onclick="lightboxNav(-1)" class="absolute left-3 text-white/80 hover:text-white sm:left-6 text-4xl" aria-label="Предыдущее фото">‹</button>'+
      '<img id="khv-lightbox-img" src="" alt="" class="max-h-[85vh] max-w-full rounded-lg object-contain"/>'+
      '<button onclick="lightboxNav(1)" class="absolute right-3 text-white/80 hover:text-white sm:right-6 text-4xl" aria-label="Следующее фото">›</button>'+
    '</div>'+
    '</div>';
}

function init(){
  buildAppShell();
  renderShell();
  render();
  window.addEventListener("hashchange", render);
}

if(document.readyState ==="loading"){
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

})();

(function(){
"use strict";

/* ===================== ДАННЫЕ ===================== */

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
  heroHome: "https://images.pexels.com/photos/20158431/pexels-photo-20158431.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
  heroAbout: "https://images.pexels.com/photos/29819862/pexels-photo-29819862.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
  heroHotels: "https://images.pexels.com/photos/31969409/pexels-photo-31969409.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
  heroTours: "https://images.pexels.com/photos/27522408/pexels-photo-27522408.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
  heroGuides: "https://images.pexels.com/photos/17060523/pexels-photo-17060523.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
  heroContacts: "https://images.pexels.com/photos/14011664/pexels-photo-14011664.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000"
};

function pick(arr,i){ return arr[((i % arr.length)+arr.length)%arr.length]; }
function pool(name,i,count){ count=count||4; var out=[]; for(var k=0;k<count;k++){ out.push(pick(IMAGES[name],i+k)); } return out; }
function hotelImgs(i){ return [pick(IMAGES.hotelExteriors,i),pick(IMAGES.hotelRooms,i),pick(IMAGES.hotelLobbies,i),pick(IMAGES.hotelPools,i)]; }
function money(n){ return n.toLocaleString("ru-RU")+" ₽"; }

var HOTELS = [
  {id:"intourist",name:"Гранд Отель «Интурист»",stars:4,address:"г. Хабаровск, Амурский бульвар, 2",rating:4.7,reviewsCount:1500,images:hotelImgs(0),
   short:"Классический бизнес-отель с видом на Амур в самом центре города.",
   description:"Один из старейших и наиболее узнаваемых отелей Хабаровска, «Интурист» принимает гостей с середины прошлого века и по праву считается визитной карточкой города. Отель расположен на Амурском бульваре, в пешей доступности от набережной, площади Ленина и главных пешеходных улиц. За последние годы гостиница прошла масштабную реконструкцию: номера оформлены в современном стиле, сохранив при этом атмосферу представительского отеля советской эпохи. Из окон верхних этажей открывается панорамный вид на реку Амур и городской парк. «Интурист» традиционно выбирают деловые путешественники, участники конференций и туристические группы — благодаря конференц-залу, ресторану европейской и азиатской кухни и опытному персоналу, готовому организовать трансфер, экскурсию или визовую поддержку для иностранных гостей.",
   amenities:["Wi-Fi бесплатно","Ресторан","Конференц-зал","Парковка","Трансфер из аэропорта","Фитнес-зал","Экскурсионное бюро","Круглосуточная стойка регистрации"],
   rooms:[{name:"Стандарт",price:6457,desc:"Уютный номер 20 м² с двуспальной кроватью или twin"},{name:"Комфорт с видом на Амур",price:8900,desc:"Номер 26 м² с панорамным окном на реку"},{name:"Люкс",price:13500,desc:"Апартаменты 45 м² с гостиной зоной и мини-баром"}],
   reviews:[{author:"Дмитрий",date:"сентябрь 2025",rating:5,text:"Отличное расположение — до набережной 5 минут пешком. Номер чистый, завтрак разнообразный."},{author:"Ирина",date:"июль 2025",rating:4,text:"Немного слышно шум с бульвара, но в целом отель понравился, персонал приветливый."},{author:"Вэй (Китай)",date:"май 2025",rating:5,text:"Very good hotel for business trips, staff speaks English, close to river view."}]},
  {id:"amur",name:"Парк-отель «Амур»",stars:4,address:"г. Хабаровск, ул. Ленина, 29",rating:5,reviewsCount:1078,images:hotelImgs(1),
   short:"Уютный отель в тихом центральном квартале с домашней атмосферой.",
   description:"«Амур» — камерный отель на тихой улице Ленина, в нескольких минутах ходьбы от площади Ленина и главной пешеходной улицы Муравьёва-Амурского. Гостиница подойдёт тем, кто ценит спокойствие и внимательное отношение персонала: здесь всего несколько десятков номеров, поэтому администраторы знают гостей практически по именам. Интерьеры выполнены в тёплых древесных тонах, а на завтрак подают домашнюю выпечку и блюда дальневосточной кухни. Отель регулярно занимает верхние строчки в рейтингах сервисов бронирования благодаря соотношению цены и качества и удобному расположению.",
   amenities:["Wi-Fi бесплатно","Завтрак включён","Парковка во дворе","Трансфер по запросу","Прачечная","Номера для некурящих"],
   rooms:[{name:"Стандарт",price:5200,desc:"Компактный номер 18 м² с современным ремонтом"},{name:"Улучшенный",price:7667,desc:"Номер 24 м² с зоной отдыха"},{name:"Семейный люкс",price:11200,desc:"Двухкомнатный номер для семьи"}],
   reviews:[{author:"Анастасия",date:"октябрь 2025",rating:5,text:"Лучший отель по соотношению цена/качество в городе! Завтраки очень вкусные."},{author:"Павел",date:"август 2025",rating:5,text:"Тихо, чисто, персонал очень отзывчивый."},{author:"Ольга",date:"март 2025",rating:4,text:"Небольшие номера, но всё необходимое есть, расположение отличное."}]},
  {id:"ruma",name:"Отель «Ruma»",stars:4,address:"г. Хабаровск, Пионерская ул., 2Б",rating:5,reviewsCount:282,images:hotelImgs(2),
   short:"Новый дизайн-отель с минималистичными интерьерами и высоким сервисом.",
   description:"«Ruma» — один из самых молодых отелей Хабаровска, открывшийся в формате современного дизайн-отеля. Здесь сделан акцент на лаконичных скандинавских интерьерах, качественном текстиле и продуманной эргономике номеров. Отель ориентирован на требовательных гостей: индивидуальных туристов, пары и путешественников, ищущих альтернативу традиционным гостиницам. На ресепшене работает служба консьержей, которая поможет составить маршрут по городу.",
   amenities:["Wi-Fi бесплатно","Кондиционер","Мини-кухня в номерах","Консьерж-сервис","Парковка","Прокат велосипедов"],
   rooms:[{name:"Comfort",price:8700,desc:"Стильный номер 22 м²"},{name:"Superior",price:10900,desc:"Номер 28 м² с балконом"},{name:"Apartment",price:15900,desc:"Апартаменты с кухней"}],
   reviews:[{author:"Кристина",date:"ноябрь 2025",rating:5,text:"Очень стильный отель, как в Европе!"},{author:"Артём",date:"сентябрь 2025",rating:5,text:"Понравилась мини-кухня в номере."},{author:"Liu Yang",date:"июнь 2025",rating:5,text:"Modern and clean, best design hotel in Khabarovsk so far."}]},
  {id:"enigma",name:"Отель «Энигма»",stars:4,address:"г. Хабаровск, Ленинградская ул., 73А",rating:4.8,reviewsCount:469,images:hotelImgs(3),
   short:"Современный отель с рестораном и залом для мероприятий.",
   description:"Отель «Энигма» сочетает функциональность бизнес-класса и уют семейной гостиницы. Гостиница обладает одним из лучших в городе банкетных залов, поэтому здесь часто останавливаются участники свадебных торжеств и конференций. Ресторан отеля предлагает блюда паназиатской и европейской кухни, а также детское меню.",
   amenities:["Wi-Fi бесплатно","Ресторан","Банкетный зал","Парковка","Детская комната","Room service"],
   rooms:[{name:"Стандарт",price:6798,desc:"Номер 20 м²"},{name:"Бизнес",price:8500,desc:"Номер повышенной комфортности"},{name:"Люкс",price:12800,desc:"Просторный номер с гостиной"}],
   reviews:[{author:"Наталья",date:"октябрь 2025",rating:5,text:"Отмечали здесь семейное торжество — всё прошло на высшем уровне!"},{author:"Игорь",date:"август 2025",rating:4,text:"Хороший отель для командировки."},{author:"Евгения",date:"апрель 2025",rating:5,text:"Очень вкусно готовят в ресторане."}]},
  {id:"lotos",name:"Отель «Лотос»",stars:4,address:"г. Хабаровск, Уссурийский бульвар, 9С1",rating:4.7,reviewsCount:141,images:hotelImgs(4),
   short:"Тихий отель рядом с парком, подходит для семейного отдыха.",
   description:"«Лотос» расположен в зелёной части города на Уссурийском бульваре — одной из самых приятных для прогулок улиц Хабаровска. Отель отличается уютной атмосферой: светлые номера, приветливый персонал и вкусные завтраки. Пользуется популярностью у семей с детьми и пар, планирующих спокойный отдых.",
   amenities:["Wi-Fi бесплатно","Завтрак включён","Парковка","Прокат велосипедов","Номера для некурящих","Трансфер"],
   rooms:[{name:"Стандарт",price:5500,desc:"Классический номер 18 м²"},{name:"Комфорт",price:7500,desc:"Номер с видом на бульвар"},{name:"Семейный",price:10200,desc:"Двухкомнатный номер для 4 человек"}],
   reviews:[{author:"Светлана",date:"июль 2025",rating:5,text:"Прекрасное место для отдыха с детьми."},{author:"Максим",date:"май 2025",rating:4,text:"Немного удалён от центра, но тишина компенсирует это."},{author:"Татьяна",date:"февраль 2025",rating:5,text:"Очень вкусные завтраки, тёплый персонал."}]},
  {id:"ali",name:"Отель «Али»",stars:4,address:"г. Хабаровск, ул. Мухина, 17",rating:4.5,reviewsCount:337,images:hotelImgs(5),
   short:"Бюджетный вариант «4 звезды» с полным набором удобств.",
   description:"Отель «Али» — пример того, как можно совместить доступную цену и достойный уровень сервиса. Гостиница находится в спальном районе, до достопримечательностей можно добраться на транспорте за 15–20 минут. Часто выбирают вахтовики и командированные специалисты благодаря гибкой системе длительного проживания.",
   amenities:["Wi-Fi бесплатно","Кондиционер","Холодильник в номере","Парковка","Кухня общего пользования","Скидки при длительном проживании"],
   rooms:[{name:"Эконом",price:3200,desc:"Компактный номер"},{name:"Стандарт",price:5000,desc:"Номер 18 м²"},{name:"Полулюкс",price:6800,desc:"Номер увеличенной площади"}],
   reviews:[{author:"Роман",date:"сентябрь 2025",rating:4,text:"Отличное соотношение цены и качества для длительного проживания."},{author:"Юлия",date:"июнь 2025",rating:5,text:"Чисто, тихо, персонал помогает во всём."},{author:"Сергей",date:"март 2025",rating:4,text:"Далековато от центра, зато цена приятно радует."}]},
  {id:"khabarovsk",name:"Гостиница «Хабаровск»",stars:3,address:"г. Хабаровск, ул. Муравьёва-Амурского, 33",rating:4.2,reviewsCount:612,images:hotelImgs(6),
   short:"Историческая гостиница советской эпохи в самом сердце города.",
   description:"Гостиница «Хабаровск» — одна из старейших городских гостиниц, работающая с советских времён. Здание расположено на главной пешеходной улице города, в нескольких шагах от площади Ленина. Номера прошли косметический ремонт, мебель и сантехника заменены на современные аналоги.",
   amenities:["Wi-Fi бесплатно","Кафе","Парковка","Трансфер по запросу","Обмен валюты","Круглосуточная стойка регистрации"],
   rooms:[{name:"Эконом",price:2800,desc:"Простой номер"},{name:"Стандарт",price:4200,desc:"Номер с собственной ванной"},{name:"Люкс",price:6900,desc:"Номер с видом на улицу"}],
   reviews:[{author:"Владимир",date:"октябрь 2025",rating:4,text:"Расположение просто идеальное, всё рядом."},{author:"Екатерина",date:"июль 2025",rating:4,text:"Хорошая гостиница для короткой поездки."},{author:"Алексей",date:"апрель 2025",rating:5,text:"За эти деньги в центре города — отличный вариант."}]},
  {id:"amazonka",name:"Гостиница «Амазонка»",stars:3,address:"г. Хабаровск, ул. Дикопольцева, 26",rating:4.3,reviewsCount:258,images:hotelImgs(7),
   short:"Компактный отель для тех, кто ищет комфорт без переплаты.",
   description:"«Амазонка» — небольшая уютная гостиница в спокойном районе недалеко от центра. Внимательное отношение к каждому гостю и разумные цены. Во всех номерах новые кровати и качественное бельё, на завтрак — шведский стол.",
   amenities:["Wi-Fi бесплатно","Завтрак за доплату","Парковка","Кондиционер","Номера для некурящих"],
   rooms:[{name:"Стандарт",price:3500,desc:"Уютный номер"},{name:"Комфорт",price:4800,desc:"Номер с диваном"},{name:"Люкс",price:7200,desc:"Номер с зоной для переговоров"}],
   reviews:[{author:"Марина",date:"август 2025",rating:4,text:"Хорошая гостиница за свои деньги."},{author:"Денис",date:"май 2025",rating:4,text:"Понравилось расположение — рядом остановка."},{author:"Виктория",date:"февраль 2025",rating:5,text:"Приятно удивили внимательным персоналом."}]},
  {id:"vostok",name:"Гостиница «Восток»",stars:3,address:"г. Хабаровск, Уссурийский бульвар, 5",rating:4.1,reviewsCount:420,images:hotelImgs(8),
   short:"Гостиница среднего класса с многолетней историей.",
   description:"Гостиница «Восток» — проверенный годами вариант размещения. Здание рядом с зелёным Уссурийским бульваром — тишина и свежий воздух в центре города. Разные категории номеров подойдут и для командировки, и для отпуска с семьёй.",
   amenities:["Wi-Fi бесплатно","Прачечная","Парковка","Сувенирный магазин","Кафе","Экскурсионные услуги"],
   rooms:[{name:"Эконом",price:3000,desc:"Бюджетный номер"},{name:"Стандарт",price:4500,desc:"Номер с современным ремонтом"},{name:"Полулюкс с кухней",price:6500,desc:"Номер с мини-кухней"}],
   reviews:[{author:"Андрей",date:"сентябрь 2025",rating:4,text:"Хороший бюджетный вариант."},{author:"Людмила",date:"июнь 2025",rating:4,text:"Останавливались с семьёй, всё понравилось."},{author:"Иван",date:"март 2025",rating:4,text:"Рядом парк, приятно гулять по вечерам."}]},
  {id:"dalnevostochny",name:"Гостиница «Дальневосточный»",stars:3,address:"г. Хабаровск, ул. Карла Маркса, 47",rating:4.0,reviewsCount:305,images:hotelImgs(9),
   short:"Гостиница в двух шагах от делового квартала.",
   description:"«Дальневосточный» — гостиница делового формата рядом с ключевыми административными зданиями. До площади Ленина и набережной отсюда 10–15 минут пешком. Есть переговорная комната и круглосуточный ресепшен.",
   amenities:["Wi-Fi бесплатно","Переговорная комната","Парковка","Круглосуточная стойка регистрации","Кафе","Трансфер"],
   rooms:[{name:"Стандарт",price:4000,desc:"Номер с рабочим столом"},{name:"Бизнес",price:5800,desc:"Номер повышенной комфортности"},{name:"Люкс",price:8200,desc:"Номер с гостиной зоной"}],
   reviews:[{author:"Григорий",date:"октябрь 2025",rating:4,text:"Удобно для командировки."},{author:"Алина",date:"июль 2025",rating:4,text:"Хороший сервис, номера скромные, но опрятные."},{author:"Тимур",date:"апрель 2025",rating:4,text:"Отличный вариант для деловых поездок."}]},
  {id:"priamursky",name:"Гостиница «Приамурский»",stars:3,address:"г. Хабаровск, ул. Шеронова, 56",rating:4.2,reviewsCount:198,images:hotelImgs(10),
   short:"Спокойная гостиница рядом с драматическим театром.",
   description:"Гостиница «Приамурский» расположена рядом с театром драмы и городским дендрарием. Отличный выбор для культурной программы. Небольшое количество номеров, тёплый декор и внимательный персонал.",
   amenities:["Wi-Fi бесплатно","Кафе","Парковка","Завтрак включён","Номера для некурящих"],
   rooms:[{name:"Стандарт",price:3800,desc:"Уютный номер"},{name:"Комфорт",price:5200,desc:"Номер с доп. удобствами"},{name:"Люкс",price:7800,desc:"Просторный номер"}],
   reviews:[{author:"Наталия",date:"август 2025",rating:5,text:"Очень понравилось расположение рядом с театром."},{author:"Константин",date:"май 2025",rating:4,text:"Хорошая гостиница, вкусные завтраки."},{author:"Виталий",date:"январь 2025",rating:4,text:"Простая, но уютная гостиница."}]},
  {id:"ariran",name:"Отель «Ариран»",stars:3,address:"г. Хабаровск, Ленинградская ул., 22",rating:4.4,reviewsCount:176,images:hotelImgs(11),
   short:"Отель с азиатским колоритом и корейской кухней.",
   description:"«Ариран» — отель с ярко выраженным восточным характером: интерьеры вдохновлены корейской эстетикой, при гостинице работает ресторан аутентичной корейской кухни. Номера компактные, но функциональные, с тёплыми полами.",
   amenities:["Wi-Fi бесплатно","Ресторан корейской кухни","Парковка","Тёплые полы","Room service"],
   rooms:[{name:"Стандарт",price:4200,desc:"Компактный номер в восточном стиле"},{name:"Комфорт",price:5900,desc:"Номер с тёплым полом"},{name:"Люкс",price:8500,desc:"Номер с гостиной зоной"}],
   reviews:[{author:"Ким Су Джин",date:"сентябрь 2025",rating:5,text:"정말 좋은 호텔이에요! Отличная корейская кухня."},{author:"Анна",date:"июнь 2025",rating:4,text:"Очень необычный колорит для Хабаровска."},{author:"Богдан",date:"март 2025",rating:4,text:"Понравилась атмосфера, номера небольшие."}]},
  {id:"victoria",name:"Гостиница «Виктория»",stars:3,address:"г. Хабаровск, ул. Волочаевская, 89",rating:4.3,reviewsCount:214,images:hotelImgs(12),
   short:"Семейная гостиница рядом с железнодорожным вокзалом.",
   description:"«Виктория» — удобный вариант для тех, кто прибывает поездом: гостиница в 10 минутах ходьбы от вокзала. Персонал поможет с хранением багажа, ранним заездом и поздним выездом.",
   amenities:["Wi-Fi бесплатно","Хранение багажа","Ранний заезд/поздний выезд","Парковка","Кафе","Трансфер на вокзал"],
   rooms:[{name:"Эконом",price:2900,desc:"Простой номер"},{name:"Стандарт",price:4300,desc:"Номер с современным ремонтом"},{name:"Полулюкс",price:6200,desc:"Номер увеличенной площади"}],
   reviews:[{author:"Ольга",date:"октябрь 2025",rating:4,text:"Очень удобно — рядом с вокзалом."},{author:"Егор",date:"июль 2025",rating:4,text:"Хорошая гостиница для транзита."},{author:"Валентина",date:"апрель 2025",rating:5,text:"Персонал помог с багажом и такси, спасибо!"}]}
];

var ATTRACTIONS = [
  {id:"utes",name:"Амурский утёс",category:"Историческое место",images:pool("embankments",0,3),address:"ул. Шевченко, 15",hours:"10:00–20:00, ежедневно",price:"Вход на смотровую площадку — свободный",
   description:"Амурский утёс — негласный символ Хабаровска и одно из мест, с которых, по легенде, началось освоение этих земель русскими первопроходцами. Скалистый берег возвышается прямо над Амуром, откуда открывается один из самых красивых видов на реку, мост и остров Большой Уссурийский. С сентября 2024 года здесь открыт визит-центр Хабаровского края, где можно получить туристические карты и купить сувениры. Летом на утёсе часто проходят свадебные фотосессии и городские праздники, а зимой отсюда открывается вид на широкую белоснежную ленту замёрзшего Амура.",
   tips:"Лучшее время для посещения — закат. Возьмите тёплую куртку: у реки почти всегда ветрено."},
  {id:"naberezhnaya",name:"Набережная адмирала Невельского",category:"Прогулочная зона",images:pool("embankments",1,3),address:"от Амурского утёса до Речного вокзала",hours:"круглосуточно",price:"Бесплатно",
   description:"Набережная адмирала Невельского — центральная прогулочная артерия Хабаровска, растянувшаяся вдоль правого берега Амура. Благоустроенная зона включает широкий променад, велодорожки, детские и спортивные площадки, летние кафе. Названа в честь Геннадия Невельского — исследователя, доказавшего судоходность устья Амура. Летом здесь работает городской пляж, а зимой заливают каток и открывают ярмарку с глинтвейном.",
   tips:"Прокат велосипедов и самокатов работает с мая по октябрь. Вечером стоит взять лёгкую куртку."},
  {id:"lenin-square",name:"Площадь Ленина",category:"Центральная площадь",images:pool("squares",0,3),address:"пл. Ленина",hours:"круглосуточно",price:"Бесплатно",
   description:"Площадь Ленина — главная площадь Хабаровска и точка отсчёта большинства туристических маршрутов. Здесь проходят все крупные городские праздники. В центре площади — памятник Владимиру Ленину, по периметру — здания администрации края и фонтаны. Зимой на площади заливают один из крупнейших в городе катков и устанавливают главную городскую ёлку.",
   tips:"Зимой приходите вечером — подсветка фонтанов и ёлки создаёт открыточные виды для фото."},
  {id:"uspensky",name:"Успенский собор",category:"Религиозный памятник",images:pool("cathedrals",0,3),address:"пл. Соборная, 1",hours:"07:00–20:00, ежедневно",price:"Вход свободный",
   description:"Первый каменный храм Хабаровска был построен в 1886 году. В советское время собор был разрушен, возрождение началось в 1994 году: архитекторы создали новый проект — стройное пятиглавое здание, сохранившее лишь отдельные элементы прежней архитектуры. Строительство завершилось в 2002 году, и сегодня Успенский собор — один из главных архитектурных символов города.",
   tips:"Наденьте закрытую одежду при посещении храма. Лучший ракурс для фото — с набережной."},
  {id:"spaso-preobrazhensky",name:"Спасо-Преображенский кафедральный собор",category:"Религиозный памятник",images:pool("cathedrals",3,3),address:"ул. Тургенева, 24",hours:"08:00–21:00, ежедневно",price:"Вход свободный",
   description:"Один из крупнейших православных храмов Дальнего Востока и третий по величине в России. Собор возведён в 2001 году в память о жертвах политических репрессий. Высота центрального купола — почти 95 метров, храм вмещает несколько тысяч прихожан. Внутреннее убранство украшено масштабными фресками московских художников.",
   tips:"Поднимитесь на смотровую площадку рядом с собором — один из лучших видов на Амур в городе."},
  {id:"grafsky-pond",name:"Графский пруд",category:"Парковая зона",images:pool("parks",0,3),address:"ул. Тургенева / парк «Динамо»",hours:"круглосуточно",price:"Бесплатно",
   description:"Живописный искусственный водоём в центре Хабаровска, окружённый одноимённым сквером. Популярное место семейного отдыха: дорожки для прогулок, беседки, летом можно взять напрокат катамаран. Особенно красив осенью, когда деревья окрашиваются в жёлто-багряные тона.",
   tips:"Возьмите с собой хлеб — в пруду живут утки."},
  {id:"dynamo-park",name:"Парк «Динамо»",category:"Парк культуры и отдыха",images:pool("parks",1,3),address:"ул. Гоголя, 1",hours:"09:00–22:00, ежедневно",price:"Вход бесплатный, аттракционы от 150 ₽",
   description:"Старейший парк развлечений Хабаровска, заложенный в 1930-х годах. Классические аттракционы: колесо обозрения, карусели, американские горки, летний кинотеатр. Зимой часть территории превращается в каток с прокатом коньков.",
   tips:"По будням в парке значительно меньше людей — хороший вариант для спокойной прогулки."},
  {id:"muravyov-park",name:"Парк им. Н. Н. Муравьёва-Амурского",category:"Парк культуры и отдыха",images:pool("parks",2,3),address:"Амурский бульвар / набережная Амура",hours:"круглосуточно",price:"Бесплатно",
   description:"Старейший общественный парк Хабаровска раскинулся на берегу Амура и занимает около 79 гектаров. Разбит в конце XIX века, носит имя первого генерал-губернатора Восточной Сибири Николая Муравьёва-Амурского. Здесь проложены аллеи для прогулок, установлены памятники, регулярно проходят концерты и фестивали.",
   tips:"У памятника Муравьёву-Амурскому — красивый вид на изгиб Амура."},
  {id:"grodekov-museum",name:"Хабаровский краевой музей им. Н. И. Гродекова",category:"Музей",images:pool("museums",0,3),address:"ул. Шевченко, 11",hours:"вт–вс 10:00–18:00, пн — выходной",price:"Взрослый билет — от 300 ₽, льготный — от 150 ₽",
   description:"Один из старейших и крупнейших музеев Дальнего Востока, основанный в 1894 году. В экспозиции — материалы по истории освоения Приамурья, этнографии коренных народов, богатая коллекция флоры и фауны, включая чучело амурского тигра. Историческое здание в псевдорусском стиле признано памятником архитектуры.",
   tips:"Планируйте на осмотр не менее 1,5–2 часов. По выходным лучше приходить утром."},
  {id:"amur-bridge",name:"Мост через Амур",category:"Инженерное сооружение",images:pool("embankments",2,2),address:"Транссибирская магистраль, южная окраина города",hours:"смотровая площадка — круглосуточно",price:"Бесплатно",
   description:"Крупнейший мостовой переход Транссибирской магистрали, который современники называли «амурским чудом». Первый мост построен в 1916 году и был самым длинным мостом в Европе и Азии. На набережной есть музей истории моста под открытым небом с подлинными фермами старого моста.",
   tips:"Музей истории Амурского моста на набережной — обязательная остановка для любителей инженерии."},
  {id:"komsomolskaya-square",name:"Комсомольская площадь",category:"Историческая площадь",images:pool("squares",1,2),address:"пересечение ул. Муравьёва-Амурского и набережной",hours:"круглосуточно",price:"Бесплатно",
   description:"Одна из старейших площадей Хабаровска, примыкающая к набережной Амура. Здесь расположен мемориал героям Гражданской войны и Вечный огонь. Архитектурный ансамбль формируют здания конца XIX — начала XX века.",
   tips:"Совместите с прогулкой по соседней Соборной площади и набережной."},
  {id:"amurarium",name:"Музей-аквариум «Рыбы Амура»",category:"Музей",images:pool("museums",1,3),address:"б-р Амурский, 13а",hours:"11:00–17:00, выходные — пн и вт",price:"Взрослый — 260 ₽, льготный — 160 ₽",
   description:"Уникальный музей-аквариум, посвящённый пресноводным обитателям Амура. Более 90 видов рыб — от карпов и окуней до редких видов из Красной книги. Три зала с крупными аквариумами, регулярные тематические экскурсии для детей и взрослых.",
   tips:"По выходным лучше покупать билеты заранее онлайн."},
  {id:"circus",name:"Хабаровский государственный цирк",category:"Развлечения",images:pool("squares",2,1).concat(pool("parks",4,1)),address:"ул. Краснореченская, 102",hours:"10:00–18:30, по расписанию",price:"От 500 ₽ за билет",
   description:"История цирка началась в начале XX века с передвижного шапито. Современное здание построено в 2001 году в парке имени Юрия Гагарина. Яркие шоу с акробатами, жонглёрами и дрессированными животными.",
   tips:"Билеты на популярные программы стоит покупать заранее."},
  {id:"art-museum",name:"Дальневосточный художественный музей",category:"Музей",images:pool("museums",2,3),address:"ул. Шевченко, 7",hours:"вт–вс 10:00–18:00, пт до 20:00",price:"Взрослый — 300 ₽",
   description:"Крупнейшее художественное собрание региона, основанное в 1931 году. Русская иконопись, полотна передвижников, произведения западноевропейского искусства и современное искусство Дальнего Востока. Регулярные выставки всероссийского уровня.",
   tips:"По пятницам музей работает до 20:00 — удобно посетить вечером."},
  {id:"tihaya-zavod",name:"Городской пруд «Тихая заводь»",category:"Природная зона",images:pool("parks",3,2),address:"район Индустриального округа",hours:"круглосуточно",price:"Бесплатно",
   description:"Живописный природный уголок на окраине Хабаровска, популярный у рыбаков и любителей прогулок. Пруд окружён смешанным лесом, берега обустроены беседками и мангальными зонами. Особенно красив на рассвете и золотой осенью.",
   tips:"Возьмите средство от комаров в тёплое время года."},
  {id:"arboretum",name:"Дендрарий им. А. И. Лукашова",category:"Ботанический сад",images:pool("parks",4,2),address:"ул. Волочаевская, 71",hours:"09:00–18:00, ежедневно",price:"Взрослый билет — от 150 ₽",
   description:"Старейший ботанический сад Хабаровска, заложенный в 1895 году. Более 800 видов деревьев и кустарников, включая экзотические растения. Особенно красив весной в период цветения и осенью в золотую пору.",
   tips:"Лучшее время для посещения — конец мая и конец сентября."},
  {id:"gagarin-park",name:"Центральный парк им. Ю. А. Гагарина",category:"Парк культуры и отдыха",images:pool("parks",5,2),address:"ул. Краснореченская, 102",hours:"09:00–22:00, ежедневно",price:"Вход бесплатный",
   description:"Крупная зона отдыха с аттракционами, зелёными аллеями и спортплощадками. На территории — Хабаровский цирк, колесо обозрения и детские городки. Летом здесь проходят фестивали и ярмарки.",
   tips:"По выходным проходят бесплатные детские мастер-классы."},
  {id:"river-station",name:"Речной вокзал Хабаровска",category:"Историческое здание",images:pool("embankments",0,2),address:"наб. адмирала Невельского, 1",hours:"круглосуточно (навигация — май-октябрь)",price:"Речные прогулки — от 600 ₽",
   description:"Здание в стиле советского неоклассицизма со шпилем, построенное в 1958 году. В навигационный период отсюда отправляются теплоходы и «Метеоры» на остров Большой Уссурийский и в Фуюань (КНР). С террасы открывается один из лучших видов на мост через Амур.",
   tips:"Билеты на речные прогулки лучше бронировать заранее в сезон отпусков."}
];

var TOURS = [
  {id:"obzornaya-khabarovsk",name:"Обзорная экскурсия «Хабаровск за один день»",images:pool("squares",0,4),duration:"4 часа",groupSize:"до 15 человек",price:2200,priceNote:"за человека, дети до 7 лет — бесплатно",difficulty:"Лёгкий",dates:"ежедневно, по запросу",
   short:"Знакомство с главными достопримечательностями города на автобусе и пешком.",
   program:[{title:"09:00 — Площадь Ленина",text:"Встреча группы, знакомство с историей города."},{title:"10:00 — Соборная площадь",text:"Осмотр Успенского собора."},{title:"11:00 — Амурский утёс и набережная",text:"Смотровая площадка, визит-центр."},{title:"12:30 — Комсомольская площадь",text:"Мемориал героям Гражданской войны."},{title:"13:00 — Завершение",text:"Свободное время на пешеходной улице."}],
   included:["Услуги гида","Транспортное обслуживание","Входные билеты на смотровые площадки"],excluded:["Питание","Личные расходы"],toBring:["Удобная обувь","Тёплая одежда в межсезонье","Фотоаппарат"]},
  {id:"utes-naberezhnaya",name:"Тур «Амурский утёс и набережная на закате»",images:pool("embankments",0,3),duration:"2,5 часа",groupSize:"до 12 человек",price:1500,priceNote:"за человека",difficulty:"Лёгкий",dates:"ежедневно, время подбирается под закат",
   short:"Камерная вечерняя прогулка по знаковым видовым точкам города.",
   program:[{title:"Сбор группы",text:"Встреча на площади Ленина."},{title:"Прогулка к утёсу",text:"Путь через парк Муравьёва-Амурского."},{title:"Амурский утёс",text:"Смотровая площадка, фотопауза на закате."},{title:"Набережная Невельского",text:"Прогулка вдоль реки."}],
   included:["Услуги гида","Входной билет в визит-центр"],excluded:["Питание","Транспорт (маршрут пешеходный)"],toBring:["Удобная обувь","Ветровка","Термос с чаем"]},
  {id:"komsomolsk-tour",name:"Тур выходного дня в Комсомольск-на-Амуре",images:pool("museums",0,4),duration:"2 дня / 1 ночь",groupSize:"10–20 человек",price:12500,priceNote:"за человека, двухместное размещение",difficulty:"Средний",dates:"по субботам, май — октябрь",
   short:"Поездка в город юности с посещением набережной, музеев и завода авиастроения.",
   program:[{title:"День 1. Утро",text:"Выезд на автобусе/поезде «Комсомольский экспресс»."},{title:"День 1. Днём",text:"Обзорная экскурсия: площадь Юности, набережная."},{title:"День 1. Вечер",text:"Музей изобразительных искусств, ужин."},{title:"День 2. Утро",text:"Экспоцентр КнААЗ."},{title:"День 2. Днём",text:"Обед, отправление в Хабаровск."}],
   included:["Проезд туда-обратно","Проживание в отеле","Завтрак","Услуги гида","Входные билеты"],excluded:["Обед и ужин","Личные расходы"],toBring:["Документы","Удобная обувь","Сменную одежду"]},
  {id:"amut-lake",name:"Двухдневный тур на озеро Амут с глэмпингом",images:pool("natureLakes",0,4),duration:"2 дня / 1 ночь",groupSize:"6–16 человек",price:18000,priceNote:"за человека, дети до 7 лет — 16 000 ₽",difficulty:"Средний, тропа 3 км",dates:"июнь — сентябрь",
   short:"Путешествие к одному из самых красивых горных озёр Хабаровского края.",
   program:[{title:"День 1. Дорога",text:"Выезд, трансфер в район Комсомольска-на-Амуре."},{title:"День 1. Озеро Амут",text:"Размещение в глэмпинге, купание."},{title:"День 1. Вечер",text:"Ужин на костре, легенды озера."},{title:"День 2. Утро",text:"Рассветная фотопрогулка, завтрак."},{title:"День 2. Возвращение",text:"Смотровая точка, обед, отправление."}],
   included:["Трансфер","Проживание в глэмпинге","Трёхразовое питание","Услуги гида","Прокат снаряжения"],excluded:["Личное снаряжение","Страховка"],toBring:["Тёплые вещи","Дождевик","Треккинговая обувь"]},
  {id:"zaimka-dersu",name:"Экскурсия в этнографический комплекс «Заимка Дерсу»",images:pool("parks",2,4),duration:"5 часов",groupSize:"до 20 человек",price:3200,priceNote:"за человека, включая мастер-класс",difficulty:"Лёгкий",dates:"ежедневно, кроме понедельника",
   short:"Музей под открытым небом с реконструкцией быта коренных народов Приамурья.",
   program:[{title:"Встреча группы",text:"Трансфер до этнографического комплекса."},{title:"Экскурсия по усадьбе",text:"Жилища нанайцев и ульчей."},{title:"Мастер-класс",text:"Роспись оберега или плетение из бересты."},{title:"Дегустация",text:"Блюда традиционной кухни."}],
   included:["Транспорт","Услуги гида","Мастер-класс","Дегустация"],excluded:["Дополнительные сувениры"],toBring:["Удобная одежда"]},
  {id:"fishing-amur",name:"Рыболовный тур на Амуре",images:pool("fishing",0,4),duration:"1 день (8 часов)",groupSize:"до 6 человек",price:7500,priceNote:"за человека, аренда снастей включена",difficulty:"Лёгкий/средний",dates:"май — октябрь",
   short:"Рыбалка на моторной лодке с опытным егерем.",
   program:[{title:"07:00 — Сбор группы",text:"Встреча на пристани, инструктаж."},{title:"07:30 — Выход на воду",text:"Переход к рыболовным местам."},{title:"08:00–14:00 — Рыбалка",text:"Ловля сазана, сома, щуки."},{title:"14:00 — Уха на берегу",text:"Приготовление ухи из улова."},{title:"15:00 — Возвращение",text:"Трансфер в город."}],
   included:["Аренда лодки и снастей","Услуги егеря","Уха и чай","Спасательные жилеты"],excluded:["Алкогольные напитки"],toBring:["Одежда по погоде","Головной убор","Солнцезащитные очки"]},
  {id:"dog-sled",name:"Зимний тур «Собачьи упряжки»",images:pool("dogSledding",0,4),duration:"3 часа",groupSize:"до 10 человек",price:4500,priceNote:"за человека, катание 20 минут в стоимости",difficulty:"Лёгкий",dates:"декабрь — март, по выходным",
   short:"Катание на упряжке хаски по заснеженному лесу под Хабаровском.",
   program:[{title:"Трансфер",text:"Выезд на питомник ездовых собак."},{title:"Знакомство с питомником",text:"Рассказ о породах ездовых собак."},{title:"Катание на упряжке",text:"Заезд по лесной трассе."},{title:"Чаепитие",text:"Горячий чай, фотосессия с собаками."}],
   included:["Трансфер","Катание на упряжке","Горячий чай","Инструктаж"],excluded:["Дополнительные заезды"],toBring:["Тёплая одежда","Непромокаемая обувь","Перчатки"]},
  {id:"gastro-tour",name:"Гастрономический тур по Хабаровску",images:pool("foodShots",0,4),duration:"4 часа",groupSize:"до 12 человек",price:3800,priceNote:"за человека, включая дегустации",difficulty:"Лёгкий",dates:"четверг — воскресенье",
   short:"Знакомство с дальневосточной, корейской и русской кухней.",
   program:[{title:"Точка 1",text:"Дегустация блюд из амурской рыбы."},{title:"Точка 2",text:"Корейский квартал: кимчи, морковь по-корейски."},{title:"Точка 3",text:"Дальневосточные десерты и травяной чай."},{title:"Точка 4",text:"Ужин с блюдами русской и таёжной кухни."}],
   included:["Все дегустации","Услуги гида","Напитки"],excluded:["Дополнительные заказы","Алкоголь"],toBring:["Хороший аппетит"]},
  {id:"photo-tour",name:"Фототур «Амурские рассветы»",images:pool("cityShots",0,4),duration:"3 часа (раннее утро)",groupSize:"до 8 человек",price:2900,priceNote:"за человека",difficulty:"Лёгкий",dates:"май — сентябрь",
   short:"Съёмка рассвета над Амуром с профессиональным фотографом-гидом.",
   program:[{title:"04:30 — Сбор группы",text:"Встреча на набережной."},{title:"05:00 — Амурский утёс",text:"Съёмка рассвета."},{title:"06:00 — Набережная и мост",text:"Съёмка тумана над Амуром."},{title:"07:00 — Разбор кадров",text:"Рекомендации по обработке."}],
   included:["Услуги гида-фотографа","Консультации по съёмке"],excluded:["Аренда фототехники","Транспорт"],toBring:["Фотоаппарат/смартфон","Штатив","Тёплая одежда"]},
  {id:"bolshekhekhtsirsky",name:"Экотур в Большехехцирский заповедник",images:pool("natureLakes",2,4),duration:"1 день (6 часов)",groupSize:"до 15 человек",price:3500,priceNote:"за человека",difficulty:"Средний, тропа 5 км",dates:"апрель — октябрь",
   short:"Прогулка по экотропе заповедника с уссурийской тайгой и хребтом Хехцир.",
   program:[{title:"Трансфер",text:"Выезд до визит-центра заповедника."},{title:"Экологическая тропа",text:"Рассказ о флоре и фауне тайги."},{title:"Смотровая точка",text:"Панорама на хребет Хехцир."},{title:"Обед на природе",text:"Пикник с местными продуктами."}],
   included:["Транспорт","Услуги гида-натуралиста","Входной билет","Пикник"],excluded:["Личное снаряжение"],toBring:["Треккинговая обувь","Средство от насекомых","Дождевик"]},
  {id:"river-cruise",name:"Прогулка на теплоходе по Амуру",images:pool("embankments",1,3),duration:"2 часа",groupSize:"до 60 человек",price:1200,priceNote:"за человека",difficulty:"Лёгкий",dates:"май — октябрь",
   short:"Классическая речная прогулка с видом на город с воды.",
   program:[{title:"Посадка",text:"Регистрация у речного вокзала."},{title:"Маршрут по Амуру",text:"Вдоль набережной, под мостом."},{title:"Смотровая палуба",text:"Рассказ гида об истории судоходства."},{title:"Возвращение",text:"Прибытие к речному вокзалу."}],
   included:["Билет на теплоход","Сопровождение экскурсовода"],excluded:["Питание и напитки на борту"],toBring:["Ветровка","Головной убор"]},
  {id:"shantar-islands",name:"Экспедиция на Шантарские острова",images:pool("natureLakes",4,4),duration:"6 дней / 5 ночей",groupSize:"8–12 человек",price:89000,priceNote:"за человека, включая перелёт",difficulty:"Высокий, экспедиционный формат",dates:"июль — август",
   short:"Флагманское путешествие к архипелагу в Охотском море — киты, орланы, дикая природа.",
   program:[{title:"День 1",text:"Перелёт, трансфер к побережью, лагерь."},{title:"День 2–4",text:"Морские выходы, наблюдение за китами, треккинг."},{title:"День 5",text:"Рыбалка, вечер у костра."},{title:"День 6",text:"Обратный трансфер и перелёт."}],
   included:["Перелёт","Проживание в лагере","Питание","Гид-натуралист","Морские выходы"],excluded:["Страховка","Личное снаряжение","Алкоголь"],toBring:["Тёплая непромокаемая одежда","Спальный мешок","Бинокль","Аптечка"]}
];

var GUIDES = [
  {id:"elena",name:"Елена Соколова",photo:IMAGES.guidePortraits[0],specialty:"Историко-архитектурные экскурсии по центру города",languages:"Русский, Английский",experience:"12 лет в туризме, дипломированный экскурсовод",price:"от 2000 ₽/час, от 6000 ₽ за групповую экскурсию",rating:4.9,
   review:"«Елена невероятно увлекательно рассказывает историю города!» — Мария"},
  {id:"viktor",name:"Виктор Ким",photo:IMAGES.guidePortraits[1],specialty:"Экскурсии в Комсомольск-на-Амуре и на озеро Амут",languages:"Русский, Китайский",experience:"8 лет, специалист по природным маршрутам края",price:"от 15 000 ₽ за однодневный тур на группу до 6 человек",rating:4.8,
   review:"«Спасибо большое за экскурсию на Амут! Целый день ходить по красивейшим местам было супер!» — Ирина"},
  {id:"andrey",name:"Андрей Петров",photo:IMAGES.guidePortraits[2],specialty:"Экотуризм, рыбалка и охота в Хабаровском крае",languages:"Русский, Английский",experience:"15 лет, егерь и инструктор outdoor-туров",price:"от 7500 ₽ за день рыбалки",rating:4.9,
   review:"«Андрей знает все рыбные места на Амуре, отличный улов и уха на берегу!» — Сергей"},
  {id:"maria",name:"Мария Иванова",photo:IMAGES.guidePortraits[3],specialty:"Гастрономические туры и кулинарные мастер-классы",languages:"Русский, Английский, Китайский",experience:"6 лет, шеф-гид гастрономических туров",price:"от 3800 ₽ за гастротур",rating:5,
   review:"«Очень вкусный и познавательный тур!» — Анна"},
  {id:"sergey",name:"Сергей Дальневосточный",photo:IMAGES.guidePortraits[4],specialty:"Фототуры, зимние и приключенческие маршруты",languages:"Русский",experience:"10 лет, профессиональный фотограф и гид",price:"от 2900 ₽ за фототур",rating:4.8,
   review:"«Сергей поймал идеальный момент рассвета, кадры получились потрясающие!» — Ольга"},
  {id:"olga",name:"Ольга Ли",photo:IMAGES.guidePortraits[5],specialty:"Гид-переводчик китайского языка, бизнес-туры",languages:"Русский, Китайский, Английский",experience:"9 лет, сертифицированный переводчик-гид",price:"от 2500 ₽/час",rating:4.9,
   review:"«Ольга организовала для наших партнёров из Китая отличную программу.» — Игорь"}
];

var BLOG = [
  {id:"amur-festival-2026",title:"Фестиваль «Амурские волны» пройдёт в Хабаровске летом 2026 года",date:"15 января 2026",image:IMAGES.cityShots[2],
   excerpt:"Ежегодный музыкальный и гастрономический фестиваль на набережной соберёт гостей со всего Дальнего Востока.",
   content:["Летом 2026 года Хабаровск снова примет фестиваль «Амурские волны» — один из крупнейших культурных фестивалей Дальнего Востока на набережной Амура.","Организаторы обещают выступления коллективов из регионов ДФО, ярмарку фермерских продуктов и вечернее лазерное шоу над рекой.","Рекомендуем бронировать отели заранее — свободных номеров в центре города традиционно становится меньше."]},
  {id:"amut-season-open",title:"Открытие туристического сезона на озере Амут",date:"2 июня 2025",image:IMAGES.natureLakes[1],
   excerpt:"Туроператоры Хабаровского края объявили о старте сезона глэмпинг-туров к живописному горному озеру.",
   content:["С начала июня стартовали регулярные туры выходного дня к озеру Амут — одному из самых красивых горных водоёмов края.","В этом сезоне расширен парк глэмпинг-домиков и добавлены новые маршруты со смотровыми площадками.","Тур пользуется стабильным спросом у туристов, совмещающих поездку с посещением Комсомольска-на-Амуре."]},
  {id:"winter-season-khv",title:"Зимний сезон в Хабаровске: что посмотреть и чем заняться",date:"20 ноября 2025",image:IMAGES.parks[3],
   excerpt:"С наступлением холодов город предлагает каток на площади Ленина, собачьи упряжки и зимнюю рыбалку.",
   content:["Зима — особенное время для знакомства с Хабаровском: заснеженный Амур, украшенная набережная и десятки активностей.","Среди популярных зимних развлечений — катание на собачьих упряжках, подлёдная рыбалка и вечерние прогулки по набережной.","Отели города предлагают специальные новогодние пакеты — бронируйте заранее."]},
  {id:"gastro-week",title:"Гастрономическая неделя дальневосточной кухни",date:"10 сентября 2025",image:IMAGES.foodShots[3],
   excerpt:"Рестораны города подготовили специальные сеты из амурской рыбы и таёжных дикоросов.",
   content:["В сентябре в Хабаровске прошла гастрономическая неделя — более 20 ресторанов представили сеты из локальных продуктов.","Мероприятие организовано при поддержке краевого министерства туризма.","Организаторы планируют сделать неделю ежегодной и расширить программу дегустационными турами."]},
  {id:"new-hotel-openings",title:"В Хабаровске открываются новые дизайн-отели",date:"5 марта 2025",image:IMAGES.cityShots[4],
   excerpt:"Гостиничный рынок города пополняется современными объектами размещения.",
   content:["В последние годы в Хабаровске появляется всё больше отелей современного формата.","Эксперты связывают рост интереса инвесторов с увеличением туристического потока на Дальний Восток.","Для гостей города это означает более широкий выбор вариантов размещения на любой бюджет."]}
];

var FAQ = [
  {q:"Как забронировать отель или тур через сайт?",a:"Выберите отель или тур и нажмите «Забронировать»/«Заказать тур». Заполните форму — менеджер свяжется в течение часа."},
  {q:"Какое лучшее время для поездки в Хабаровск?",a:"С мая по сентябрь комфортнее всего для прогулок и туров на природу. Зима хороша для собачьих упряжек и зимней рыбалки."},
  {q:"Нужна ли виза иностранным туристам?",a:"Гражданам большинства стран нужна виза. Уточняйте актуальные требования на сайте МИД России перед поездкой."},
  {q:"Как добраться до Хабаровска?",a:"Самолётом (аэропорт Новый, 12 км от центра), поездом по Транссибу или на автомобиле по трассе «Уссури»."},
  {q:"Можно ли расплачиваться картой?",a:"Большинство мест принимают карты «Мир». Иностранным туристам стоит иметь при себе наличные рубли."},
  {q:"Безопасно ли путешествовать самостоятельно?",a:"Хабаровск — один из самых безопасных крупных городов Дальнего Востока. Соблюдайте стандартные меры предосторожности."},
  {q:"Есть ли скидки для детей и пенсионеров?",a:"Да, большинство музеев и туроператоров предоставляют льготные билеты. Дети до 7 лет часто проходят бесплатно."},
  {q:"Как оплатить заказ?",a:"После подтверждения заявки — картой онлайн, переводом на счёт или наличными при заселении/начале тура."}
];

/* ===================== СОСТОЯНИЕ ===================== */

var FAV_KEY = "khv-tourism-favorites";
function getFavorites(){ try{ return JSON.parse(localStorage.getItem(FAV_KEY)) || []; }catch(e){ return []; } }
function setFavorites(list){ localStorage.setItem(FAV_KEY, JSON.stringify(list)); updateFavCount(); }
function isFavorite(id){ return getFavorites().indexOf(id) !== -1; }
window.toggleFavorite = function(id){
  var list = getFavorites();
  var idx = list.indexOf(id);
  if(idx===-1){ list.push(id); } else { list.splice(idx,1); }
  setFavorites(list);
  render();
};
function updateFavCount(){
  var el = document.getElementById("khv-fav-count");
  if(el){ var n = getFavorites().length; el.textContent = n; el.style.display = n>0 ? "flex" : "none"; }
}

/* ===================== УТИЛИТЫ ВЁРСТКИ ===================== */

function stars(rating){
  var full = Math.floor(rating), half = (rating-full)>=0.5;
  var s = "";
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
    if(it.href){ html += '<a href="'+it.href+'" class="hover:text-sky-700">'+it.label+'</a>'; }
    else { html += '<span class="font-medium text-slate-700">'+it.label+'</span>'; }
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
window.closeLightbox = function(){ document.getElementById("khv-lightbox").classList.add("hidden"); };
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
  var links = NAV_LINKS.map(function(l){ return '<a href="'+l.href+'" class="rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-sky-800">'+l.label+'</a>'; }).join("");
  var mLinks = NAV_LINKS.map(function(l){ return '<a href="'+l.href+'" onclick="closeMobileMenu()" class="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-600">'+l.label+'</a>'; }).join("");
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
window.toggleMobileMenu = function(){ document.getElementById("khv-mobile-menu").classList.toggle("hidden"); };
window.closeMobileMenu = function(){ document.getElementById("khv-mobile-menu").classList.add("hidden"); };

/* ----- Модальные окна (формы) ----- */

function fieldHtml(label, inputHtml){
  return '<label class="mb-4 block text-sm"><span class="mb-1.5 block font-medium text-slate-700">'+label+'</span>'+inputHtml+'</label>';
}
var inputCls = "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-sky-600";

window.openModal = function(title, bodyHtml){
  document.getElementById("khv-modal-title").textContent = title;
  document.getElementById("khv-modal-body").innerHTML = bodyHtml;
  document.getElementById("khv-modal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
};
window.closeModal = function(){
  document.getElementById("khv-modal").classList.add("hidden");
  document.body.style.overflow = "";
};

window.openBookingModal = function(hotelId){
  var options = HOTELS.map(function(h){ return '<option value="'+h.id+'"'+(h.id===hotelId?" selected":"")+'>'+h.name+' — '+h.stars+'★</option>'; }).join("");
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
  var options = TOURS.map(function(t){ return '<option value="'+t.id+'"'+(t.id===tourId?" selected":"")+'>'+t.name+' — от '+money(t.price)+'</option>'; }).join("");
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
  openModal("Заказать гида: "+name, body);
};

window.openContactModal = function(title){
  var body =
    '<form onsubmit="return submitForm(event,\'Сообщение отправлено! Мы ответим вам в ближайшее время.\')">'+
    fieldHtml("Имя",'<input type="text" required placeholder="Ваше имя" class="'+inputCls+'"/>')+
    fieldHtml("Телефон или Email",'<input type="text" required placeholder="+7 ... или you@mail.ru" class="'+inputCls+'"/>')+
    fieldHtml("Сообщение",'<textarea rows="4" required class="'+inputCls+'" placeholder="Ваш вопрос или пожелание"></textarea>')+
    '<button type="submit" class="mt-2 w-full rounded-full bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600">Отправить</button>'+
    '</form>';
  openModal(title || "Обратная связь", body);
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
      '<p>Хабаровск — один из крупнейших городов российского Дальнего Востока, раскинувшийся на высоком правом берегу могучего Амура. Город с более чем 165-летней историей сочетает купеческую архитектуру конца XIX века, советский монументализм и современные небоскрёбы. Именно поэтому туризм в Хабаровске с каждым годом привлекает всё больше путешественников — от жителей центральной России до иностранных гостей из Китая, Кореи и Японии.</p>'+
      '<p>Отдых в Хабаровске подходит абсолютно любому туристу. Любителям истории понравятся Успенский и Спасо-Преображенский соборы, краеведческий музей имени Гродекова и Амурский утёс. Ценители природы оценят экскурсии в Большехехцирский заповедник, туры на озеро Амут и рыбалку на Амуре. Бронирование отелей Хабаровска на нашем сайте позволяет подобрать вариант на любой бюджет.</p>'+
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

    '<section class="bg-sky-900/5 py-16"><div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">'+
      '<h2 class="mb-8 text-center text-2xl font-bold text-slate-900 sm:text-3xl">Полезная информация перед поездкой</h2>'+
      weatherWidgetHtml()+
    '</div></section>'+

    '<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">'+
      '<div class="mb-10 flex flex-wrap items-end justify-between gap-4"><h2 class="text-2xl font-bold text-slate-900 sm:text-3xl">Новости и блог о туризме</h2><a href="#/blog" class="font-semibold text-sky-800 hover:underline">Все статьи →</a></div>'+
      '<div class="grid grid-cols-1 gap-6 sm:grid-cols-3">'+blogHtml+'</div>'+
    '</section>'+

    '<section class="bg-gradient-to-br from-sky-900 to-sky-700 py-16 text-center text-white"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">'+
      '<h2 class="text-2xl font-bold sm:text-3xl">Готовы отправиться в путешествие по Хабаровску?</h2>'+
      '<p class="mt-3 text-slate-100">Оставьте заявку — подберём отель, тур и гида под ваши пожелания бесплатно.</p>'+
      '<button onclick="openContactModal(\'Оставить заявку\')" class="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg hover:bg-orange-600">Оставить заявку →</button>'+
    '</div></section>'
  );
}

function weatherWidgetHtml(){
  var months = [["-22°C","Морозно","❄️"],["-18°C","Морозно","❄️"],["-4°C","Переменная облачность","⛅"],["6°C","Прохладно","⛅"],["15°C","Тепло","☀️"],["21°C","Солнечно","☀️"],["24°C","Возможен дождь","🌧️"],["23°C","Влажно","🌧️"],["17°C","Ясно","☀️"],["7°C","Прохладно","⛅"],["-8°C","Морозно","❄️"],["-18°C","Морозно","❄️"]];
  var m = months[new Date().getMonth()];
  return '<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">'+
    '<div class="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">'+
      '<div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-2xl">'+m[2]+'</div>'+
      '<div><div class="text-sm text-slate-500">Погода в Хабаровске сейчас</div><div class="text-2xl font-bold text-slate-900">'+m[0]+'</div><div class="text-xs text-slate-500">'+m[1]+'</div></div>'+
    '</div>'+
    '<div class="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">'+
      '<div class="mb-2 text-sm text-slate-500">Курс валют (ориентировочно)</div>'+
      '<div class="grid grid-cols-3 gap-2 text-center">'+
        '<div><div class="text-lg font-bold text-slate-900">₽ 81.5</div><div class="text-xs text-slate-500">USD</div></div>'+
        '<div><div class="text-lg font-bold text-slate-900">₽ 94.2</div><div class="text-xs text-slate-500">EUR</div></div>'+
        '<div><div class="text-lg font-bold text-slate-900">₽ 11.3</div><div class="text-xs text-slate-500">CNY</div></div>'+
      '</div></div></div>';
}

function pageAbout(){
  var sections = [
    ["🏺","История Хабаровска","Хабаровск основан в 1858 году как военный пост Хабаровка, названный в честь русского землепроходца Ерофея Хабарова. В конце XIX века поселение получило статус города и стало центром Приамурского генерал-губернаторства. Сегодня это столица Дальневосточного федерального округа с исторической застройкой на улице Муравьёва-Амурского и набережной."],
    ["🌡️","Климат и лучшее время для посещения","Резко континентальный муссонный климат. Зима морозная и солнечная (до -25°C), лето тёплое и влажное с муссонными дождями в июле-августе. Пик комфортного сезона — май-июнь и август-сентябрь. Золотая осень в сентябре особенно любима туристами."],
    ["🚌","Транспорт","Международный аэропорт Новый, поезда по Транссибу, развитая сеть автобусов и трамваев внутри города. Центральные достопримечательности расположены компактно — многое можно пройти пешком."],
    ["🍽️","Кухня и рестораны","Гастрономия отражает пограничное положение города: русская, корейская, китайская и японская кухня. Стоит попробовать блюда из амурской рыбы, строганину, папоротник-орляк, кедровые орехи и дальневосточные ягоды."],
    ["🛡️","Безопасность","Один из самых спокойных крупных городов Дальнего Востока. Соблюдайте стандартные меры предосторожности, пользуйтесь официальными такси. Экстренные службы — 112."]
  ];
  var secHtml = sections.map(function(s){
    return '<div class="khv-reveal flex gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">'+
      '<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-800 text-white text-xl">'+s[0]+'</div>'+
      '<div><h3 class="mb-2 text-lg font-bold text-slate-900">'+s[1]+'</h3><p class="text-sm leading-relaxed text-slate-600">'+s[2]+'</p></div></div>';
  }).join("");
  var photos = IMAGES.cityShots.slice(0,4).map(function(src,i){ return '<img src="'+src+'" alt="Хабаровск, фото '+(i+1)+'" class="h-32 w-full rounded-xl object-cover sm:h-40" loading="lazy"/>'; }).join("");
  return pageHero(IMAGES.heroAbout,"О Хабаровске","История, климат, транспорт и культура столицы Дальнего Востока")+
    '<div class="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">'+
      crumbs([{label:"О Хабаровске"}])+
      '<h2 class="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">Город на берегу Амура</h2>'+
      '<p class="mb-10 leading-relaxed text-slate-600">Хабаровск — второй по величине город Дальнего Востока России, административный центр Хабаровского края. Расположенный на высоком правом берегу Амура, город на протяжении полутора веков выполняет роль главных «ворот» страны в Азиатско-Тихоокеанский регион.</p>'+
      '<div class="space-y-10">'+secHtml+'</div>'+
      '<div class="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">'+photos+'</div>'+
    '</div>';
}

function pageHotels(){
  var cards = HOTELS.map(hotelCardHtml).join("");
  return pageHero(IMAGES.heroHotels,"Гостиницы и отели Хабаровска","14 проверенных вариантов размещения — от бюджетных гостиниц до дизайн-отелей 4★")+
    '<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">'+
      crumbs([{label:"Отели"}])+
      '<p class="mb-8 max-w-3xl leading-relaxed text-slate-600">На нашем портале собраны действующие отели Хабаровска с актуальными ценами на 2026 год, реальными отзывами гостей и подробным описанием номерного фонда.</p>'+
      '<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">'+cards+'</div>'+
    '</div>';
}

function pageHotelDetail(id){
  var h = HOTELS.filter(function(x){return x.id===id;})[0];
  if(!h) return pageNotFound();
  var amenities = h.amenities.map(function(a){ return '<div class="flex items-center gap-2 rounded-lg bg-white p-3 text-sm text-slate-600 ring-1 ring-slate-100">✓ '+a+'</div>'; }).join("");
  var rooms = h.rooms.map(function(r){ return '<tr class="border-t border-slate-100"><td class="px-4 py-3 font-semibold text-slate-800">'+r.name+'</td><td class="px-4 py-3 text-slate-500">'+r.desc+'</td><td class="px-4 py-3 text-right font-bold text-sky-800">'+money(r.price)+'</td></tr>'; }).join("");
  var reviews = h.reviews.map(function(r){ return '<div class="rounded-xl bg-white p-4 ring-1 ring-slate-100"><div class="mb-1 flex items-center justify-between"><span class="font-semibold text-slate-800">'+r.author+'</span><span class="text-xs text-slate-400">'+r.date+'</span></div>'+stars(r.rating)+'<p class="mt-2 text-sm text-slate-600">'+r.text+'</p></div>'; }).join("");
  return '<div class="pt-24"><div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">'+
    crumbs([{label:"Отели",href:"#/oteli"},{label:h.name}])+
    '<div class="mb-6 flex flex-wrap items-start justify-between gap-4">'+
      '<div><h1 class="text-2xl font-extrabold text-slate-900 sm:text-3xl">'+h.name+'</h1>'+
      '<div class="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500"><span class="font-bold text-sky-800">'+"★".repeat(h.stars)+'</span><span>📍 '+h.address+'</span></div>'+
      '<div class="mt-2 flex items-center gap-2">'+stars(h.rating)+'<span class="text-sm text-slate-500">'+h.rating+' · '+h.reviewsCount+' отзывов (Booking/TripAdvisor)</span></div></div>'+
      heartBtn("hotel-"+h.id,"")+
    '</div>'+
    lightboxGallery(h.images,h.name,"hotel-"+h.id)+
    '<div class="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">'+
      '<div class="space-y-10 lg:col-span-2">'+
        '<div><h2 class="mb-3 text-xl font-bold text-slate-900">Об отеле</h2><p class="leading-relaxed text-slate-600">'+h.description+'</p></div>'+
        '<div><h2 class="mb-3 text-xl font-bold text-slate-900">Удобства и услуги</h2><div class="grid grid-cols-2 gap-3 sm:grid-cols-3">'+amenities+'</div></div>'+
        '<div><h2 class="mb-3 text-xl font-bold text-slate-900">Типы номеров и цены</h2><div class="overflow-hidden rounded-xl ring-1 ring-slate-200"><table class="w-full text-left text-sm"><thead class="bg-slate-100 text-slate-600"><tr><th class="px-4 py-3">Тип номера</th><th class="px-4 py-3">Описание</th><th class="px-4 py-3 text-right">Цена / ночь</th></tr></thead><tbody>'+rooms+'</tbody></table></div></div>'+
        '<div><h2 class="mb-3 text-xl font-bold text-slate-900">Отзывы гостей</h2><div class="space-y-4">'+reviews+'</div></div>'+
        '<div><h2 class="mb-3 text-xl font-bold text-slate-900">Как добраться</h2><div class="overflow-hidden rounded-xl ring-1 ring-slate-200"><iframe title="Карта" class="h-72 w-full" loading="lazy" src="https://yandex.ru/map-widget/v1/?text='+encodeURIComponent(h.address)+'&z=15"></iframe></div></div>'+
      '</div>'+
      '<aside class="lg:col-span-1"><div class="sticky top-24 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100">'+
        '<div class="mb-1 text-sm text-slate-400">Цена за ночь от</div><div class="mb-4 text-3xl font-extrabold text-sky-800">'+money(h.rooms[0].price)+'</div>'+
        '<button onclick="openBookingModal(\''+h.id+'\')" class="w-full rounded-full bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600">Забронировать</button>'+
        '<p class="mt-3 text-center text-xs text-slate-400">Без предоплаты. Подтверждение в течение часа.</p>'+
        '<div class="mt-5 border-t border-slate-100 pt-5 text-sm text-slate-500"><div class="mb-2">📶 Бесплатный Wi-Fi</div><div class="mb-2">📍 '+h.address+'</div></div>'+
        '<a href="#/kontakty" class="mt-4 block text-center text-sm font-semibold text-sky-800 hover:underline">Остались вопросы? →</a>'+
      '</div></aside>'+
    '</div></div></div>';
}

function pageAttractions(){
  var cards = ATTRACTIONS.map(attractionCardHtml).join("");
  return pageHero(IMAGES.cathedrals[3],"Достопримечательности Хабаровска","18 главных мест города: соборы, музеи, набережные и парки")+
    '<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">'+
      crumbs([{label:"Достопримечательности"}])+
      '<p class="mb-8 max-w-3xl leading-relaxed text-slate-600">От Амурского утёса и набережной адмирала Невельского до краевого музея имени Гродекова — подробный гид по главным туристическим местам Хабаровска.</p>'+
      '<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">'+cards+'</div>'+
    '</div>';
}

function pageAttractionDetail(id){
  var a = ATTRACTIONS.filter(function(x){return x.id===id;})[0];
  if(!a) return pageNotFound();
  return '<div class="pt-24"><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">'+
    crumbs([{label:"Достопримечательности",href:"#/dostoprimechatelnosti"},{label:a.name}])+
    '<span class="mb-3 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">'+a.category+'</span>'+
    '<h1 class="mb-4 text-2xl font-extrabold text-slate-900 sm:text-3xl">'+a.name+'</h1>'+
    lightboxGallery(a.images,a.name,"attr-"+a.id)+
    '<div class="my-8 grid grid-cols-1 gap-3 sm:grid-cols-3">'+
      '<div class="rounded-xl bg-white p-4 ring-1 ring-slate-100"><div class="text-xs font-semibold uppercase text-slate-400">Адрес</div><div class="text-sm text-slate-700">📍 '+a.address+'</div></div>'+
      '<div class="rounded-xl bg-white p-4 ring-1 ring-slate-100"><div class="text-xs font-semibold uppercase text-slate-400">Режим работы</div><div class="text-sm text-slate-700">🕒 '+a.hours+'</div></div>'+
      '<div class="rounded-xl bg-white p-4 ring-1 ring-slate-100"><div class="text-xs font-semibold uppercase text-slate-400">Стоимость</div><div class="text-sm text-slate-700">💰 '+a.price+'</div></div>'+
    '</div>'+
    '<h2 class="mb-3 text-xl font-bold text-slate-900">Описание</h2><p class="mb-8 leading-relaxed text-slate-600">'+a.description+'</p>'+
    '<div class="mb-10 flex gap-3 rounded-xl bg-amber-50 p-5 ring-1 ring-amber-100"><div class="mt-0.5">💡</div><div><div class="mb-1 font-semibold text-amber-800">Совет туристу</div><p class="text-sm text-amber-700">'+a.tips+'</p></div></div>'+
    '<h2 class="mb-3 text-xl font-bold text-slate-900">На карте</h2><div class="mb-14 overflow-hidden rounded-xl ring-1 ring-slate-200"><iframe title="Карта" class="h-72 w-full" loading="lazy" src="https://yandex.ru/map-widget/v1/?text='+encodeURIComponent(a.address+" Хабаровск")+'&z=15"></iframe></div>'+
    '<div class="mb-16 rounded-2xl bg-sky-900 p-8 text-center text-white"><h3 class="mb-2 text-xl font-bold">Хотите увидеть это место с гидом?</h3><p class="mb-5 text-sky-100">Закажите обзорную экскурсию с посещением этого и других мест города</p><a href="#/tury" class="inline-block rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600">Смотреть туры</a></div>'+
  '</div></div>';
}

function pageTours(){
  var cards = TOURS.map(tourCardHtml).join("");
  var options = TOURS.map(function(t){ return '<option value="'+t.id+'">'+t.name+'</option>'; }).join("");
  return pageHero(IMAGES.heroTours,"Туры и экскурсии по Хабаровску и краю","12 действующих туров: от прогулки по центру до экспедиции на Шантарские острова")+
    '<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">'+
      crumbs([{label:"Туры и экскурсии"}])+
      '<p class="mb-10 max-w-3xl leading-relaxed text-slate-600">Актуальные цены на 2026 год, подробная программа по дням и часам, полный список включённого и не включённого в стоимость.</p>'+
      '<div class="mb-12 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">'+
        '<div class="mb-5 flex items-center gap-2 text-lg font-bold text-slate-900">🧮 Калькулятор стоимости тура</div>'+
        '<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">'+
          '<label class="text-sm"><span class="mb-1.5 block font-medium text-slate-700">Выберите тур</span><select id="khv-calc-tour" onchange="updateTourCalc()" class="'+inputCls+'">'+options+'</select></label>'+
          '<label class="text-sm"><span class="mb-1.5 block font-medium text-slate-700">Количество человек</span><input id="khv-calc-people" type="number" min="1" max="20" value="2" onchange="updateTourCalc()" class="'+inputCls+'"/></label>'+
          '<div class="flex flex-col justify-end"><span class="mb-1.5 block text-sm font-medium text-slate-700">Итоговая стоимость</span><div id="khv-calc-total" class="rounded-lg bg-sky-50 px-3.5 py-2.5 text-lg font-extrabold text-sky-800">0 ₽</div></div>'+
        '</div>'+
        '<button onclick="openTourOrderModal(document.getElementById(\'khv-calc-tour\').value)" class="mt-6 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600">Заказать этот тур</button>'+
      '</div>'+
      '<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">'+cards+'</div>'+
    '</div>';
}
window.updateTourCalc = function(){
  var id = document.getElementById("khv-calc-tour").value;
  var people = Math.max(1, Number(document.getElementById("khv-calc-people").value||1));
  var t = TOURS.filter(function(x){return x.id===id;})[0];
  if(t) document.getElementById("khv-calc-total").textContent = money(t.price*people);
};

function pageTourDetail(id){
  var t = TOURS.filter(function(x){return x.id===id;})[0];
  if(!t) return pageNotFound();
  var program = t.program.map(function(p,i){ return '<div class="flex gap-4"><div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-800 text-xs font-bold text-white">'+(i+1)+'</div><div><div class="font-semibold text-slate-800">'+p.title+'</div><p class="text-sm text-slate-600">'+p.text+'</p></div></div>'; }).join("");
  var included = t.included.map(function(x){ return '<li class="flex items-start gap-2">✓ '+x+'</li>'; }).join("");
  var excluded = t.excluded.map(function(x){ return '<li class="flex items-start gap-2">✕ '+x+'</li>'; }).join("");
  var toBring = t.toBring.map(function(x){ return '<span class="rounded-full bg-sky-50 px-3 py-1.5 text-sm text-sky-800 ring-1 ring-sky-100">'+x+'</span>'; }).join("");
  return '<div class="pt-24"><div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">'+
    crumbs([{label:"Туры",href:"#/tury"},{label:t.name}])+
    '<div class="mb-6 flex flex-wrap items-start justify-between gap-4"><h1 class="max-w-2xl text-2xl font-extrabold text-slate-900 sm:text-3xl">'+t.name+'</h1>'+heartBtn("tour-"+t.id,"")+'</div>'+
    lightboxGallery(t.images,t.name,"tour-"+t.id)+
    '<div class="my-10 grid grid-cols-2 gap-3 sm:grid-cols-4">'+
      '<div class="rounded-xl bg-white p-4 text-center ring-1 ring-slate-100">⏱<div class="text-xs uppercase text-slate-400">Длительность</div><div class="text-sm font-semibold text-slate-800">'+t.duration+'</div></div>'+
      '<div class="rounded-xl bg-white p-4 text-center ring-1 ring-slate-100">👥<div class="text-xs uppercase text-slate-400">Группа</div><div class="text-sm font-semibold text-slate-800">'+t.groupSize+'</div></div>'+
      '<div class="rounded-xl bg-white p-4 text-center ring-1 ring-slate-100">📊<div class="text-xs uppercase text-slate-400">Сложность</div><div class="text-sm font-semibold text-slate-800">'+t.difficulty+'</div></div>'+
      '<div class="rounded-xl bg-white p-4 text-center ring-1 ring-slate-100">📅<div class="text-xs uppercase text-slate-400">Даты</div><div class="text-sm font-semibold text-slate-800">'+t.dates+'</div></div>'+
    '</div>'+
    '<div class="grid grid-cols-1 gap-10 lg:grid-cols-3">'+
      '<div class="space-y-10 lg:col-span-2">'+
        '<div><h2 class="mb-3 text-xl font-bold text-slate-900">О туре</h2><p class="leading-relaxed text-slate-600">'+t.short+'</p></div>'+
        '<div><h2 class="mb-4 text-xl font-bold text-slate-900">Программа тура</h2><div class="space-y-4">'+program+'</div></div>'+
        '<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">'+
          '<div><h3 class="mb-3 font-bold text-slate-900">✓ Включено</h3><ul class="space-y-2 text-sm text-slate-600">'+included+'</ul></div>'+
          '<div><h3 class="mb-3 font-bold text-slate-900">✕ Не включено</h3><ul class="space-y-2 text-sm text-slate-600">'+excluded+'</ul></div>'+
        '</div>'+
        '<div><h3 class="mb-3 font-bold text-slate-900">🎒 Что взять с собой</h3><div class="flex flex-wrap gap-2">'+toBring+'</div></div>'+
      '</div>'+
      '<aside class="lg:col-span-1"><div class="sticky top-24 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100">'+
        '<div class="mb-1 text-sm text-slate-400">Стоимость</div><div class="mb-1 text-3xl font-extrabold text-sky-800">'+money(t.price)+'</div><div class="mb-4 text-xs text-slate-400">'+t.priceNote+'</div>'+
        '<button onclick="openTourOrderModal(\''+t.id+'\')" class="w-full rounded-full bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600">Заказать тур</button>'+
        '<a href="#/gidy" class="mt-4 block text-center text-sm font-semibold text-sky-800 hover:underline">Нужен персональный гид? →</a>'+
      '</div></aside>'+
    '</div></div></div>';
}

function pageGuides(){
  var cards = GUIDES.map(function(g){
    return '<div class="khv-reveal overflow-hidden rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl">'+
      '<img src="'+g.photo+'" alt="'+g.name+'" class="mx-auto mb-4 h-24 w-24 rounded-full object-cover ring-4 ring-sky-50" loading="lazy"/>'+
      '<h3 class="mb-1 text-lg font-bold text-slate-900">'+g.name+'</h3>'+
      '<p class="mb-3 text-sm text-slate-500">'+g.specialty+'</p>'+
      '<div class="mb-3 flex justify-center">'+stars(g.rating)+'<span class="ml-1.5 text-xs text-slate-500">'+g.rating+'</span></div>'+
      '<div class="mb-4 space-y-1.5 text-left text-xs text-slate-500"><div>🗣 '+g.languages+'</div><div>💼 '+g.experience+'</div><div>💰 '+g.price+'</div></div>'+
      '<div class="mb-4 border-t border-slate-100 pt-3 text-left"><p class="text-xs italic text-slate-500">'+g.review+'</p></div>'+
      '<button onclick="openGuideOrderModal(\''+g.name+'\')" class="w-full rounded-full bg-sky-800 py-2.5 text-sm font-semibold text-white hover:bg-sky-700">Заказать гида</button>'+
    '</div>';
  }).join("");
  return pageHero(IMAGES.heroGuides,"Услуги гидов в Хабаровске","Лицензированные экскурсоводы и гиды-переводчики для индивидуальных и групповых туров")+
    '<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">'+
      crumbs([{label:"Гиды"}])+
      '<p class="mb-10 max-w-3xl leading-relaxed text-slate-600">Наши гиды — аттестованные специалисты с многолетним опытом работы в Хабаровске и крае.</p>'+
      '<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">'+cards+'</div>'+
    '</div>';
}

function pageContacts(){
  return pageHero(IMAGES.heroContacts,"Контакты и бронирование","Свяжитесь с нами любым удобным способом — поможем спланировать поездку")+
    '<div class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">'+
      crumbs([{label:"Контакты"}])+
      '<div class="grid grid-cols-1 gap-10 lg:grid-cols-2">'+
        '<div><h2 class="mb-5 text-xl font-bold text-slate-900">Наши контакты</h2>'+
        '<ul class="mb-8 space-y-4 text-sm text-slate-600">'+
          '<li>📍 г. Хабаровск, ул. Муравьёва-Амурского, 1, оф. 305 (Туристско-информационный центр)</li>'+
          '<li>☎ +7 (4212) 00-00-00 — звонки по России бесплатны</li>'+
          '<li>✉ info@tourism-khabarovsk.ru</li>'+
          '<li>🕒 Ежедневно, 9:00–20:00 (по хабаровскому времени)</li>'+
          '<li>💬 WhatsApp / Viber / Telegram: +7 (999) 00-00-000</li>'+
        '</ul>'+
        '<div class="mb-6 flex gap-3">'+
          '<a href="#" class="flex h-11 w-11 items-center justify-center rounded-full bg-sky-800 text-white hover:bg-sky-700">ВК</a>'+
          '<a href="#" class="flex h-11 w-11 items-center justify-center rounded-full bg-sky-800 text-white hover:bg-sky-700">TG</a>'+
          '<a href="#" class="flex h-11 w-11 items-center justify-center rounded-full bg-sky-800 text-white hover:bg-sky-700">IG</a>'+
        '</div>'+
        '<div class="overflow-hidden rounded-xl ring-1 ring-slate-200"><iframe title="Карта" class="h-72 w-full" loading="lazy" src="https://yandex.ru/map-widget/v1/?text=Хабаровск,%20ул.%20Муравьёва-Амурского,%201&z=16"></iframe></div></div>'+
        '<div class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">'+
        '<h2 class="mb-5 text-xl font-bold text-slate-900">Форма обратной связи и бронирования</h2>'+
        '<form onsubmit="return submitForm(event,\'Спасибо! Ваша заявка отправлена, мы свяжемся с вами в ближайшее время.\')">'+
          fieldHtml("Имя",'<input type="text" required placeholder="Ваше имя" class="'+inputCls+'"/>')+
          '<div class="grid grid-cols-2 gap-3">'+
            fieldHtml("Телефон",'<input type="tel" required placeholder="+7 (___) ___-__-__" class="'+inputCls+'"/>')+
            fieldHtml("Email",'<input type="email" placeholder="you@mail.ru" class="'+inputCls+'"/>')+
          '</div>'+
          fieldHtml("Тема обращения",'<select class="'+inputCls+'"><option>Бронирование отеля</option><option>Заказ тура/экскурсии</option><option>Услуги гида</option><option>Другое</option></select>')+
          fieldHtml("Сообщение",'<textarea rows="4" required class="'+inputCls+'" placeholder="Расскажите подробнее о ваших пожеланиях"></textarea>')+
          '<button type="submit" class="w-full rounded-full bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600">Отправить сообщение</button>'+
        '</form></div>'+
      '</div>'+
    '</div>';
}

function pageBlog(){
  var cards = BLOG.map(function(p){
    return '<div class="khv-reveal overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg">'+
      '<img src="'+p.image+'" alt="'+p.title+'" class="h-44 w-full object-cover" loading="lazy"/>'+
      '<div class="p-5"><div class="mb-2 text-xs text-slate-400">'+p.date+'</div><h2 class="mb-2 khv-line-clamp-2 text-lg font-bold text-slate-900">'+p.title+'</h2>'+
      '<p class="mb-4 khv-line-clamp-3 text-sm text-slate-600">'+p.excerpt+'</p><a href="#/blog/'+p.id+'" class="text-sm font-semibold text-sky-800 hover:underline">Читать статью →</a></div></div>';
  }).join("");
  return pageHero(IMAGES.cityShots[3],"Блог и новости туризма","События, фестивали и новости туристической жизни Хабаровска")+
    '<div class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">'+crumbs([{label:"Блог"}])+'<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">'+cards+'</div></div>';
}

function pageBlogDetail(id){
  var p = BLOG.filter(function(x){return x.id===id;})[0];
  if(!p) return pageNotFound();
  var content = p.content.map(function(c){ return '<p>'+c+'</p>'; }).join("");
  return '<div class="pt-24"><div class="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">'+
    crumbs([{label:"Блог",href:"#/blog"},{label:p.title}])+
    '<div class="mb-3 text-sm text-slate-400">'+p.date+'</div><h1 class="mb-6 text-2xl font-extrabold text-slate-900 sm:text-3xl">'+p.title+'</h1>'+
    '<img src="'+p.image+'" alt="'+p.title+'" class="mb-8 h-72 w-full rounded-2xl object-cover sm:h-96"/>'+
    '<div class="space-y-4 leading-relaxed text-slate-600">'+content+'</div>'+
    '<div class="mt-10"><a href="#/blog" class="font-semibold text-sky-800 hover:underline">← Ко всем статьям</a></div>'+
  '</div></div>';
}

function pageFAQ(){
  var items = FAQ.map(function(f,i){
    return '<div class="khv-reveal overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100">'+
      '<button onclick="toggleFaq('+i+')" class="flex w-full items-center justify-between gap-4 p-5 text-left"><span class="font-semibold text-slate-800">'+f.q+'</span><span id="khv-faq-chevron-'+i+'" class="shrink-0 text-slate-400">⌄</span></button>'+
      '<div id="khv-faq-'+i+'" class="hidden px-5 pb-5 text-sm leading-relaxed text-slate-600">'+f.a+'</div></div>';
  }).join("");
  return pageHero(IMAGES.embankments[2],"Частые вопросы","Ответы на популярные вопросы туристов о поездке в Хабаровск")+
    '<div class="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">'+crumbs([{label:"FAQ"}])+'<div class="space-y-3">'+items+'</div></div>';
}
window.toggleFaq = function(i){
  var el = document.getElementById("khv-faq-"+i);
  el.classList.toggle("hidden");
};

function pagePrivacy(){
  return '<div class="pt-24"><div class="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">'+
    crumbs([{label:"Политика конфиденциальности"}])+
    '<h1 class="mb-6 text-2xl font-extrabold text-slate-900 sm:text-3xl">Политика конфиденциальности</h1>'+
    '<div class="space-y-4 text-sm leading-relaxed text-slate-600">'+
    '<p>Настоящая политика определяет порядок обработки персональных данных пользователей сайта «Visit Khabarovsk». Используя формы бронирования и заказа, вы соглашаетесь с условиями настоящей политики.</p>'+
    '<h2 class="text-lg font-bold text-slate-900">1. Сбор данных</h2><p>Мы собираем только те данные, которые вы добровольно предоставляете через формы: имя, телефон, email, сообщение.</p>'+
    '<h2 class="text-lg font-bold text-slate-900">2. Использование данных</h2><p>Данные используются для связи по вопросам бронирования и не передаются третьим лицам, кроме случаев, необходимых для исполнения заявки.</p>'+
    '<h2 class="text-lg font-bold text-slate-900">3. Защита данных</h2><p>Применяются организационные и технические меры защиты от несанкционированного доступа.</p>'+
    '<h2 class="text-lg font-bold text-slate-900">4. Контакты</h2><p>По вопросам обработки данных пишите на info@tourism-khabarovsk.ru.</p>'+
    '</div></div></div>';
}

function pageGallery(){
  var all = [].concat(IMAGES.cityShots, IMAGES.cathedrals, IMAGES.embankments, IMAGES.parks, IMAGES.squares, IMAGES.natureLakes, IMAGES.dogSledding, IMAGES.museums);
  return pageHero(IMAGES.natureLakes[0],"Фотогалерея Хабаровска","Город, природа края и атмосфера туров нашими глазами")+
    '<div class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">'+crumbs([{label:"Фотогалерея"}])+lightboxGallery(all,"Хабаровск","gallery")+'</div>';
}

function pageFavorites(){
  var favs = getFavorites();
  var favHotels = HOTELS.filter(function(h){ return favs.indexOf("hotel-"+h.id)!==-1; });
  var favTours = TOURS.filter(function(t){ return favs.indexOf("tour-"+t.id)!==-1; });
  var body;
  if(favHotels.length===0 && favTours.length===0){
    body = '<div class="flex flex-col items-center rounded-2xl bg-white py-20 text-center shadow-sm ring-1 ring-slate-100">'+
      '<div class="mb-4 text-5xl">♡</div><p class="mb-4 text-slate-500">Вы пока не добавили отели или туры в избранное.</p>'+
      '<div class="flex gap-3"><a href="#/oteli" class="rounded-full bg-sky-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700">Смотреть отели</a>'+
      '<a href="#/tury" class="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-600">Смотреть туры</a></div></div>';
  } else {
    body = '<div class="space-y-12">';
    if(favHotels.length>0){ body += '<div><h2 class="mb-5 text-xl font-bold text-slate-900">Отели ('+favHotels.length+')</h2><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">'+favHotels.map(hotelCardHtml).join("")+'</div></div>'; }
    if(favTours.length>0){ body += '<div><h2 class="mb-5 text-xl font-bold text-slate-900">Туры ('+favTours.length+')</h2><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">'+favTours.map(tourCardHtml).join("")+'</div></div>'; }
    body += '</div>';
  }
  return '<div class="pt-24"><div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">'+crumbs([{label:"Избранное"}])+'<h1 class="mb-8 text-2xl font-extrabold text-slate-900 sm:text-3xl">Избранное</h1>'+body+'</div></div>';
}

function pageNotFound(){
  return '<div class="flex min-h-[70vh] flex-col items-center justify-center pt-24 text-center">'+
    '<div class="text-7xl font-black text-sky-800">404</div><p class="mt-4 text-lg text-slate-500">Страница не найдена</p>'+
    '<a href="#/" class="mt-6 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600">На главную</a></div>';
}

/* ===================== РОУТЕР ===================== */

var TITLES = {
  "": "Туризм в Хабаровске — отели, туры, экскурсии и гиды | Visit Khabarovsk",
  "o-gorode": "О Хабаровске — история, климат, транспорт | Visit Khabarovsk",
  "oteli": "Гостиницы и отели Хабаровска — бронирование | Visit Khabarovsk",
  "dostoprimechatelnosti": "Достопримечательности Хабаровска | Visit Khabarovsk",
  "tury": "Туры и экскурсии по Хабаровску и краю | Visit Khabarovsk",
  "gidy": "Услуги гидов в Хабаровске | Visit Khabarovsk",
  "kontakty": "Контакты и бронирование | Visit Khabarovsk",
  "blog": "Блог и новости туризма | Visit Khabarovsk",
  "faq": "Частые вопросы | Visit Khabarovsk",
  "galereya": "Фотогалерея Хабаровска | Visit Khabarovsk",
  "izbrannoe": "Избранное | Visit Khabarovsk",
  "politika": "Политика конфиденциальности | Visit Khabarovsk"
};

function render(){
  var hash = location.hash.replace(/^#\/?/, "");
  var parts = hash.split("/").filter(Boolean);
  var root = document.getElementById("khv-app");
  var html;

  if(parts.length===0){ html = pageHome(); document.title = TITLES[""]; }
  else if(parts[0]==="o-gorode"){ html = pageAbout(); document.title = TITLES["o-gorode"]; }
  else if(parts[0]==="oteli" && parts[1]){ html = pageHotelDetail(parts[1]); var hh=HOTELS.filter(function(x){return x.id===parts[1];})[0]; document.title = hh ? hh.name+" — бронирование отеля в Хабаровске" : TITLES["oteli"]; }
  else if(parts[0]==="oteli"){ html = pageHotels(); document.title = TITLES["oteli"]; }
  else if(parts[0]==="dostoprimechatelnosti" && parts[1]){ html = pageAttractionDetail(parts[1]); var aa=ATTRACTIONS.filter(function(x){return x.id===parts[1];})[0]; document.title = aa ? aa.name+" — достопримечательность Хабаровска" : TITLES["dostoprimechatelnosti"]; }
  else if(parts[0]==="dostoprimechatelnosti"){ html = pageAttractions(); document.title = TITLES["dostoprimechatelnosti"]; }
  else if(parts[0]==="tury" && parts[1]){ html = pageTourDetail(parts[1]); var tt=TOURS.filter(function(x){return x.id===parts[1];})[0]; document.title = tt ? tt.name+" — заказать тур в Хабаровске" : TITLES["tury"]; }
  else if(parts[0]==="tury"){ html = pageTours(); document.title = TITLES["tury"]; }
  else if(parts[0]==="gidy"){ html = pageGuides(); document.title = TITLES["gidy"]; }
  else if(parts[0]==="kontakty"){ html = pageContacts(); document.title = TITLES["kontakty"]; }
  else if(parts[0]==="blog" && parts[1]){ html = pageBlogDetail(parts[1]); var bb=BLOG.filter(function(x){return x.id===parts[1];})[0]; document.title = bb ? bb.title+" — Visit Khabarovsk" : TITLES["blog"]; }
  else if(parts[0]==="blog"){ html = pageBlog(); document.title = TITLES["blog"]; }
  else if(parts[0]==="faq"){ html = pageFAQ(); document.title = TITLES["faq"]; }
  else if(parts[0]==="galereya"){ html = pageGallery(); document.title = TITLES["galereya"]; }
  else if(parts[0]==="izbrannoe"){ html = pageFavorites(); document.title = TITLES["izbrannoe"]; }
  else if(parts[0]==="politika"){ html = pagePrivacy(); document.title = TITLES["politika"]; }
  else { html = pageNotFound(); }

  root.innerHTML = html;
  window.scrollTo(0,0);
  updateFavCount();
  setupReveal();
  if(parts[0]==="tury" && !parts[1]){ updateTourCalc(); }
}

function setupReveal(){
  var els = document.querySelectorAll(".khv-reveal");
  if(!("IntersectionObserver" in window)){ els.forEach(function(el){ el.classList.add("khv-visible"); }); return; }
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){ entry.target.classList.add("khv-visible"); obs.unobserve(entry.target); }
    });
  }, {threshold:0.12});
  els.forEach(function(el){ obs.observe(el); });
}

/* ===================== ВСПОМОГАТЕЛЬНЫЕ ВИДЖЕТЫ ===================== */

function backToTopCheck(){
  var btn = document.getElementById("khv-backtotop");
  if(!btn) return;
  btn.style.display = window.scrollY > 500 ? "flex" : "none";
}
window.addEventListener("scroll", backToTopCheck);
window.scrollToTop = function(){ window.scrollTo({top:0,behavior:"smooth"}); };

window.toggleChat = function(){ document.getElementById("khv-chat-window").classList.toggle("hidden"); };
window.sendChat = function(){
  var input = document.getElementById("khv-chat-input");
  var text = input.value.trim();
  if(!text) return;
  var box = document.getElementById("khv-chat-messages");
  box.innerHTML += '<div class="ml-auto max-w-[85%] rounded-2xl bg-sky-700 px-3 py-2 text-sm text-white" style="margin-left:auto;">'+text+'</div>';
  input.value = "";
  box.scrollTop = box.scrollHeight;
  setTimeout(function(){
    box.innerHTML += '<div class="max-w-[85%] rounded-2xl bg-slate-100 px-3 py-2 text-sm text-slate-700">Спасибо за вопрос! Наш менеджер свяжется с вами в ближайшее время. А пока загляните в раздел «Туры» или «Отели» 😊</div>';
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

if(document.readyState === "loading"){
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

})();

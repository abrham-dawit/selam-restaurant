const MENU = [
  {cat:"Mains", name:"Zigni", am:"ዝግኒ", price:"$21", desc:"Our signature — beef simmered low and slow in berbere sauce with onions and niter kibbeh. Deep heat, deeper flavor.", tags:["Spicy","House favorite"]},
  {cat:"Mains", name:"Tibs", am:"ጥብስ", price:"$20", desc:"Cubed beef or lamb sautéed with onion, jalapeño, rosemary, and spiced butter. Served sizzling.", tags:["Spicy option"]},
  {cat:"Mains", name:"Alicha", am:"አሊጫ", price:"$18", desc:"The mild one — beef or chicken stewed with turmeric, garlic, and ginger. All the comfort, none of the fire.", tags:["Mild"]},
  {cat:"Mains", name:"Kitfo", am:"ክትፎ", price:"$22", desc:"Finely minced lean beef warmed in mitmita and niter kibbeh, served with greens and house cheese. Order it leb-leb (lightly warmed) or fully cooked.", tags:["Spicy","Traditional"]},
  {cat:"Mains", name:"Gored Gored", am:"ጎረድ ጎረድ", price:"$23", desc:"Tender cubed beef, barely seared, tossed in awaze and spiced butter. For the purists.", tags:["Traditional"]},
  {cat:"Mains", name:"Doro Wat", am:"ዶሮ ወጥ", price:"$20", desc:"Chicken stewed in berbere with a whole boiled egg — the celebration dish of Ethiopia, made for holidays and Sundays.", tags:["Spicy","House favorite"]},
  {cat:"Vegetarian", name:"Shiro", am:"ሽሮ", price:"$15", desc:"Ground chickpea stew, rich and silky, cooked with berbere or turmeric. Simple, filling, always on the table.", tags:["Vegan","Fasting-friendly"]},
  {cat:"Vegetarian", name:"Beyaynetu (Veggie Combo)", am:"በያይነቱ", price:"$17", desc:"A tour of the fasting kitchen on one platter: misir wat (red lentils), kik alicha (yellow split peas), gomen (collard greens), atkilt (cabbage & carrots), and salad.", tags:["Vegan","House favorite"]},
  {cat:"Vegetarian", name:"Misir Wat", am:"ምስር ወጥ", price:"$14", desc:"Red lentils simmered in berbere until they melt. The backbone of every fasting platter.", tags:["Vegan","Spicy"]},
  {cat:"Vegetarian", name:"Firfir", am:"ፍርፍር", price:"$15", desc:"Torn injera soaked in wat sauce until it drinks up all the flavor. Yesterday's bread, today's best bite. Ask for shiro or siga (beef) firfir.", tags:["Traditional"]},
  {cat:"Vegetarian", name:"Ful Special", am:"ፉል", price:"$12", desc:"Slow-cooked fava beans mashed with tomato, onion, jalapeño, egg, and yogurt — breakfast that keeps you full till dinner.", tags:["Breakfast"]},
  {cat:"Starters", name:"Sambusa", am:"ሳምቡሳ", price:"$7", desc:"Crisp pastry triangles filled with spiced lentils or seasoned beef. Two per order, gone in a minute.", tags:["Starter"]},
  {cat:"Starters", name:"Timtimo / Lentil Salad", am:"አዝሙድ", price:"$8", desc:"Chilled lentils with onion, jalapeño, and lemon — bright and fresh next to all the rich stews.", tags:["Vegan","Starter"]},
  {cat:"Drinks & Coffee", name:"Bun — Coffee Ceremony", am:"ቡን", price:"$10", desc:"Green coffee roasted in front of you, ground by hand, and brewed in a jebena through three rounds — abol, tona, and bereka. Popcorn on the side, the way it should be.", tags:["Ceremony","For the table"]},
  {cat:"Drinks & Coffee", name:"Macchiato", am:"ማኪያቶ", price:"$4", desc:"Espresso marked with steamed milk foam — the café staple of Asmara and Addis Ababa.", tags:["Coffee"]},
  {cat:"Drinks & Coffee", name:"Shai (Spiced Tea)", am:"ሻይ", price:"$3", desc:"Black tea brewed with cinnamon, cardamom, and cloves.", tags:["Tea"]},
  {cat:"Drinks & Coffee", name:"Spris", am:"ስፕሪስ", price:"$6", desc:"Layered avocado, mango, and papaya juice — the juice-bar classic, poured so the colors stack.", tags:["Juice"]},
];

const grid = document.getElementById('menuGrid');
const chipsBox = document.getElementById('catChips');
let activeCat = 'All';

function buildChips(){
  const cats = ['All', ...new Set(MENU.map(m=>m.cat))];
  chipsBox.innerHTML = '';
  cats.forEach(c=>{
    const b = document.createElement('button');
    b.textContent = c;
    if(c===activeCat) b.classList.add('active');
    b.addEventListener('click', ()=>{ activeCat=c; buildChips(); render(); });
    chipsBox.appendChild(b);
  });
}
function render(){
  grid.innerHTML = '';
  MENU.filter(m=>activeCat==='All' || m.cat===activeCat).forEach(m=>{
    const card = document.createElement('article'); card.className='dish';
    const row = document.createElement('div'); row.className='row';
    const h = document.createElement('h3'); h.textContent = m.name;
    const p = document.createElement('span'); p.className='price'; p.textContent = m.price;
    row.append(h,p);
    const am = document.createElement('p'); am.className='am'; am.textContent = m.am;
    const d = document.createElement('p'); d.textContent = m.desc;
    const tags = document.createElement('div'); tags.className='tags';
    m.tags.forEach(t=>{
      const s = document.createElement('span');
      s.className = 'tag' + ((t==='Vegan') ? ' veg' : (t==='Spicy' ? ' spicy' : ''));
      s.textContent = t; tags.appendChild(s);
    });
    card.append(row, am, d, tags);
    grid.appendChild(card);
  });
}
buildChips(); render();

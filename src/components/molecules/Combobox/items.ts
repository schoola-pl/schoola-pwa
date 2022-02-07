type itemsType = {
  name: string;
  alt: string;
}[];

// After you have created new record in the list below, you have to update 'interested component' in database.
export const items: itemsType = [
  { name: 'sport ⚽️', alt: 'sport' },
  { name: 'muzyka 🎧', alt: 'music' },
  { name: 'gry 🎮', alt: 'games' },
  { name: 'fotografia 📸', alt: 'photography' },
  { name: 'sztuka 🎭', alt: 'piece' },
  { name: 'książki 📕', alt: 'books' },
  { name: 'biznes 📈', alt: 'business' },
  { name: 'netflix 🎥', alt: 'netflix' },
  { name: 'imprezy 🎉', alt: 'events' },
  { name: 'języki 🗣', alt: 'languages' },
  { name: 'biologia 🧬', alt: 'biology' },
  { name: 'informatyka 🧑‍💻', alt: 'IT' },
  { name: 'siłownia 🏋️‍♀️', alt: 'gym' },
  { name: 'matematyka 🔢', alt: 'math' },
  { name: 'gra na instrumentach 🎸', alt: 'instruments' },
  { name: 'fizyka ⚛️', alt: 'physic' },
  { name: 'gotowanie 🍳', alt: 'cooking' },
  { name: 'historia 🏰', alt: 'history' },
  { name: 'podróże ✈️', alt: 'traveling' },
  { name: 'zwierzęta 🐾', alt: 'animals' },
  { name: 'pieczenie 🍰', alt: 'baking' },
  { name: 'bieganie 🏃‍♂️', alt: 'jogging' },
  { name: 'wos 🗽', alt: 'civics' },
  { name: 'makjiaż 💄', alt: 'makeup' },
  { name: 'moda 🛍', alt: 'fashion' },
  { name: 'geografia 🌎', alt: 'geography' },
  { name: 'technologia 🖥', alt: 'technologies' },
  { name: 'chemia 🧪', alt: 'chemistry' },
  { name: 'rozwój osobisty 🏆', alt: 'selfdevelopment' },
  { name: 'śpiew 🎙', alt: 'singing' },
  { name: 'medytacja 🧘‍♂️', alt: 'meditation' },
  { name: 'taniec 🩰', alt: 'dancing' },
  { name: 'malowanie 🎨', alt: 'painting' },
  { name: 'filozofia 📖', alt: 'philosophy' },
  { name: 'szycie 🪡', alt: 'sewing' },
  { name: 'programowanie 📟', alt: 'programming' }
];

// Methods to manipulate the above list
export const getOnlyNames = (items: itemsType) => items.map((item) => item.name);
export const getAltByName = (items: itemsType, name: string) => {
  const filteredItems = items.find((item) => item.name === name) || { alt: 'not-found' };
  return filteredItems.alt;
};

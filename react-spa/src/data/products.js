import chaynik from '../images/chaynik.jpg'
import coffe from '../images/coffe.jpg'
import keyboard from '../images/keyboard.webp'
import laptop from '../images/laptop.webp'
import monitor from '../images/monitor.webp'
import mouse from '../images/mouse.webp'
import naushniki from '../images/naushniki.webp'
import phone from '../images/phone.webp'

export const products = [
  {
    id: 'p1',
    name: 'AirPods Pro 2',
    category: 'Аудио',
    price: 24990,
    image: naushniki,
    description: 'Беспроводные наушники с активным шумоподавлением, адаптивным звуком и футляром с зарядкой.',
    specs: ['Активное шумоподавление', 'Адаптивный звук', 'До 30 часов работы с футляром'],
  },
  {
    id: 'p2',
    name: 'Клавиатура KeyForge 75',
    category: 'Аксессуары',
    price: 8490,
    image: keyboard,
    description: 'Механическая клавиатура формата 75% с горячей заменой переключателей и подсветкой.',
    specs: ['Формат 75%', 'Горячая замена свитчей', 'Подсветка RGB'],
  },
  {
    id: 'p3',
    name: 'Монитор Vision 27',
    category: 'Дисплеи',
    price: 27990,
    image: monitor,
    description: 'IPS-монитор 27 дюймов с разрешением 2560x1440 и частотой обновления 165 Гц.',
    specs: ['27 дюймов', '2560x1440', '165 Гц'],
  },
  {
    id: 'p4',
    name: 'Logitech MX Master 3S',
    category: 'Аксессуары',
    price: 11990,
    image: mouse,
    description: 'Беспроводная мышь с сенсором 8000 DPI, тихими кликами и колесом MagSpeed.',
    specs: ['Сенсор 8000 DPI', 'Колесо MagSpeed', 'До 70 дней работы'],
  },
  {
    id: 'p5',
    name: 'Ноутбук AeroBook 14',
    category: 'Компьютеры',
    price: 74990,
    image: laptop,
    description: 'Лёгкий ноутбук с экраном 14 дюймов, быстрым накопителем и автономностью на весь день.',
    specs: ['14 дюймов', '16 ГБ памяти', 'До 14 часов работы'],
  },
  {
    id: 'p6',
    name: 'Смартфон Nova X',
    category: 'Мобильные',
    price: 39990,
    image: phone,
    description: 'Смартфон с AMOLED-экраном 6.5 дюйма, двойной камерой и быстрой зарядкой.',
    specs: ['AMOLED 6.5 дюйма', 'Двойная камера', 'Быстрая зарядка 65 Вт'],
  },
  {
    id: 'p7',
    name: 'Кофемашина Barista One',
    category: 'Бытовая техника',
    price: 32990,
    image: coffe,
    description: 'Автоматическая кофемашина с встроенной кофемолкой и приготовлением капучино.',
    specs: ['Встроенная кофемолка', 'Автоматическое капучино', 'Резервуар 1.8 л'],
  },
  {
    id: 'p8',
    name: 'Чайник Kettle Pro',
    category: 'Бытовая техника',
    price: 5490,
    image: chaynik,
    description: 'Электрический чайник с регулировкой температуры и поддержанием тепла.',
    specs: ['Регулировка температуры', 'Объём 1.7 л', 'Поддержание тепла'],
  },
]

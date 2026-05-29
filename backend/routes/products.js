import express from 'express'

const router = express.Router()

const products = [
  { id: 1, name: 'Doładowanie 5 PLN', price: 5, coins: 5, isPopular: false, isCustomAmount: false, sortOrder: 1, imageUrl: '/logo.png', productType: 'coins' },
  { id: 2, name: 'Doładowanie 10 PLN', price: 10, coins: 10, isPopular: false, isCustomAmount: false, sortOrder: 2, imageUrl: '/logo.png', productType: 'coins' },
  { id: 3, name: 'Doładowanie 20 PLN', price: 20, coins: 21, isPopular: true, isCustomAmount: false, sortOrder: 3, imageUrl: '/logo.png', productType: 'coins' },
  { id: 4, name: 'Doładowanie 30 PLN', price: 30, coins: 31, isPopular: false, isCustomAmount: false, sortOrder: 4, imageUrl: '/logo.png', productType: 'coins' },
  { id: 5, name: 'Doładowanie 50 PLN', price: 50, coins: 52, isPopular: false, isCustomAmount: false, sortOrder: 5, imageUrl: '/logo.png', productType: 'coins' },
  { id: 6, name: 'Doładowanie dowolne', price: 1, coins: 1, isPopular: false, isCustomAmount: true, sortOrder: 6, imageUrl: '/logo.png', description: 'Wybierz dowolną kwotę od 1 zł do 999 zł', productType: 'coins' },
  
  {
    id: 100,
    name: 'Diamentowy Miecz',
    price: 15,
    coins: 0,
    isPopular: false,
    isCustomAmount: false,
    sortOrder: 100,
    imageUrl: '/logo.png',
    description: 'Diamentowy miecz z Sharpness V',
    productType: 'item',
    rconCommands: [
      'give {nickname} diamond_sword{Enchantments:[{id:"minecraft:sharpness",lvl:5}]} 1'
    ]
  },
  {
    id: 101,
    name: 'Zestaw Diamentowy',
    price: 40,
    coins: 0,
    isPopular: true,
    isCustomAmount: false,
    sortOrder: 101,
    imageUrl: '/logo.png',
    description: 'Pełny zestaw diamentowej zbroi z enchantami',
    productType: 'item',
    rconCommands: [
      'give {nickname} diamond_helmet{Enchantments:[{id:"minecraft:protection",lvl:4}]} 1',
      'give {nickname} diamond_chestplate{Enchantments:[{id:"minecraft:protection",lvl:4}]} 1',
      'give {nickname} diamond_leggings{Enchantments:[{id:"minecraft:protection",lvl:4}]} 1',
      'give {nickname} diamond_boots{Enchantments:[{id:"minecraft:protection",lvl:4}]} 1'
    ]
  },
  {
    id: 102,
    name: 'Ranga VIP',
    price: 25,
    coins: 0,
    isPopular: true,
    isCustomAmount: false,
    sortOrder: 102,
    imageUrl: '/logo.png',
    description: 'Ranga VIP na 30 dni',
    productType: 'item',
    rconCommands: [
      'lp user {nickname} parent add vip',
      'lp user {nickname} permission set vip.prefix true'
    ]
  },
  {
    id: 103,
    name: '64x Diamenty',
    price: 10,
    coins: 0,
    isPopular: false,
    isCustomAmount: false,
    sortOrder: 103,
    imageUrl: '/logo.png',
    description: 'Stack diamentów',
    productType: 'item',
    rconCommands: [
      'give {nickname} diamond 64'
    ]
  },
]

router.get('/', (req, res) => {
  res.json({ ok: true, data: products })
})

router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id))
  if (!product) {
    return res.status(404).json({ ok: false, error: { message: 'Produkt nie znaleziony' } })
  }
  res.json({ ok: true, data: product })
})

export default router
export const formatPrice = (price, currency = 'PLN') => {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(price)
}

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date))
}

export const formatNumber = (num) => {
  return new Intl.NumberFormat('pl-PL').format(num)
}

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

export const calculateBonus = (amount) => {
  if (amount >= 200) return Math.floor(amount * 0.1)
  if (amount >= 100) return Math.floor(amount * 0.08)
  if (amount >= 50) return Math.floor(amount * 0.05)
  if (amount >= 20) return Math.floor(amount * 0.03)
  return 0
}
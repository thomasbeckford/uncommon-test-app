export const formatNumber = (number) => {
  if (number > 999 && number < 1000000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
  } else if (number > 1000000) {
    return (number / 1000000).toFixed(1) + 'm'
  } else if (number < 900) {
    return number
  }
}

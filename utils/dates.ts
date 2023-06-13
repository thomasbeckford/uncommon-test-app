export const formatDate = (dateString: string) => {
  const date = new Date(dateString)

  // Format the month and year
  const monthYearFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  })
  const formattedMonthYear = monthYearFormatter.format(date)

  return formattedMonthYear
}

export const calculateDuration = (dateString: string) => {
  const date = new Date(dateString)
  const currentDate = new Date()

  // Calculate the difference in years and months
  const yearDifference = currentDate.getFullYear() - date.getFullYear()
  const monthDifference = currentDate.getMonth() - date.getMonth()

  return {
    yearsAgo: yearDifference,
    monthsAgo: monthDifference,
  }
}

export const formatDuration = (yearsAgo: number, monthsAgo: number) => {
  if (yearsAgo < 1) {
    const formattedString = `(minted ${monthsAgo} month${
      monthsAgo !== 1 ? 's' : ''
    } ago)`
    return formattedString
  }

  const formattedString = `(minted ${yearsAgo} year${
    yearsAgo > 1 ? 's' : ''
  } ago)`
  return formattedString
}

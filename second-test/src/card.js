import React, { useState, useEffect } from 'react'
import { formatNumber } from './utils/formatNumber'
import './card.css'

const Card = () => {
  const [cardData, setCardData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://uncommon-code-tests.herokuapp.com/collections/azuki-test'
        )
        const { result } = await response.json()
        setCardData(result)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const statLabels = document.querySelectorAll('.stat-label')
    const statNumbers = document.querySelectorAll('.stat-number')
    const handleHover = (e) => {
      const hovered = e.target
      statLabels.forEach((label) => {
        if (label !== hovered) {
          label.classList.add('hovered')
        }
      })
      statNumbers.forEach((number) => {
        if (number !== hovered) {
          number.classList.add('hovered')
        }
      })
    }
    const handleMouseLeave = () => {
      statLabels.forEach((label) => {
        label.classList.remove('hovered')
      })
      statNumbers.forEach((number) => {
        number.classList.remove('hovered')
      })
    }

    statNumbers.forEach((number) => {
      number.addEventListener('mouseover', handleHover)
      number.addEventListener('mouseleave', handleMouseLeave)
    })
  })

  if (!cardData) return <div>No data</div>
  const stats = cardData?.stats
  const floorPrice = (Number(stats.floorPrice) / 1e18).toFixed(2)
  const volume24h = (Number(stats.volume24h) / 1e18).toFixed(2)
  const items = Number(stats.items)
  const owners = Number(stats.owners)

  return (
    <div className="card">
      <img src={cardData?.coverImage} alt="card" className="card-image" />
      <div className="card-content">
        <div className="link">
          <a href="https://uncommon.me">uncommon.me</a>
        </div>

        <div className="card-bottom">
          <img className="thumbnail" src={cardData?.thumbnail} alt="" />
          <div className="flex">
            <h1 className="title">{cardData?.name}</h1>
            <img
              src="https://uncommon-code-tests.herokuapp.com/assets/verified.svg"
              alt="verified"
            />
          </div>

          <div className="stats">
            <div className="stat">
              <p className="stat-label">Floor Price</p>
              <p className="stat-number">{floorPrice}</p>
            </div>
            <div className="stat">
              <p className="stat-label">24H Vol</p>
              <p className="stat-number">{volume24h}</p>
            </div>
            <div className="stat">
              <p className="stat-label">Items</p>
              <p className="stat-number">{formatNumber(items)}</p>
            </div>
            <div className="stat">
              <p className="stat-label">Owners</p>
              <p className="stat-number">{formatNumber(owners)}</p>
            </div>
          </div>
        </div>
        <div className="emoji">🤘</div>
      </div>
    </div>
  )
}

export default Card

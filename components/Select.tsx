'use client'
import { SortContext } from '@/context/sort'
import { useContext } from 'react'

export default function Select() {
  const { sortBy, setSortBy } = useContext(SortContext)

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value)
  }

  let selectedOptionText = 'Sort by Trait floor'
  if (sortBy === 'traitFloor') {
    selectedOptionText = 'Sort by Trait floor'
  } else if (sortBy === 'topOffer') {
    selectedOptionText = 'Sort by Top offer'
  } else if (sortBy === 'traitRarity') {
    selectedOptionText = 'Sort by Trait rarity'
  }

  return (
    <div>
      <select
        name="sortedBy"
        className="border-2 border-uncommon-gray-600 bg-transparent text-uncommon-gray-500 rounded-lg appearance-none px-5 py-1 "
        value={sortBy}
        onChange={handleSelectChange}
      >
        <option value={sortBy} disabled>
          {selectedOptionText}
        </option>
        <option value="traitFloor">Trait floor</option>
        <option value="topOffer">Top offer</option>
        <option value="traitRarity">Trait rarity</option>
      </select>
    </div>
  )
}

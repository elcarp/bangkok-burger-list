import React, { FunctionComponent, useState } from 'react'
import Select from 'react-select'
import data from '../api/burger_places.json'

const burgerPlaces = data.burgerPlaces
const BurgerCard: FunctionComponent = () => {
	const locationOptions = burgerPlaces.map(({ location }) => {
		return { label: location, value: location }
	})
	const [selectedLocation, setSelectedLocation] = useState<any>()

	const burgerData = burgerPlaces.map(
		({ name, location, price_range, ranking, delivery, tags, description }) => {
			return (
				<>
					<div className='bg-white rounded-lg text-left w-full md:w-1/2 mt-10 p-4 shadow-lg mx-auto'>
						<div className='w-full md:w-3/4 grid grid-cols-2'>
							<label>Name</label> <span className='capitalize'>{name}</span>
							<label>Location</label>{' '}
							<span className='capitalize'>{location.join(', ')}</span>
							<label>Price</label>{' '}
							<span className='capitalize'>{price_range}</span>
							<label>Ranking</label>{' '}
							<span className='capitalize'>{ranking}</span>
							<label>Delivery</label>{' '}
							<span className='capitalize'>{delivery.join(', ')}</span>
							<label>Tags</label>{' '}
							<span className='capitalize'>{tags.join(', ')}</span>
							{/* <label>Description</label>{' '} */}
							{/* <span className='capitalize'>{description}</span> */}
						</div>
					</div>
				</>
			)
		}
	)
	return (
		<>
			<Select
				value={selectedLocation}
				required={true}
				options={locationOptions}
				onChange={setSelectedLocation}
				placeholder='Select Currency'
			/>
			{burgerData}
		</>
	)
}

export default BurgerCard

import React, { FunctionComponent, useState } from 'react'
import Select from 'react-select'
import data from '../api/burger_places.json'

const burgerPlaces = data.burgerPlaces
const BurgerCard: FunctionComponent = () => {
	const locationOptions = burgerPlaces.map(({ location }) => {
		return { label: location, value: location }
	})
	const priceOptions = [
		{ label: '$', value: '$' },
		{ label: '$$', value: '$$' },
		{ label: '$$$', value: '$$$' },
		{ label: '$$$$', value: '$$$$' },
	]
	const deliveryOption = [
		{ label: 'Food Panda', value: 'food_panda' },
		{ label: 'LINE MAN', value: 'line_man' },
		{ label: 'GrabFood', value: 'grab_food' },
		{ label: 'GoJek', value: 'go_jek' },
    ]
    const tagOptions = burgerPlaces.map(({ tags }) => {
		return { label: tags, value: tags }
	})
	const [selectedLocation, setSelectedLocation] = useState<any>()
	const [selectedPriceRange, setSelectedPriceRange] = useState<any>()
    const [selectedDeliveryOption, setSelectedDeliveryOption] = useState<any>()
    const [selectedTagOptions, setSelectedTagOptions] = useState<any>()



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
			<div className='filter-wrapper w-full md:w-3/4 justify-center mt-10 block md:flex mx-auto'>
				<Select
					value={selectedLocation}
					required={true}
					options={locationOptions}
					onChange={setSelectedLocation}
					placeholder='Location'
					className='text-left w-1/4 z-50 mx-4'
				/>
				<Select
					value={selectedPriceRange}
					required={true}
					options={priceOptions}
					onChange={setSelectedPriceRange}
					placeholder='Price'
					className='text-left w-1/4 z-50 mx-4'
				/>
				<Select
					value={selectedDeliveryOption}
					required={true}
					options={deliveryOption}
					onChange={setSelectedDeliveryOption}
					placeholder='Delivery'
					className='text-left w-1/4 z-50 mx-4'
				/>
				<Select
					value={selectedTagOptions}
					required={true}
					options={tagOptions}
					onChange={setSelectedTagOptions}
					placeholder='Tags'
					className='text-left w-1/4 z-50 mx-4'
				/>
			</div>
			{burgerData}
		</>
	)
}

export default BurgerCard

import React, { FunctionComponent } from 'react'
import data from '../api/burger_places.json'

const burgerPlaces = data.burgerPlaces

const BurgerCard: FunctionComponent = () => {
	const burgerData = burgerPlaces.map(({ name, location, price_range, ranking, delivery, tags, description }: any) => {
		return (
			<>
				<div className='bg-white rounded-lg text-left w-1/2 mt-10 p-4'>
					<div className='w-3/4 grid grid-cols-2'>
						<label>Name</label> {name}
						<label>Location</label> {location}
                        <label>Price</label> {price_range}
                        <label>Ranking</label> {ranking}
                        <label>Delivery</label> {delivery}
                        <label>Tags</label> {tags}
                        <label>Description</label> {description}

					</div>
				</div>
			</>
		)
	})
	return <>{burgerData}</>
}

export default BurgerCard

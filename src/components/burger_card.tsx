import React, { FunctionComponent } from 'react'
import data from '../api/burger_places.json'
console.log(data)
const burgerPlaces = data.burgerPlaces

const BurgerCard: FunctionComponent = () => {
	const burgerData = burgerPlaces.map(({ name }: any) => {
		return (
			<>
				<div className='bg-white rounded-lg flex w-1/2 mt-10 p-4'>
					Name: {name}
				</div>
			</>
		)
	})
	console.log('data?', burgerData)
	return <>{burgerData}</>
}

export default BurgerCard

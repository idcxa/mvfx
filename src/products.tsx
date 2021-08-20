import { useState } from "react";
import './App.scss'
import './styles/controls.scss'

const products = [
	{
		row: [100, 200, 400],
		product: 'Rendering',
	},
	{
		row: [200, 400, 800],
		product: 'Animation',
	},
	{
		row: [100, 200, 400],
		product: '3D Modelling',
	},
	{
		row: [100, 200, 600],
		product: 'Full Product Design',
	},
]

export default function Products() {

  const [checkedState, setCheckedState] = useState(
    new Array(products.length).fill(Array(4).fill(false))
  );

	const [total, setTotal] = useState(0);

	const onInputChange = (index1: number, index2: number) => {

		const updatedCheckedState = checkedState.map((row, i) =>
			i === index1 ?
			row.map((_ : any, j : number) =>
				j === index2 ? true : false
			) : row
		);

		setCheckedState(updatedCheckedState);
		console.table(checkedState)

    const price = updatedCheckedState.reduce(
      (sum, row, i) => {
				return sum + row.reduce(
					(s: any, x: any, j: number) => {
						return j === 3
							? s
							: s + (x ? (products[i].row[j]) : 0
						)
					}, 0)
      }, 0);
		setTotal(price);
	}


	return (
		<>
			<div className='div1 sm:text-sm md:text-md'>
				<div className='tbl'>
					<div className='row'>
						<div className='cell'></div>
						<div className='cell'>
							<h2>Not Low Quality</h2>
						</div>
						<div className='cell'>
							<h2>Medium Quality</h2>
						</div>
						<div className='cell'>
							<h2>High Quality</h2>
						</div>
						<div className='cell'>
							<h2>None</h2>
						</div>
					</div>
					{products.map((val, index1) => {
						return (
							<div>
								<div className='row'>
									<div className='cell'>
										<h3>
											{val.product}
										</h3>
									</div>
									{val.row.map((x, index2) => {
										return (
											<div
												className='cell p-4'
												>
												<input
													type="radio"
													name={val.product}
													value="1"
													id={val.product+x}
													onChange={() => onInputChange(index1, index2)}
													checked={checkedState[index1][index2]}/>
												<label htmlFor={val.product+x}>{x}</label>
											</div>
										);
									})}

									<div className='cell p-4'>
										<input
											type="radio"
											name={val.product}
											value="1"
											id={val.product}
											onChange={() => onInputChange(index1, 3)}
											checked={checkedState[index1][3]}/>
										<label htmlFor={val.product}></label>
									</div>
								</div>
							</div>
						);
					})}
				<div>
					<p>
						{total}
					</p>
				</div>
				</div>
			</div>
		</>
	)
}

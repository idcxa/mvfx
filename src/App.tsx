import { useState } from "react";
import './App.scss'
import './styles/controls.scss'

const values = [
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
		row: [100, 200, 400],
		product: 'Full Product Design',
	},
]

export default function App() {

  const [checkedState, setCheckedState] = useState(
    new Array(values.length).fill(Array(4).fill(false))
  );

	const [total, setTotal] = useState(0);

	const onInputChange = (index1: number, index2: number) => {
		console.table(checkedState)
		const updatedCheckedState = checkedState.map((x, i) =>
			i === index1 ? index2 : x
			//i === index1 ? !item : item
		);
		setCheckedState(updatedCheckedState);

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
					{values.map((val, index1) => {
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
													checked/>
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
											checked/>
										<label htmlFor={val.product}></label>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	)
}

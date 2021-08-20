export default function Header() {
	return (
		<>
			<nav className='flex flex-row-wrap p-2'>
				<div className='flex-start'>
				<a className="text-2xl text-purple" href="/">Job Pricing</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
			</div>
			<div className='flex-end'>
				<a className='text-xl text-magenta' href='/'> Contact </a>
			</div>
			</nav>
		</>
	)
}

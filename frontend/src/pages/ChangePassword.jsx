import { useState } from 'react'

const ChangePassword = () => {
	const [formData, setFormData] = useState({
		password: '',
		newPassword: '',
		newPassword2: ''
	});

	const { password, newPassword, newPassword2 } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<section className='heading'>
				<h1>
					Choose a new Password
				</h1>
			</section>

			<section className="form">
				<form onSubmit={handleSubmit}>
					<div className='form-group'>
						<input
						type='text'
						className='form-control'
						id='name'
						name='newUsername'
						value={password}
						placeholder='Old password'
						onChange={onChange}
						/>
					</div>
					<div className='form-group'>
						<input
						type='password'
						className='form-control'
						id='password'
						name='password'
						value={newPassword}
						placeholder='Enter new password'
						onChange={onChange}
						/>
					</div>

					<div className='form-group'>
						<input
						type='password'
						className='form-control'
						id='password'
						name='password'
						value={newPassword2}
						placeholder='Confirm password'
						onChange={onChange}
						/>
					</div>
					<div className='form-group'>
						<button type='submit' className='btn btn-block'>
						Submit
						</button>
					</div>
				</form>
			</section>
		</div>
	)
}

export default ChangePassword
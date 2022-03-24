import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { updateUsername, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const ChangeUsername = () => {
	const [formData, setFormData] = useState({
		newUsername: '',
		password: ''
	});

	const { newUsername, password } = formData;

	const navigate = useNavigate()
 	const dispatch = useDispatch()

  	const { user, isLoading, isError, isSuccess, message } = useSelector(
    	(state) => state.auth
 	)

	useEffect(() => {
		if (isError) {
			toast.error(message)
		}
	
		dispatch(reset())
	}, [user, isError, isSuccess, message, navigate, dispatch])

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			newName: newUsername,
		}

		dispatch(updateUsername(data));
	};

	if (isLoading) {
		return <Spinner />
	}

	return (
		<div>
			<section className='heading'>
				<h1>
					Choose a new Username
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
						value={newUsername}
						placeholder='Enter your name'
						onChange={onChange}
						/>
					</div>
					<div className='form-group'>
						<input
						type='password'
						className='form-control'
						id='password'
						name='password'
						value={password}
						placeholder='Enter password'
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

export default ChangeUsername
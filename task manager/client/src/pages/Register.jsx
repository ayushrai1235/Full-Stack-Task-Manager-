import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Textbox from '../components/Textbox.jsx' 
import Button from '../components/Button.jsx'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { useRegisterMutation } from '../redux/slices/api/authApiSlice.js'

const Register = () => {
  const {user} = useSelector(state => state.auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [registerUser, {isLoading}] = useRegisterMutation();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    try {
      if (data.password !== data.confirmPassword) {
        toast.error("Passwords don't match!");
        return;
      }
       const result = await registerUser(data).unwrap();
       toast.success("New User Added successfully");
       navigate("/login");
    }
     catch (error) {
      toast.error(error?.data?.message);
    }
    
  }
  useEffect(() => {
    user && navigate('/login');
  }, [user]);

  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]'>
      <div className='w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'>
        {/* left side */}
        <div className='h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>
        <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20'>
          <span className='flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-gray-600'>
            Manage all the task in one place
          </span>
          <p className='flex flex-col gap-0 md:gap-4 text-center text-4xl md:text-6xl font-black text-blue-700'>
            <span>An Powerfull</span>
            <span>Task Manager</span>
          </p>

          <div className='cell'>
            <div className='circle rotate-in-up-left'></div>
          </div>
        </div>
        </div>
        {/* right side */}
        <div className='w-full md:w-1/3 p-4 md:p-1 flex flex-col items-center justify-center'>
          <form onSubmit={handleSubmit(submitHandler)} 
        className='form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14'>
          <div className=''>
            <p className='text-blue-600 text-3xl font-bold text-center'>Get Register </p>
            <p className='text-center text-base text-gray-700'>
              Keep all your crdential safe and secure
            </p>
          </div>

          <div className='flex flex-col gap-y-5'>
            <Textbox 
              placeholder='Full Name'
              type='text'
              name='name'
              label='Full Name'
              className='w-full rounded-full'
              register={register('name', { required: 'Full name is required' })}
              error={errors.fullName ? errors.fullName.message : ""}
            />

            <Textbox 
              placeholder='Email'
              type='email'
              name='email'
              label='Email Address'
              className='w-full rounded-full'
              register={register('email', { required: 'Email is required' })}
              error={errors.email ? errors.email.message : ""}
            />

            <Textbox 
              placeholder='Your Title'
              type='text'
              name='title'
              label='Title'
              className='w-full rounded-full'
              register={register('title', { required: 'Title is required' })}
              error={errors.title ? errors.title.message : ""}
            />

            <Textbox 
              placeholder='Your Role'
              type='text'
              name='role'
              label='Role'
              className='w-full rounded-full'
              register={register('role', { required: 'Role is required' })}
              error={errors.role ? errors.role.message : ""}
            />

            <Textbox 
              placeholder='Enter Your Password'
              type='password'
              name='password'
              label='Password'
              className='w-full rounded-full'
              register={register('password', { required: 'Password is required' })}
              error={errors.password ? errors.password.message : ""}
            />

            <Textbox 
              placeholder='Confirm Password'
              type='password'
              name='confirmPassword'
              label='Confirm Password'
              className='w-full rounded-full'
              register={register('confirmPassword', { 
                required: 'Please confirm your password',
                validate: (val) => {
                  if (watch('password') != val) {
                    return "Passwords do not match";
                  }
                }
              })}
              error={errors.confirmPassword ? errors.confirmPassword.message : ""}
            />

            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                id='isAdmin'
                {...register('isAdmin')}
                className='w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500'
              />
              <label htmlFor='isAdmin' className='text-sm text-gray-700'>
                Register as Admin
              </label>
            </div>

            <span className='text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer'>
              Forget Password?
            </span>
            <span className='text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer'>
              <Link to="/login">Already logged in? Go to Login</Link>
            </span>
        
            <Button
              type='submit'
              label='Submit'
              className='w-full h-10 bg-blue-700 text-white rounded-full'
            />
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
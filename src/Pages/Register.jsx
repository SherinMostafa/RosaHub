import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { Toaster, toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const toastId = toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-xl w-full bg-white shadow-lg rounded-lg pointer-events-auto flex`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-[#02ec88]">
                Registration successful!
              </p>
              <p className="mt-1 text-sm text-[#bebab3]">
                You have successfully registered. Welcome aboard!
              </p>
            </div>
          </div>
        </div>
      </div>
    ), { duration: 2000 });
  
    reset();
  
    setTimeout(() => {
      toast.dismiss(toastId);
      navigate('/Login');
    }, 2000);
  };
  

  return (
    <section>
      <div className="max-h-screen bg-white flex flex-col-reverse md:flex-row">
        <div className="w-full h-[0px] md:h-screen md:w-1/2">
          <img
            src="/Assets/Images/pexels-scottwebb-305821.jpg"
            alt="Register"
            className="w-full h-full object-cover rounded-t-sm md:rounded-l-sm md:rounded-none"
            style={{ height: '100%' }}
          />
        </div>

        <div className="w-full md:w-1/2 py-4 flex flex-col justify-start bg-white">
          <Toaster
            position="top-center"
          />

          <Link to={'/'}>
              <h2 className="text-xl px-2 sm:px-6 lg:px-8 font-bold text-[#02ec88] mt-[2px]">RosaHub</h2>
          </Link>
          
          <h2 className="text-2xl text-[#010101] font-bold mx-auto mt-4 md:mt-0">Register</h2>
          <h4 className="text-sm text-[#bebab3] font-semibold mx-auto mb-4 ">Create your new account</h4>

          <form className="p-6 px-10 space-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex space-x-4">
              <div className="flex-1">
                <Input 
                  label="First Name"
                  type="text"
                  float={false}
                  error={errors.FirstName}
                  {...register('FirstName', { 
                    required: 'First Name is required',
                    minLength: { 
                      value: 3, 
                      message: 'First Name must be at least 3 characters'
                    }
                  })}
                />
                {errors.FirstName && (
                  <p className="text-[#e53529] text-sm font-semibold mb-4">
                    {errors.FirstName.message}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <Input 
                  label="Last Name"
                  type="text"
                  float={false}
                  error={errors.LastName}
                  {...register('LastName', { 
                    required: 'Last Name is required',
                    minLength: { 
                      value: 3, 
                      message: 'Last Name must be at least 3 characters'
                    }
                  })}
                />
                {errors.LastName && (
                  <p className="text-[#e53529] text-sm font-semibold mb-4">
                    {errors.LastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <Input 
                label="Email"
                type="email"
                float={false}
                error={errors.Email}
                {...register('Email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email is invalid'
                  }
                })}
              />
              {errors.Email && (
                <p className="text-[#e53529] text-sm font-semibold">
                  {errors.Email.message}
                </p>
              )}
            </div>

            <div className="mb-4 flex space-x-4">
              <div className="flex-1">
                <Input 
                  label="Password"
                  type="password"
                  float={false}
                  visibilityToggle={true}
                  error={errors.Password}
                  {...register('Password', { 
                    required: 'Password is required',
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/,
                      message: 'Password must include at least 8 characters, with one uppercase letter, one lowercase letter, one number and one special character'
                    }
                  })}
                />
                {errors.Password && (
                  <p className="text-[#e53529] text-sm font-semibold mb-4">
                    {errors.Password.message}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <Input 
                  label="Confirm Password"
                  type="password"
                  float={false}
                  error={errors.ConfirmPassword}
                  {...register('ConfirmPassword', { 
                    required: 'Confirm Password is required',
                    validate: value => value === watch('Password') || 'Passwords do not match'
                  })}
                />
                {errors.ConfirmPassword && (
                  <p className="text-[#e53529] text-sm font-semibold mb-4">
                    {errors.ConfirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            <Button
              label="Register"
              className="w-full flex justify-center py-3 text-white bg-[#5cb25d] hover:bg-[#0f9015] mt-4 mb-6"
              type="submit"
            />

            <div className="relative flex items-center justify-center pb-4">
              <div className="absolute inset-x-0 border-t border-[#010101]" />
              <span className="relative bg-white px-4 text-sm text-[#010101] font-medium">or</span>
            </div>

            <p className="text-[#010101] text-sm font-semibold text-center">
              Already have an account?
              <Button
                label="Login"
                link={true}
                to='/Login'
                className="text-[#5cb25d] hover:text-[#0f9015] font-bold p-0 -ml-2"
                type="submit"
              />
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;

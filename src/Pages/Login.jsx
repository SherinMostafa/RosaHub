import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    reset();
    navigate('/');
  };

  return (
    <section>
      <div className="min-h-screen bg-white flex flex-col md:flex-row-reverse">
        <Link to={'/'}>
            <h2 className="text-xl my-[18px] px-2 sm:px-6 lg:px-8 font-bold text-[#02ec88]">RosaHub</h2>
        </Link>

        <div className="w-full h-0 md:h-screen md:w-1/2">
          <img
            src="/Assets/Images/pexels-scottwebb-305821.jpg"
            alt="Register"
            className="w-full h-full object-cover rounded-t-sm md:rounded-l-sm md:rounded-none"
            style={{ height: '100%' }}
          />
        </div>

        <div className="w-full md:w-1/2 py-4 flex flex-col justify-center bg-white">
          <h2 className="text-2xl text-[#010101] font-bold mx-auto mt-4 md:mt-0">Welcome</h2>
          <h4 className="text-sm text-[#bebab3] font-semibold mx-auto mb-4 ">Login into your account</h4>

          <form className="p-6 px-10 space-4" onSubmit={handleSubmit(onSubmit)}>
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
            <div className="mb-4">
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
                    message: 'Password is invalid'
                  }
                })}
              />
              {errors.Password && (
                <p className="text-[#e53529] text-sm font-semibold">
                  {errors.Password.message}
                </p>
              )}
            </div>

            <Button
              label="Login"
              className="w-full flex justify-center py-3 text-white bg-[#5cb25d] hover:bg-[#0f9015] mt-8 mb-6"
              type="submit"
            />

            <div className="relative flex items-center justify-center pb-4">
              <div className="absolute inset-x-0 border-t border-[#010101]" />
              <span className="relative bg-white px-4 text-sm text-[#010101] font-medium">or</span>
            </div>

            <p className="text-[#010101] text-sm font-semibold text-center">
              Don't have an account?
              <Button
                label="Sign up"
                link={true}
                to='/Register'
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

export default Login;

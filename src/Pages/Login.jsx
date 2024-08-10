import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Components/Input';
import Button from '../Components/Button';

const Login = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    reset();
  };

  return (
    <section>
      <div className="min-h-screen relative bg-white rounded-sm shadow-md flex flex-col md:flex-row-reverse">
        <div className="relative w-full h-60 md:h-auto md:w-1/2">
          <img
            src="/Assets/Images/pexels-scottwebb-305821.jpg"
            alt="Register"
            className="w-full h-full object-cover rounded-t-sm md:rounded-l-sm md:rounded-none"
            style={{ height: '100%' }}
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-t-sm md:rounded-l-sm md:rounded-none"></div>
          <div className="absolute inset-0 px-8 md:p-10 flex flex-col justify-center text-center text-white z-10 font-bold">
            <h2 className="text-2xl md:text-4xl text-[#02ec88]">RosaHub</h2>
            <p className="mt-8 px-4 text-white text-sm sm:text-base">
              Unlock expert plant care tips to help your plants thrive. Join us today!
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center bg-white">
          <h2 className="text-2xl text-[#010101] font-bold mx-auto mt-4 md:mt-0">Welcome</h2>
          <h4 className="text-sm text-[#bebab3] font-semibold mx-auto mb-4 ">Login into your account</h4>

          <form className="p-6 space-4" onSubmit={handleSubmit(onSubmit)}>
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
              className="w-full flex justify-center py-4 text-white bg-[#5cb25d] hover:bg-[#0f9015] mt-4 mb-6"
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

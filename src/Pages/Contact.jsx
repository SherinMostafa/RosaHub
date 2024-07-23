import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { Toaster, toast } from 'react-hot-toast';
import { IoClose } from 'react-icons/io5';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = data => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-[#02ec88]">
                Thank you for getting in touch!
              </p>
              <p className="mt-1 text-sm text-[#bebab3]">
                We'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-[#02ec88]">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-[#5cb25d] hover:text-[#0f9015] focus:outline-none"
          >
            <IoClose className="h-5 w-5" />
          </button>
        </div>
      </div>
    ));

    reset();
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white rounded-sm shadow-md flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2">
            <img
              src="/Assets/Images/pexels-scottwebb-305821.jpg"
              alt="Contact Us"
              className="w-full h-full object-cover rounded-t-sm md:rounded-l-sm md:rounded-none"
              style={{ height: '100%' }}
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-t-sm md:rounded-l-sm md:rounded-none"></div>
            <div className="absolute inset-0 px-8 md:p-10 flex flex-col justify-center text-center md:justify-start md:text-left text-white z-10 font-bold">
              <h2 className="text-4xl md:text-5xl text-[#e6ca51]">Get in Touch</h2>
              <p className="mt-8 text-white text-sm sm:text-base">We would love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center bg-white">
            <Toaster
              position="top-center"
              toastOptions={{
                duration: 3000,
              }}
            />
            <form className="p-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <Input 
                  label="Name"
                  type="text"
                  float={false}
                  error={errors.Name}
                  {...register('Name', { 
                    required: 'Name is required',
                    minLength: { 
                      value: 3, 
                      message: 'Name must be at least 3 characters'
                    }
                  })}
                />
                {errors.Name && <p className="text-[#e53529] text-sm font-semibold">{errors.Name.message}</p>}
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
                      value: /^\S+@\S+$/i,
                      message: 'Email is invalid'
                    },
                  })}
                />
                {errors.Email && <p className="text-[#e53529] text-sm font-semibold">{errors.Email.message}</p>}
              </div>
              <div className="mb-4">
                <Input 
                  label="Message"
                  type="text"
                  float={false}
                  textarea={true}
                  rows="4"
                  error={errors.Message}
                  {...register('Message', { 
                    required: 'Message is required',
                    maxLength: { 
                      value: 150, 
                      message: 'Message must not exceed 150 characters'
                    }
                })}
                />
                {errors.Message && <p className="text-[#e53529] text-sm font-semibold">{errors.Message.message}</p>}
              </div>
              <Button
                label="Send Message"
                className="w-full flex justify-center py-4 text-white bg-[#5cb25d] hover:bg-[#0f9015]"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

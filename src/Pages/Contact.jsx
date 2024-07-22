import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = data => {
    toast.success("Thank you for getting in touch! We'll get back to you as soon as possible.", {
      autoClose: 3000, // Toast will close after 3 seconds
      closeOnClick: true,
      closeButton: true
    });
    reset();
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#010101]">Get in Touch</h2>
          <p className="mt-4 text-[#484847] font-semibold">We would love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2 p-4">
            <ToastContainer
              position="top-center"
              autoClose={3000}
              closeOnClick={true}
              closeButton={true}
              draggable={false}
              theme="light"
              transition="Slide"
            />
            <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit(onSubmit)}>
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
                {errors.Name && <p className="text-[#e53529]">{errors.Name.message}</p>}
              </div>
              <div className="mb-4">
                <Input 
                  label="Email"
                  type="email"
                  float={false}
                  error={errors.Email}
                  {...register('Email', { required: 'Email is required' })}
                />
                {errors.Email && <p className="text-[#e53529]">{errors.Email.message}</p>}
              </div>
              <div className="mb-4">
                <Input 
                  label="Message"
                  type="text"
                  float={false}
                  textarea={true}
                  rows="4"
                  error={errors.Message}
                  {...register('Message', { required: 'Message is required' })}
                />
                {errors.Message && <p className="text-[#e53529]">{errors.Message.message}</p>}
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

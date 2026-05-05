import React from "react";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export interface ContactFormFieldsProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errors: Errors;
}

const ContactFormFields: React.FC<ContactFormFieldsProps> = ({
  formData,
  handleChange,
  errors,
}) => {
  return (
    <>
      <div className="mb-5 ">
      <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Name"
  style={{ color: "#747474", backgroundColor: "#F3F3F3" }}
  className={`w-full   p-3 border-2 ${errors.name ? "border-red-500" : "border-transparent"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
/>
        {errors.name && <div className="text-red-500 text-sm mt-1 ml-[33px]">{errors.name}</div>}
      </div>

      <div className="mb-5 w-full">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          style={{color:"#747474",backgroundColor:" #F3F3F3"}}
          className={` w-full p-3 border-2 ${errors.name ? "border-red-500" : "border-transparent"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.email && <div className="text-red-500 text-sm mt-1 ml-[33px]">{errors.email}</div>}
      </div>

      <div className="mb-5">
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          style={{color:"#747474",backgroundColor:" #F3F3F3"}}
          className={` w-full p-3 border-2 ${errors.name ? "border-red-500" : "border-transparent"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.phone && <div className="text-red-500 text-sm mt-1 ml-[33px]">{errors.phone}</div>}
      </div>

      <div className="mb-5">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows={4}
          style={{color:"#747474",backgroundColor:" #F3F3F3"}}
          className={` w-full  p-3 border-2 ${errors.name ? "border-red-500" : "border-transparent"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.message && <div className="text-red-500 text-sm mt-1 ml-[33px]">{errors.message}</div>}
      </div>
      
    </>
  );
};

export default ContactFormFields;

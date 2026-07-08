"use client";

import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import BgLines from "../BgLines";

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .required(" Phone No is required")
    .matches(/^\+1\s?[0-9]{10,15}$/, "Phone number must be 11 digits")
    .nullable(),
  message: Yup.string().required("Message is required"),
});

const ContactFormSection = () => {
  const handleSubmit = async (
    values: any,
    { setSubmitting, resetForm }: any,
  ) => {
    const { name, email, phone, message } = values;

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const result = await response.text();

      // Show success message
      toast.success("Your message has been sent successfully!", {
        description: "We will get back to you shortly.",
      });

      // Reset form after success
      resetForm(); // This will clear the form fields

      setSubmitting(false);
    } catch (error: any) {
      toast.error(
        "There was an issue sending your message. Please try again.",
        {
          description: "Please check your information and try again.",
        },
      );
      setSubmitting(false);
    }
  };

  return (
    <>
      {" "}
      <div className="container mx-auto px-4 py-8  max-w-7xl ">
        <div className="grid md:grid-cols-2 gap-8 lg:my-10 my-0 ">
          <div className="flex flex-col justify-center w-full">
            <h2 className="text-[26px] lg:text-[45px] font-medium lg:leading-15 text-[#0D378D] uppercase mb-2">
              Have a project in <br /> mind or have <br /> questions?
            </h2>
            <p className="text-muted-foreground mb-4 text-black">
              Get in touch with our{" "}
              <a href="https://www.primopainters.ca/" className="text-blue">
                expert painters in Calgary
              </a>
              . We’d be <br />
              happy to help bring your vision to life!
            </p>
          </div>

          <div className="w-full mx-auto  relative z-5 bg-white">
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "+1", // Default value with country code
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              className="w-full "
            >
              {({
                isSubmitting,
                values,
                handleChange,
                handleBlur,
                setFieldValue,
              }) => (
                <Form className="space-y-14 shadow-2xl p-5 ">
                  <div className="grid grid-cols-1 gap-8">
                    <div className="flex flex-col ">
                      <Field
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="border-0 bg-[#F3F3F3] text-black p-2"
                        placeholder="Name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-600 text-sm mt-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <Field
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="border-0 bg-[#F3F3F3] text-black p-2"
                        placeholder="Email Address"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-600 text-sm mt-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <Field
                        name="phone"
                        type="text"
                        placeholder="Phone Number"
                        className="border-0 bg-[#F3F3F3] text-black p-2"
                        value={values.phone}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          const value = e.target.value;
                          if (/^\+1\s?[0-9]{0,15}$/.test(value)) {
                            setFieldValue("phone", value);
                          }
                        }}
                        // onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-600 text-sm mt-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <Field
                        as="textarea"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="border-0 bg-[#F3F3F3] text-black p-2"
                        placeholder="Message"
                        rows={4}
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-red-600 text-sm mt-1"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#0D378D] hover:bg-primary/90 text-white cursor-pointer"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Submit"}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default ContactFormSection;

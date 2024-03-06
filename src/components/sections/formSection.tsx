"use client"

import React, { useState } from "react";
import CustomInput from "../customInput";

const FormSection = ({ data: { headingText, subText, fields } }: { data: any }) => {
  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: ""
  })
  console.log('formData: ', formData)

  const handleChange = (e: any) => {
    setFormData({
      [e.target.name]: e.target.value
    })
  }

  return (
    <article className="w-full flex flex-col gap-[20px] sm:gap-[30px] items-center justify-center mb-12">
      <h2 className="text-center sm:text-left text-2xl sm:text-4xl lg:text-5xl font-semibold text-neutral">
        {headingText}
      </h2>
      <h3 className="text-center sm:text-left text-xl sm:text-2xl lg:text-3xl font-medium text-neutral text-[#0e7dc2]">
        {subText}
      </h3>
      <div className="w-full lg:w-[60%] grid grid-cols-2 gap-6 my-6">
        {
          fields.map((field: any) => (
            <CustomInput
              key={field.name}
              type={field.type}
              labelText={field.labelText}
              name={field.name}
              placeholder={field.placeholder}
              isFullWidth={field.isFullWidth}
              value={formData[field.name]}
              onChange={handleChange}
            />)
          )
        }
      </div>
      <button className="relative rounded h-[50px] px-4 w-full bg-[#268ac8] lg:w-[350px] shadow-lg overflow-hidden justify-start text-center text-white cursor-pointer">
        <p className="z-[2] w-full text-xl font-semibold text-center drop-shadow-lg h-full my-auto flex items-center justify-center">Submit</p>
      </button>
    </article>
  );
};

export default FormSection;

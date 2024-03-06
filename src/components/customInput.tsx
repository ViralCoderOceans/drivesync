import React from 'react'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CustomInput = ({
  key,
  labelText,
  name,
  placeholder,
  value,
  onChange,
  type = "text",
  isFullWidth = false
}: {
  key: string,
  labelText: string,
  name: string,
  placeholder: string,
  value: any,
  onChange: any,
  type?: string,
  isFullWidth?: boolean
}) => {
  return (
    <div key={key} className={`${isFullWidth ? "col-span-2" : "col-span-2 md:col-span-1"} flex flex-col gap-y-2`}>
      <Label
        className="text-base font-medium capitalize"
      >
        {labelText}
      </Label>
      {
        !(type === "textarea") &&
        <Input
          className="rounded text-base font-normal py-2 h-auto border border-[#e8e8e8] shadow-none"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      }
      {
        (type === "textarea") &&
        <textarea
          className="rounded text-base font-normal p-2 h-auto border border-[#e8e8e8]"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      }
    </div >
  )
}

export default CustomInput

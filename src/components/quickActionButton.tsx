import Link from 'next/link'
import React from 'react'

const QuickActionButton = ({ themeColor, text }: { themeColor: any, text: string }) => {
  return (
    <Link
      href={"/#home"}
      className="relative rounded h-[50px] px-4 w-full lg:w-[350px] shadow-lg overflow-hidden justify-start text-center text-white"
      style={{ backgroundImage: `linear-gradient(to right, ${themeColor?.bgGradient[0] ?? "#0d71af"}, ${themeColor?.bgGradient[1] ?? "#268ac8"}` }}
    >
      <div
        className={`absolute z-1 top-[-30px] left-[-5px] h-[60px] w-[90px] rounded-[50%] transition-all`}
        style={{ backgroundImage: `linear-gradient(to right, ${themeColor?.shapesGradient[0] ?? "#084b74"}, ${themeColor?.shapesGradient[1] ?? "#268ac8"}` }}
      />
      <div
        className={`absolute z-1 bottom-[-30px] right-[-5px] h-[60px] w-[90px] rounded-[50%] transition-all`}
        style={{ backgroundImage: `linear-gradient(to right, ${themeColor?.shapesGradient[1] ?? "#268ac8"}, ${themeColor?.shapesGradient[0] ?? "#084b74"}` }}
      />
      <h2 className="z-[2] w-full text-xl font-semibold text-center drop-shadow-lg h-full my-auto flex items-center justify-center">{text}</h2>
    </Link>
  )
}

export default QuickActionButton

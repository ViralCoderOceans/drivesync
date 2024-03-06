import React from 'react'

const BreakLine = ({ text }: { text: any }) => {
  return (
    <>
      {text &&
        Array.isArray((text))
        ? <>
          {
            text.map((elm: any) => (
              <span key={`br-${Math.random().toString()}`}>
                {elm}
                <br />
              </span>
            ))
          }
        </>
        : <>{text}</>
      }
    </>
  )
}

export default BreakLine
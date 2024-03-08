export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white text-black px-4 min-h-[80vh] flex justify-center items-center pt-[70px] md:pt-[100px] lg:pt-[120px]">
      {children}
    </div>
  )
}
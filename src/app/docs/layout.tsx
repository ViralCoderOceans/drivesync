import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description: "This is a documentation of Story Generator app, where you can read all relative document as you want.",
  alternates: {
    canonical: "/docs",
  },
  openGraph: {
    title: "Documentation",
    description: "This is a documentation of Story Generator app, where you can read all relative document as you want.",
    url: "/docs",
    images: [`/images/docs/docs-meta-data.png`],
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white px-4 pb-[20px] min-h-[80vh] flex justify-center items-center pt-[100px] md:pt-[120px]">
      {children}
    </div>
  )
}
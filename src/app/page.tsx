import RenderSection from "@/components/renderSection"

export const dynamic = "auto"

export default async function Home() {
  return (
    <section>
      <div id="home" className="pt-[70px] md:pt-[100px] lg:pt-[120px]">
        <RenderSection />
      </div>
    </section>
  )
}

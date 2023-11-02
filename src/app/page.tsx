import FirstSection from "@/components/FirstSection"
import FoodSection from "@/components/FoodSection"

export default async function Home() {

  return (
    <main className="w-screen h-full flex flex-col">
      <FirstSection />
      <FoodSection />
    </main>
  )
}

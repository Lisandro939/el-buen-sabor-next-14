import FirstSection from "@/components/FirstSection"
import FoodSection from "@/components/FoodSection"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default async function Home() {

  return (
    <main className="w-screen h-full flex flex-col">
      <Header />
      <FirstSection />
      <FoodSection />
      <Footer />
    </main>
  )
}

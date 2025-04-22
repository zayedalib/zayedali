import GlassmorphismCard from "@/components/glassmorphism-card"
import ThreeBackground from "@/components/three-background"

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-y-auto py-12">
      <ThreeBackground />
      <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-4 py-12">
        <GlassmorphismCard />
      </div>
    </main>
  )
}

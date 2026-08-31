import ClickyBox from "./Components/ClickyBox"
import Copyright from "./Components/UI/Copyright"

export default function Home() {
  return (
    <main className="page-backdrop">
      <div className="relative z-10 flex flex-col lg:items-center lg:justify-center min-h-screen">
        <ClickyBox />
      </div>
      <Copyright />
    </main>
  )
}

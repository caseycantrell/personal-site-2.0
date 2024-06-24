import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-custom">
      <div className="flex items-center justify-center w-1/2 h-96 rounded-lg backdrop-blur-sm bg-white/20 shadow-xl">
        <p className="text-6xl font-bold opacity-100">ayyy it's ya boi</p>
      </div>
      <style>{`
      .bg-custom {
        background-image: url('https://searchengineland.com/wp-content/seloads/2020/03/code-SS_634574354-1920x1080-1.jpg');
        background-size: cover;
        background-position: center;
      }
      `}</style>
    </main>
  )
}

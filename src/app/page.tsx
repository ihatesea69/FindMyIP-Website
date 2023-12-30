import FindMyIp from "../../components/fetchapi"

export default function Home() {
  
  const ip = FindMyIp()

  return (
    <div className= " h-screen w-screen bg-slate-950 flex-1" >
      <div className="h-screen flex items-center justify-center">
      <h1 className="text-white text center text-6xl" >Your IP Address is:  {ip}</h1>
      </div>
    </div>
  )
}

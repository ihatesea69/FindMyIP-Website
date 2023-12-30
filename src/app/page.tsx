import FindMyIp from "../../components/fetchapi"

export default function Home() {
  
  const ip = FindMyIp()

  return (
    <div>
      <h1>Hello {ip}</h1>
    </div>
  )
}

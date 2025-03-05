import { Button } from "@/components/ui/button"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>Click me</Button>
    </div>
    </>
  )
}

export default App

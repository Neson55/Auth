import { Auth} from "./components/ui/auth"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Register } from "./components/ui/register"

function App() {


  return (
    <div className="flex min-h-screen min-w-screen justify-center items-center">
    <Tabs defaultValue="account" className="w-[400px]">
  <TabsList className="bg-gray-200 flex-shrink ml-28">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="register">Register</TabsTrigger>
  </TabsList>
  <TabsContent value="account"><Auth/></TabsContent>
  <TabsContent value="register"><Register/></TabsContent>
</Tabs>
    </div>
  )
}

export default App

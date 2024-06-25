import Navbar from "../components/navbar/NavbarComponent"
import Footer from "../components/footer/FooterComponent"
import { Outlet } from "react-router-dom"


function RootLayout() {
  return (
    <div>
        <Navbar />
        
        <main>
          <Outlet />
        </main>
<div className=" mt-20">
< Footer />
</div>
      
    </div>
  )
}

export default RootLayout
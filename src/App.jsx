import { BrowserRouter } from "react-router-dom"
import { About , Contact , Experience , Feedbacks , Hero , Navbar , Tech , Works , StarsCanvas , ParaHero } from './components'



const App = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className=" bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <ParaHero />
                </div>

                <About />
                <Experience />
                <Tech />


                <Works />
                <Feedbacks />
                <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                </div>


            </div>
        </BrowserRouter>
    )
}

export default App


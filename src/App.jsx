import { BrowserRouter } from "react-router-dom"
import { About , Contact , Experience , Feedbacks , Hero , Navbar , Tech , Works , StarsCanvas ,ParaHero } from './components'



const App = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="z-10 bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <ParaHero />
                </div>


                <div className="z-30 ">
                    <About />
                    <Experience />
                    <Tech />


                    <Works />
                    <Feedbacks />
                </div>

                <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                </div>


            </div>
        </BrowserRouter>
    )
}

export default App


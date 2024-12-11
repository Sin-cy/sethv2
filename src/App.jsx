import { BrowserRouter } from "react-router-dom";
import {
    About,
    Contact,
    Experience,
    Feedbacks,
    Hero,
    Navbar,
    Tech,
    Works,
    StarsCanvas,
    ParaHero,
} from "./components";

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

                <div className="relative z-0 overflow-y-clip">
                    <Contact />
                    <StarsCanvas />
                </div>
                <div className="text-neutral-500 px-1 flex flex-row-reverse mx-auto text-[10px] xs:text-[12px] sm:text-[14px] md:text-[14px] ">
                    © 2023 Seth Phaeno
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

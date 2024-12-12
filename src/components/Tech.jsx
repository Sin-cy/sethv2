
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
// import AnimatedGradientText from "@/components/magicui/animated-gradient-text"
// import { ChevronRight } from "lucide-react"
// import { cn } from "@/lib/utils"
import TextRevealByWord from "./ui/text-reveal"

const Tech = () => {
    return (
        <div>
            <div className="z-10 mb-0 mt-0 flex flex-row flex-wrap min-h-[16rem] items-center justify-center">
                <TextRevealByWord className="text-3xl" text="Try Rotating Me"/>
            </div>
            {/* <h2 className="flex flex-row justify-center text-[18px] m-auto my-10"> */}
            {/*     Rotate me ! </h2> */}

            <div className="flex flex-row flex-wrap justify-center gap-10">
                {technologies.map((technology) => (
                    <div className="w-28 h-28 " key={technology.name} >
                        <BallCanvas icon={technology.icon} />

                    </div>

                ))}
            </div>

        </div>
    )
}

export default SectionWrapper(Tech , "");

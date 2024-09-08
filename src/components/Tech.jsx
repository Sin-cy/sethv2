
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import AnimatedGradientText from "@/components/magicui/animated-gradient-text"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const Tech = () => {
    return (
        <div>
            <div className="z-10 mb-0 mt-0 flex flex-row flex-wrap min-h-[16rem] items-center justify-center">
                <AnimatedGradientText>
                    {/* 🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "} */}
                    <span
                        className={cn(
                            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-xl`,
                        )}
                    >
                        Rotate Me
                    </span>
                    {/* < ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
                </AnimatedGradientText>
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

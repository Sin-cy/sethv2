
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"



const Tech = () => {
    return (
        <div>
            <h2 className="flex flex-row justify-center text-[18px] m-auto my-10">
                Rotate me ! </h2>

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

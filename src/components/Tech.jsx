import { BallCanvas } from "./canvas"
import { SectionWrapper } from "./hoc"
import { technologies } from "../constants"
import { motion } from "framer-motion"
import { styles } from "../style"
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
    <motion.div className="mt-[80px]" variants={textVariant()}>
      <p className={styles.sectionSubText}>My Tech Stack</p>
      <h2 className={styles.sectionHeadText}>Skills.</h2>
    </motion.div>
    <div className="flex flex-row flex-wrap justify-center ml-[0px] mr-[0px] sm:ml-[100px] sm:mr-[100px] gap-10 mt">
      {technologies.map((technology)=>(
        <div className="w-28 h28 " key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}

    </div>
      </>
  )
}

export default SectionWrapper(Tech ,"Skill");
import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[80px] sm:top-[110px]
      max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5" name="purple line">
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}> 
            Hi, I'm <span className='text-[#915eff]'>Harish</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build intelligent solutions with AI, Develop innovative web applications,
            <br className='sm:block hidden'/> and create impactful user experiences.
          </p>       
        </div>
      </div>


    
    </section>
  );
}

export default Hero;

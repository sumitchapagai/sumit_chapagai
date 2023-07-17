'use client'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import ProjectsCard from '@/components/projects-card'
import { Projects } from '@/app/types/sanity'
import { FC } from 'react'

interface ProjectsProps {

  projects: Projects[]
}


const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <>
      <motion.div
        initial='hidden'
        animate='show'
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}

        className='my-10 flex justify-center items-center'
      >
        <div className='flex flex-col justify-center items-center animate-pulse md:my-20 my-10'>
          <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS}>
            Scroll

          </motion.p>
          <motion.span variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <ArrowDown className='w-5 h-5 mt-2 animate-bounce ' />
          </motion.span>
        </div>
      </motion.div>

      <motion.section
        initial='hidden'
        animate='show'
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className='grid grid-cols-1 gap-5 ls:grid-cols-2 '
      >
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
          <ProjectsCard projects={projects} />
        </motion.div>
      </motion.section>
    </>
  )
}

export default Projects

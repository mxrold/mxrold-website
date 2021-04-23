import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import '../assets/styles/components/FeaturedWorks.css'

const FeaturedProjects = ({ image, title, description, build, github, url }) => {
  return (
    <div className="Works__item">
      <div className='Works__item--image'>
        <figure>
          <img src={image} alt='Imagen del proyecto' />
        </figure>
      </div>
      <div className='Works__item--info'>
        <h3>{title}</h3>
        <div className='Works__item--info-box'>
          <p>{description}</p>
          <div className='Works__item--info-box-tools'>
            <ul>
              <li>{build}</li>
            </ul>
          </div>
          <div className='Works__item--info-box-links'>
            <a href={github}target="_blank" title="Enlace de Github" >
              <AiFillGithub size='24px' />
            </a>
            <span />
            <a href={url} target="_blank" title="Enlace a la página web" >
              <BiWorld size='24px' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjects

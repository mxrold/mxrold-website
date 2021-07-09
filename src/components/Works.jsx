import React from 'react'
import Button from './Button'
import FeaturedWorks from './FeaturedWorks'
import WorksList from './WorksList'
import { featuredList, worksList } from '../../api/api.json'
import '../assets/styles/components/Works.css'

const Works = () => {
  const textMessage = 'Ver mas proyectos'
  const rute = '/proyectos/listado'

  return (      
    <section className='Works'>
      <div className='Works__title'>
        <h2>Proyectos</h2>
      </div>

      {
        featuredList.map((items) => (
          <FeaturedWorks key={items.id} {...items}/>
        ))
      }

      <div className='Works__subtitle'>
        <h3>Lista de proyectos</h3>
      </div>

      <div className="Works__projects">
        {
          worksList.map((items) => (
            <WorksList key={items.id} {...items} />
          ))
        }
      </div>
      
      <div className='Works__list'>
        <Button text={textMessage} rute={rute} />
      </div>
    </section>
  )
}

export default Works

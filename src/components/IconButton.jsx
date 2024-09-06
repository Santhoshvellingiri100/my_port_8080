import React from 'react'
import styles from './components.module.css'
function IconButton({url,icon}) {
  return (
    <a href={url} target="_blank" className={styles.iconContainer}>

        <i style={{fontSize:'2rem'}} className={icon} color='white'></i>
     

    </a>
  )
}

export default IconButton
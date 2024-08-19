import React from 'react'
import styles from './screen.module.css' 
import { Label01, Label02, Title02 } from '../theme/fonts'
import WorkCard from '../components/WorkCard'
const elements = [
  {
    title:'Petro-money',
    section:"Finserve Module",
    description:'My portfolio now consists of some 250+ completed websites. Below is a sampling of recent projects I am proud to have delivered.',
    tags:[
      'React.js',
      'React Native',
      'UI',
      "UX"
    ],
    bgURL:"https://images.pexels.com/photos/19671785/pexels-photo-19671785/free-photo-of-two-people-walking-down-a-path-in-the-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title:'Petro-money',
    section:"Finserve Module",
    description:'My portfolio now consists of some 250+ completed websites. Below is a sampling of recent projects I am proud to have delivered.',
    tags:[
      'React.js',
      'React Native',
      'UI',
      "UX"
    ],
    bgURL:"https://images.pexels.com/photos/19671785/pexels-photo-19671785/free-photo-of-two-people-walking-down-a-path-in-the-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title:'Petro-money',
    section:"Finserve Module",
    description:'My portfolio now consists of some 250+ completed websites. Below is a sampling of recent projects I am proud to have delivered.',
    tags:[
      'React.js',
      'React Native',
      'UI',
      "UX"
    ],
    bgURL:"https://images.pexels.com/photos/19671785/pexels-photo-19671785/free-photo-of-two-people-walking-down-a-path-in-the-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
]
function WorkPage() {
  return (
    <div className={styles.workPageContainer}>
         <div style={{}} className={styles.workPageHeader}>
         <Title02 style={{textAlign:"center",width:'100%',margin:'2rem 0px'}}>SELECTED WORK</Title02>
         <div style={{display:'flex',flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
         <Label01 style={{textAlign:"center",width:'60%'}}>My portfolio now consists of some 250+ completed websites. Below is a sampling of recent projects I am proud to have delivered.</Label01>
         </div>
         </div>

         {/* content */}
         <div style={{width:"100%"}}>
           {
            elements.map((element,index)=>{
              return(
                 <div style={{width:"100%",height:'50vh',marginBottom:"3rem",display:"flex",flexDirection:"row",columnGap:'3rem',rowGap:'2rem',padding:"0px 3rem"}}>
            <WorkCard element={elements[0]}/>
            
            <WorkCard element={elements[0]} containerStyle={{transform:"translateY(25vh)"}}/>
            
                   


                 </div>
              )
            })
            }
            {/* <WorkCard element={elements[0]}/> */}
           {/* <WorkCard />
           <WorkCard />
           <WorkCard />
           <WorkCard />
           <WorkCard />
           <WorkCard />
           <WorkCard />
           <WorkCard />
           <WorkCard />
           <WorkCard /> */}
           {/* <WorkCard/> */}
         </div>
    </div>
  )
}




export default WorkPage
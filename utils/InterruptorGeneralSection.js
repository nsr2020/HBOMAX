import { sectionGeneral } from "../components/sectionGeneral/sectionGeneral";



export const encenderGeneralSection = () =>{



  sectionGeneral.style.display = "flex";


}

export const apagarGeneralSection = () =>{
  
  sectionGeneral.style.display = "none"
  sectionGeneral.innerHTML= ""
  
  }
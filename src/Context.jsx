import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) =>{
    const [about, setAbout] = useState(false);
    const [project, setProject] = useState(false);
    const [skills, setSkills] = useState(false);
    const [contact, setContact] = useState(false);

    return <AppContext.Provider value={{about,setAbout,project,setProject,skills,setSkills,contact,setContact}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}
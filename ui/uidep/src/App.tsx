import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ListDepartment } from "./components/ListDepartments"
import { EditDepartment } from "./components/EditDepartment"
import { NewDepartment } from "./components/NewDepartment"


function App() {

  return (
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<ListDepartment />} />    
     <Route path="/newdepartment" element={<NewDepartment/>}/>
     <Route path="/editdepartment/:id" element={<EditDepartment />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App

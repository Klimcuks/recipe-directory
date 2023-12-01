import{ useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

const Recipe = () => {
  let { id } =  useParams()

 const { data, isPending, error} =  useFetch(`http://localhost:3000/recipes/${id}`)

  return (
    <div className="recipe">
    { error && <p className="error">{error}</p>}
    { isPending && <p className="loading">Loading...</p>} 
    { data && <h3>{ data.title }</h3> }
     </div>
  )
}

export default Recipe
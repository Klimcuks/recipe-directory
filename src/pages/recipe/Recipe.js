import{ useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import "./Recipe.css"

const Recipe = () => {
  let { id } =  useParams()

 const { data: recipe, isPending, error} =  useFetch(`http://localhost:3000/recipes/${id}`)

  return (
    <div className="recipe">
    { error && <p className="error">{error}</p>}
    { isPending && <p className="loading">Loading...</p>} 
    { recipe && 
      <>
      <h2 className="page-title">{ recipe.title }</h2> 
      <p>takes{recipe.cookingTime}</p>
        <ul>
          { recipe.ingredients.map(ing => <li>{ing}</li>)}
        </ul>
        <p className="method">{ recipe.method }</p>
      </>}
     </div>
  )
}

export default Recipe
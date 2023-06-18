import {Content} from "./contents/Content"
import { Assets } from "../assets/assets"

function Card(){
  const listItems = Content.map(Content =>
    <li key={Content.id}>
  <div className="card w-96 bg-base-300 shadow-xl mt-5 mr-5">
  <figure className="px-10 pt-10">
    <img src={Assets(Content)} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="ml-4">
  <div className="card-body items-center text-center">
    <h1 className="card-title">{Content.name}</h1>
    <p>{Content. profession}</p>
    <p>{Content. Skill}</p>
    <div className="card-actions">
    </div>
  </div>
</div>
</div>
</li>
  )
  return <ul>{listItems}</ul>
}
export default Card
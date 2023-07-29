
import './index.css'
import { BiCaretUp,BiCaretDown} from "react-icons/bi";
const Card = (props) => {
    const {title, poster, genre, director, stars, date,  language, votes,pageViews}=props

    return(
        <div className='main'>
        <li className='main-card-container'>
            <div className='items-container'>
                <div className='vote-container'>
                    <div>< BiCaretUp className='icon' size={50}/></div>
                    <p className='vote-cls'>{votes}</p>
                    <div><BiCaretDown className='icon' size={50}/></div>
                    <p>Votes</p>
                </div>
                <div className='poster-container'>
                    <img src={poster} className='image-class'/>
                </div>
                <div className="details-container">
                    <h1>{title}</h1>
                    <p>Genre:{genre}</p>
                    <p>Director:{director}</p>
                    <p>Starring:{stars}</p>
                    <p>Mins|{language}|{date}</p>
                    <p className='page-views'>{pageViews} views|Voted by {votes} People</p>


                </div>
             
            </div>
            <div className='button-container'>
                <button className='btn-cls'>watch Trailer</button>
            </div>

        
        </li>
        </div>
    )
    
  }
  export default Card
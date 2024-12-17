//react router dom imp
import { useState } from "react"
import { Link } from "react-router-dom"

const [isApple,setIsApple]=useState(0)
const [isAsus,setIsAsus]=useState(0)
const [isDell,setIsDell]=useState(0)


const Home = ()=>{
    return(
        <div>homepage

            <button>
                <Link to={'/signIn'}>
                sign in page
                </Link>
            </button>


            <form>

                <button>apple</button>
                <button>asus</button>
                <button>dell</button>
            </form>
            <button>
                <Link to={`/QueryPrint?${}`}>
                QueryPrint
                </Link>
            </button>
        </div>
    )
}

export default Home
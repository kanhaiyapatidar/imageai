import React from 'react'
import { useLocation , useParams, useNavigate} from 'react-router-dom';



const User = () => {
    const {name ,lname} = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    console.log(navigate);
    
  return (
    <>
      <h1> User {name} {lname} page</h1>
      <p> My current location is { location.pathname}</p>
      {(location.pathname === `/User/kanhaiya/patidar` || `/User/kanhiaya/patel`) ?
      (<button onClick={ () => navigate(-1)}> Go Back </button> ) : null
      }
    </>
  )
}

export default User

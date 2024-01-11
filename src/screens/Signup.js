import React,{useState} from 'react'

export default function Signup() {

  const [credentials, setcredentials] = useState({name:"",email:"",passowrd:"",geolocation:""})

  const handleSubmit = async(e) => {
       
    e.preventDefault();
    const response = fetch("http://localhost:5000/api/createuser",{
      method:'POST',
      header:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify()
  })

  const onChange= (event)=> {
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }
  }
  return (
    <><div className='container'><form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label for="name" className="form-label">Name</label>
      <input type="text" className="form-control" name='name' value={credentials.name}/>
    </div>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name='email' value={credentials.email} onChange={onChange}/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1"  name='password' value={credentials.password}/>
    </div>
    <button type="submit" className="m-3btn btn-success">Submit</button>
    <link to="/login" className="m-3 btn btn-danger">Already a user</link>
  
  
  </form></div></>
  )
}


import React, { useState, Fragment } from "react";
import { Redirect,Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

function SignUpForm() {
    var [Alert, setAlert] = useState("")
    var [signup, setSignup] = useState(false)
    var [displayStatus, setDisplay] = useState("none")


    let [user, setUser] = useState({
        password: '',
        email : '',
      });

      let handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        user[name] = value;
        setUser(user);
      }
      let SignUpForm = (e)=>{
        e.preventDefault();
        const payload = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user)
        };
      fetch('http://localhost:5000/newcustomer', payload)
          .then(response => response.json())
          .then((data)=>{
            console.log('====================================');
            console.log(data);
            console.log('====================================');
            if(!data.success){
              setDisplay("block")
              setAlert(data.message)
            }else{
              setSignup(true)
            }
          });
        
     }
     if(signup){
       return <Redirect to="/login" />
     }
     return (
      <Fragment>
            <Navbar/>
            <section className="text-gray-700 body-font">
              <div className="container px-5 py-24 mx-auto flex flex-wrap mt-8 shadow">
                
              <div className="p-4 lg:w-1/2 md:w-full">
                <div className="flex  rounded-lg p-8 sm:flex-row flex-col">
                  <img src="https://blog.jakomu.com/wp-content/uploads/2019/10/undraw_successful_purchase_uyin.png" />
              </div>
              </div>

              <div className="p-4 lg:w-1/2 md:w-full mt-8">
                <div className="flex  rounded-lg p-8 sm:flex-row flex-col">
                  
                   <form className="flex-grow"  method="POST" onSubmit={SignUpForm}>
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Sign Up With Email</h2>
                    <div className=" mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative " style={{display:displayStatus}} role="alert">
                        <span className="block sm:inline">{Alert}</span>
                      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                      </span>
                    </div>
                    <input aria-label="Email address" onChange={handleChange} name="email" type="email" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue  focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" />
                    <input aria-label="Password" name="password" onChange={handleChange}  type="password" required className="mt-4 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue  focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" />
                    <div className="justify-between">
                    
                    <Link to="/login" type="submit" className="mt-3 border-2 p-2 rounded text-indigo-500 inline-flex items-center">Login
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                    <button type="submit" className="mt-3 border-2 p-2 rounded text-indigo-500 inline-flex items-center float-right">Sign up
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                    </div>
                  </form>
                </div>
              </div>

           </div>
        </section>
      </Fragment>
    );

    
}
export default SignUpForm;
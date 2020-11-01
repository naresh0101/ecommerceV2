
import React, { useState, Fragment } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../../components/Navbar";

function SignUpForm() {
    var [Alert, setAlert] = useState("Welcome to Shopping cart")
    var [signup, setSignup] = useState(false)


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
            setAlert(data.message)
            if(data.customer == true){
              setSignup(true)
            }
          });
        
     }
     if(signup){
       console.log("hi");
       return <Redirect to="/login" />
     }
     return (
      <Fragment>
            <Navbar/>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
           <div className="max-w-md w-full">
           <img className="mx-auto h-12 w-auto" src="https://logodix.com/logo/1787735.png" alt="Workflow" />

          <form className="mt-8" method="POST" onSubmit={SignUpForm}>
          <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
            <p>{Alert}</p>
          </div>
            <div className="rounded-md shadow-sm">
              <div>
                <input aria-label="Email address" onChange={handleChange} name="email" type="email" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue  focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" />
              </div>
              <div className="mt-2">
                <input aria-label="Password" name="password" onChange={handleChange}  type="password" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue  focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center">
              <a href="/login" className="font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:underline transition ease-in-out duration-150" >
                Login
                </a>
              </div>

              <div className="text-sm leading-5">
                <a href="/forgot" className="font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:underline transition ease-in-out duration-150" >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className="mt-6">
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-orange active:bg-orange-700 transition duration-150 ease-in-out">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-orange-500 group-hover:text-orange-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
    </div>
      </Fragment>
    );

    
}
export default SignUpForm;
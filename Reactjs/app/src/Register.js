import axios from "axios"
import { useState } from "react"


export default function Contact() {
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[contact,setContact]=useState()
    const[address,setAddress]=useState()


    const enterName=(e)=>{
        setName(e.target.value)
    }
    const enterEmail=(e)=>{
        setEmail(e.target.value)
    }
    const enterPassword=(e)=>{
        setPassword(e.target.value)
    }
    const enterContact=(e)=>{
        setContact(e.target.value)
    }
    const enterAddress=(e)=>{
        setAddress(e.target.value)
    }
    const handelForm = (e) => {
        e.preventDefault()
        let data = {
          name:name,
          email:email,
          password:password,
          contact:contact,
          address:address,
        }
        axios.post("http://localhost:3000/admin/register",data).then(
            (x)=>{
                if(x.data.success){
               alert("Register success")

                }
                else{

                    alert(" Already registered")
                }

            }


        ).catch()

    }
    return (

        <>
            <section class="w3l-contact-11 py-5" id="contact">
                <div class="container ">
                    <div class="row text-center ">
                        <h1 className="display-2 title"><b>User Register</b></h1>

                    </div>
                    <div className="row">
                    <div class="form-41-mian my-4 col-md-10 mx-auto ">
                        <div class="container-fluid register-page">
                            <div class="form-inner-cont">

                                <form action="" method="post" class="signin-form " onSubmit={handelForm}>
                                    <div class="row align-form-map   ">


                                        <div className="row mt-5 ms-3 ">

                                            <div class="col-sm-2 form-input ">
                                         <label for=""> First Name</label>
                                         </div>
                                         <div class="col-sm-4 form-input  ">
                                             <input type="text" name="" id="" placeholder="" value={name} onChange={enterName} required/>
                                            </div>
                                     
                                    

                                            <div class="col-sm-2 form-input  ">
                                                <label for=""> Contact</label>
                                                </div>
                                            <div class="col-sm-4 form-input   ">

                                                <input type="number" name="" id="" placeholder="" value={contact} onChange={enterContact} required/>
                                            </div>
                                        </div>
                                        <div className="row  mt-5 ms-3">

                                            <div class="col-sm-2 form-input ">
                                                <label for="">Email</label>
                                                </div>
                                            <div class="col-sm-4 form-input  ">

                                                <input type="email" name="" id="" placeholder="" required value={email} onChange={enterEmail} />
                                            </div>
                                        
                                       

                                            <div class="col-sm-2 form-input ">
                                                <label for="">Address</label>
                                                </div>
                                            <div class="col-sm-4 form-input  ">

                                                <input type="text" name="" id="" placeholder="" required value={address} onChange={enterAddress} />
                                            </div>
                                        </div>
                                        <div className="row mt-5 mb-3 ms-3">
                                            <div class="col-sm-2 form-input  ">
                                                <label for=""> Password</label>
                                                </div>
                                            <div class="col-sm-4 form-input ">

                                                <input type="password" name="" placeholder="" class="contact-input" value={password} onChange={enterPassword} required/>


                                            </div>
                                            <div className="col-md-6">
                                            <div className="col-md-4 mx-auto  "><div class="submit ">
                                                
                                        
                                           <button type="submit" class="btn btn-style ">Register
                                               </button>
                                            
                                        </div>
                                          
                                        </div>
                                            </div>
                                          

                                        </div>
                                      
                                        
                                    </div>
                                    <div className="row  ">
                                   
                                       
                                    </div>


                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           




        </>
    )
}
import axios from "axios"
import { useState } from "react"

export default function Form() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [contact, setContact] = useState()
    const [msg, setMsg] = useState()

    const enterName = (e) => {
        setName(e.target.value)
    }
    const enterEmail = (e) => {
        setEmail(e.target.value)
    }
    const enterContact = (e) => {
        setContact(e.target.value)
    }
    const enterMsg = (e) => {
        setMsg(e.target.value)
    }

    const handelForm = (e) => {
        e.preventDefault()

        const token = sessionStorage.getItem("Token")
        console.log(token)
        const header = {
            Accept: "application/json",
            Authorization: sessionStorage.getItem("Token")

        }
  
           let data={
            name:name,
            email:email,
            contact:contact,
            msg:msg
           }
       
      
        axios.post("http://localhost:3000/admin/form", data, { headers: header })
            .then(res => {
                if (res.data.success) {
                    alert("Form submitted")
                }
                else {
                    alert("error submitting form")
                }
            })
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
                                                    <input type="text" name="" id="" placeholder="" value={name} onChange={enterName} required />
                                                </div>



                                                <div class="col-sm-2 form-input  ">
                                                    <label for=""> Contact</label>
                                                </div>
                                                <div class="col-sm-4 form-input   ">

                                                    <input type="number" name="" id="" placeholder="" value={contact} onChange={enterContact} required />
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
                                                    <label for="">Message</label>
                                                </div>
                                                <div class="col-sm-4 form-input  ">

                                                    <textarea value={msg} onChange={enterMsg}></textarea>
                                                </div>
                                            </div>
                                            <button type="submit" class="btn btn-style ">submit
                                            </button>


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
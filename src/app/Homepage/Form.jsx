import React from 'react'
import "../Style/form.css"

function Form() {
  return (
    <div className='flex formDiv FormMainDiv'>
    <div className='w-[50%] form1stDiv'></div>
    <div className='w-[50%]'>
        <h1 className="formHeading" >Register for a Home <br></br> Consultation here !</h1>
        <form
            // ref={form}
            // onSubmit={sendEmail}
            className="flex formInsideDivInput"
            id="contact-form"
          >
            <div className="fromInSideDiv">
              <input
                type="text"
                id="name"
                name="First_name"
                className="firstnamebox"
                placeholder="First Name*"
                // value={formData.First_name}
                // onChange={handleChange}
              />

              <br></br>

              <input
                type="text"
                id="last_Name"
                name="last_name"
                placeholder="Last Name*"
                // value={formData.last_name}
                // onChange={handleChange}
              />


       
        

              <br></br>

              <input
                type="email"
                placeholder="Email Address**"
                name="Email"
                // value={formData.Email}
                // onChange={handleChange}
              />

              <br></br>

              <input
                type="number"
                id="number"
                name="number"
                placeholder="Phone Number*"
                // value={formData.last_name}
                // onChange={handleChange}
              />

              <br></br>

       

              <input
                type="submit"
                value="Book A Consultation Now"
                className="submitFormBtn"
              />
            </div>
            
          </form>


    </div>



    </div>
  )
}

export default Form
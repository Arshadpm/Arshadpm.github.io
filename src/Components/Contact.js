import {React,useState } from 'react';
import imake from "./conorg.jpeg"

const Contact=()=> {


  const [msg, setMsg] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setMsg({ ...msg, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message } = msg;
    try {
      const res = await fetch("http://localhost:8000/api/user/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      if (res.status === 400 || !res) {
        window.alert(" Message not sent. Try again later");
      } else {
        window.alert("Message Sent ");
        setMsg({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.log("error");
    }
  };



  return (
    

/* <div className="container mt-5">
      <h2 className="mb-3"><b>Contact Form</b></h2>

      <div class="card rounded-3 text-black col-lg-6 mx-auto">
     <div class="row g-0">
              <div > 
                <div class="card-body p-md-5 mx-md-4">
  
      <form onSubmit={handleSubmit} method="POST">
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" placeholder="Enter Name" type="text" id="name" required value={msg.name}
          onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" placeholder="Enter Email" type="email" id="email" required value={msg.email}
          onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" placeholder="Enter the Message" id="message" required  value={msg.message}
          onChange={handleChange}/>
        </div>
        

        <button type="submit" class="btn btn-danger btn-primary">Submit</button>
      </form>

      </div>
      </div> 
      </div>
      </div>

    </div>

 */

// <div>
//       <section id="contact">
//         <div className="container my-5 py-5">
//           <div className="row mb-5">
//             <div className="col-12">
              
//               <h2 className="fs-5 text-center mb-0"></h2>
              
//               <h1 className="display-6 text-center mb-4">
//                 {" "}
//                 <b>Contact Us</b>
                
//               </h1>
//               <hr className="w-25 mx-auto" />
//             </div>
//           </div>

          /* <div class="card rounded-3 text-black col-lg-6 mx-auto"></div> */
    //       <div className="row">
    //         <div className="col-md-6">
    //           <img
    //             src={imake}
    //             alt="Contact"
    //             className="w-75 mt-5" style={{width:"400px",height:"400px"}}
    //           />
    //         </div>
    //         <div className="col-md-6">
    //           <form onSubmit={handleSubmit} method="POST">
    //             <div className="mb-3">
    //               <label htmlFor="name" className="form-label">
    //                 Your Name
    //               </label>
    //               <input
    //                 type="text"
    //                 className="form-control"
    //                 id="name"
    //                 placeholder="Enter Your Name"
    //                 name="name"
    //                 value={msg.name}
    //                 onChange={handleChange}
    //               />
    //             </div>
    //             <div className="mb-3">
    //               <label
    //                 htmlFor="exampleFormControlInput1"
    //                 className="form-label"
    //               >
    //                 Email address
    //               </label>
    //               <input
    //                 type="email"
    //                 className="form-control"
    //                 id="exampleFormControlInput1"
    //                 placeholder="abc@example.com"
    //                 name="email"
    //                 value={msg.email}
    //                 onChange={handleChange}
    //               />
    //             </div>
    //             <div className="mb-3">
    //               <label
    //                 htmlFor="exampleFormControlTextarea1"
    //                 className="form-label"
    //               >
    //                 Your Message
    //               </label>
    //               <textarea
    //                 class="form-control"
    //                 id="exampleFormControlTextarea1"
    //                 rows="5"
    //                 name="message"
    //                 placeholder="Enter your message here"
    //                 value={msg.message}
    //                 onChange={handleChange}
    //               ></textarea>
    //             </div>
    //             {/* <button
    //               type="submit"
    //               className="btn btn-outline-primary rounded-pill px-4"
    //             >
    //               Send Message <i className="fa fa-paper-plane ms-2"></i>
    //             </button> */}
    //             <button type="submit" class="btn btn-danger btn-primary">Submit</button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>





<div className="container " style={{paddingTop:"5rem"}}>
     <div className="row d-flex justify-content-center">
       {/* <div className="col-xl-10"> */}
         <div className="card rounded-3">
           <div className="row g-0">
             <div className="col-6">
               {/* <div className="card-body p-md-5 mx-md-4"> */}
 
                 <div 
                 className="text-center"
                 >
                   
                  
                 </div>
                 <img src={imake} alt="" height="100%" width="100%" /> 
                 
               {/* </div> */}
             </div>
             <div   className="col-lg-6  align-items-center gradient-custom-2
             px-3 py-4 p-md-5 md-4"
             >
                
             <form onSubmit={handleSubmit} method="POST">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Your Name"
                    name="name"
                    value={msg.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="abc@example.com"
                    name="email"
                    value={msg.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Your Message
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    name="message"
                    placeholder="Enter your message here"
                    value={msg.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <button type="submit" class="btn btn-danger btn-primary">Submit</button>
              </form>
               
               {/* <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                 
               </div> */}
             {/* </div> */}
           </div>
         </div>
       </div>
     </div>
   </div>




    
  )
}

export default Contact;


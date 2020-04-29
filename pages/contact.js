import Layout from '../components/MyLayout';
import fetch from 'node-fetch';
import { Formik } from 'formik';


export function Contact(props) {

	  const initialValues = { 
		email: '', 
		first_name: '', 
		last_name: '', 
		contact: '',
		comments: '' 
	  }

	  function handleSubmit(values, form, resetForm) {
	  	const httpConfig = {
	  		headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	        },
	        method: "POST",
	        body: JSON.stringify(values)
	  	}
	    fetch("https://httpbin.org/post", httpConfig ).then(res => {
	        if (res.ok) {
	            return res.json();
	        } else {
	        	throw new Error('Something went wrong');
	        }
	    }).then(response => {
	       form.resetForm({});
	       values = {};
	       form.setSubmitting(false);
	    }).catch(err => {
	        form.setSubmitting(false);
	    })
	}

	

	function validation(values) {
	    const errors = {};
        if (!values.email) {
          errors.email = 'Email is Required';
        }
        else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        if (!values.first_name) {
          errors.first_name = 'First Name is Required';
        }
        if (!values.last_name) {
          errors.last_name = 'Last Name is Required';
        }
        if (!values.contact) {
          errors.contact = 'Contact No is Required';
        }
        else if (
          !/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/i.test(values.contact)
        ) {
          errors.contact = 'Invalid Contact No';
        }
        return errors;
	}
	
  return (
  	<Layout>
  	<h1>Get In Touch</h1>
    	
    <div className="contactForm">
	    <Formik
	      initialValues={initialValues}
	      validate={validation}
	      onSubmit={handleSubmit}
	    >
	      {({
	      	values,
	        errors,
	        touched,
	        handleChange,
	        handleBlur,
	        handleSubmit,
	        isSubmitting,
	      }) => (
	        <form onSubmit={handleSubmit}>
               
              <div>
     	      	<label>First Name <sup>*</sup></label>
     	      	<input
		            type="text"
		            name="first_name"
		            onChange={handleChange}
		            onBlur={handleBlur}
		            value={values.first_name}
		          />
		        <p className="errormessage">
		        	{errors.first_name && touched.first_name && errors.first_name}
		        </p>  
     	      </div>  

     	      <div>
     	      	<label>Last Name <sup>*</sup></label>
     	      	<input
		            type="text"
		            name="last_name"
		            onChange={handleChange}
		            onBlur={handleBlur}
		            value={values.last_name}
		          />
		        <p className="errormessage">
		        	{errors.last_name && touched.last_name && errors.last_name}
		        </p>  
     	      </div>  

     	      <div>
     	      	<label>Email <sup>*</sup></label>
     	      	<input
		            type="email"
		            name="email"
		            onChange={handleChange}
		            onBlur={handleBlur}
		            value={values.email}
		          />
		        <p className="errormessage">
		        	{errors.email && touched.email && errors.email}
		        </p>  
     	      </div>

     	      <div>
     	      	<label>Contact <sup>*</sup></label>
     	      	<input
		            type="text"
		            name="contact"
		            onChange={handleChange}
		            onBlur={handleBlur}
		            value={values.contact}
		          />
		        <p className="errormessage">
		        	{errors.contact && touched.contact && errors.contact}
		        </p>  
     	      </div>

     	      <div>
     	      	<label>Your Message</label>
     	      	<textarea
     	      		rows="5"
		            name="comments"
		            onChange={handleChange}
		            onBlur={handleBlur} 
		            value={values.comments}>
		         </textarea>
		        <p className="errormessage">
		        	{errors.comments && touched.comments && errors.comments}
		        </p>  
     	      </div>

     	      <div>
		          <button type="submit" disabled={isSubmitting}>
		            Submit
		          </button>
	          </div>
	        </form>
	      )}
	    </Formik>
    </div>	
    </Layout>

  )
}


export default Contact;
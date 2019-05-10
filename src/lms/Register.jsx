
import React, {Component}  from 'react';
import axios from 'axios';

const emailRegx = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
const phoneRegx = /^\d{10}$/;
 const formValid = validate =>{

     console.log(validate);
 let valid = false;

if(validate.validatecheck===true){
 console.log(validate);
    Object.values(validate).forEach(val =>{

  
        val.length === 0 && (valid = true);   
      
       });

}else{
    valid = false;
}
 
 console.log(valid);
 return valid;
 };


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = { 

           register:{
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            gender:'',
            phone:'',
            uid:'',
            role:''
           },
           validate:{
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            gender:'',
            phone:'',
            uid:'',
            role:'',
            validatecheck:false
           }

         }
    }

onsubmit=(event)=>{

    event.preventDefault();

    if(formValid(this.state.validate)){

        
    const register = {
        firstname : this.state.register.firstname,
        lastname : this.state.register.lastname,
        email:this.state.register.email,
        password:this.state.register.password,
        gender:this.state.register.gender,
        phone:this.state.register.phone,
        uid:this.state.register.uid,
        role:this.state.register.role,
        state:'register',
        post : 'yes'
  
       }; 
  
    axios({
        method: 'POST',
        url: `http://localhost/lms/lms2/src/api/getdata.php`,
        headers: { 'content-type': 'application/json' },
        data: register
        
        // then(result => {
        // // this.setState( { 
        // // mailSent: result.data.sent
        // // })
        // console.log('hliiii');
        // })
        // .catch(error => this.setState( { error: error.message } ));
      });
        

    }
   

}

onchange=(event)=>{

    event.preventDefault();

    const {name,value} = event.target;
      let validate = this.state.validate;
      let register = this.state.register;

      switch(name){

          case 'firstname':
          validate.firstname = 
          value.length < 3
          ? "minimum 3 Characters requires":'';
          break;

          case 'lastname':
          validate.lastname = 
          value.length < 3 
          ? "minimum 3 Characters requires":'';
          break;

          case 'email':
          validate.email = 
          emailRegx.test(value)
          ? "":'invalid email address';
          break;

          case 'password':
          validate.password = 
          value.length < 6  
          ? "minimum 6 Characters requires":'';
          break;

          case 'gender':
          validate.gender = 
          value.length < 3
          ? "please select a gender":'';
          break;
           
          case 'phone':
          validate.phone = 
          phoneRegx.test(value)?"":"enter a valid number";
          break;

          case 'uid':
          validate.uid = 
          value.length < 3
          ? "enter a valid uid":'';
          break;

          case 'role':
          validate.role = 
          value.length < 3
          ? "please select a role":'';
          break;

          default:
          break;


      }

      switch(name){

        case 'firstname':
        register.firstname = 
        value;
        break;

        case 'lastname':
        register.lastname = 
        value;
        break;

        case 'email':
        register.email =value;
        break;

        case 'password':
        register.password = 
        value;
        break;

        case 'gender':
        register.gender = 
        value;
        break;
         
        case 'phone':
        register.phone = value;
        break;

        case 'uid':
        register.uid = 
        value;
        break;

        case 'role':
        register.role = 
        value;
        break;

        default:
        break;


    }

   let check = this.state.validate;
   check.validatecheck = true;
   this.setState({ validate, [name]:value});
   this.setState({check:check});
   this.setState({ register, [name]:value});


};




    render() { 
        return (           
            <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapper wrapper--w680">
            <div className="card card-4">
                <div className="card-body">
                    <h2 className="title">Registration Form</h2>
                    <form>
                        <div className="row row-space">
                            <div className="col-6">
                                <div className="input-group">
                                    <label className="label">first name</label>
                                    <input className="input--style-4" onChange={this.onchange} type="text" name="firstname"/>
                                </div>
                                {this.state.validate.firstname.length > 0 && (
                                    <span className="errorMessage">{this.state.validate.firstname}</span> 
                                )}
                            </div>
                            <div className="col-6">
                                <div className="input-group">
                                    <label className="label">last name</label>
                                    <input className="input--style-4" type="text" onChange={this.onchange} name="lastname"/>
                                </div>
                                {this.state.validate.lastname.length > 0 && (
                                    <span className="errorMessage">{this.state.validate.lastname}</span> 
                                )}
                            </div>
                        </div>
                        <div className="row row-space">
                            <div className="col-6">
                                <div className="input-group">
                                    <label className="label">Email</label>
                                    <input className="input--style-4" type="email" onChange={this.onchange} name="email"/>
                                </div>
                                {this.state.validate.email.length > 0 && (
                                    <span className="errorMessage">{this.state.validate.email}</span> 
                                )}
                            </div>
                            <div className="col-6">
                                <div className="input-group">
                                    <label className="label">Password</label>
                                    <input className="input--style-4" type="text" onChange={this.onchange} name="password"/>
                                </div>
                                {this.state.validate.password.length > 0 && (
                                    <span className="errorMessage">{this.state.validate.password}</span> 
                                )}
                            </div>
                           
                        </div>
                        <div className="row row-space">
                        <div className="col-6">
                                <div className="input-group">
                                    <label className="label">Phone Number</label>
                                    <input className="input--style-4" type="text" onChange={this.onchange} name="phone"/>
                                </div>
                                {this.state.validate.phone.length > 0 && (
                                    <span className="errorMessage">{this.state.validate.phone}</span> 
                                )}
                            </div>
                            <div className="col-6">
                              <label className="label">Gender</label>
                                <div className="input-group">
                                    <div className="p-t-10">
                                        <label className="radio-container m-r-45">Male
                                            <input type="radio" onChange={this.onchange}  name="gender" value="male"/>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="radio-container">Female
                                            <input type="radio" onChange={this.onchange} name="gender" value="female"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                {this.state.validate.gender.length > 0 && (
                                    <span className="errorMessage">{this.state.validate.gender}</span> 
                                )}
                            </div>
                        </div>
                        <div className="row">  
                           <div className="col-6">
                                <div className="input-group">
                                    <label className="label">UID</label>
                                    <input className="input--style-4" type="text" onChange={this.onchange} name="uid"/>
                                </div>
                                {this.state.validate.uid.length > 0 && (
                                    <span className="errorMessage">{this.state.validate.uid}</span> 
                                )}
                            </div>
                            <div className="col-6">
                                <label className="label">Role</label>
                                <div className="input-group">                   
                                    <div className="rs-select2 js-select-simple select--no-search">
                                        <select name="role" onChange={this.onchange} >
                                            <option disabled="disabled" >Choose option</option>
                                            <option value="student">Student</option>
                                            <option value="teacher">Teacher</option>
                                            <option value="librarian">Librarian</option>
                                        </select>
                                        <div className="select-dropdown"></div>
                                    </div>
                                </div>
                                {this.state.validate.role.length > 0 && (
                                    <span className="errorMessage">{this.state.validate.role}</span> 
                                )}
                            </div>
                        </div>
                        
                        <div className="p-t-15">
                            <button className="btn btn--radius-2 btn--blue" type="submit" onClick={this.onsubmit} >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
               
        );
    }
}
 
export default Register;

import React, {Component}  from 'react';
import axios from 'axios';

const emailRegx = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
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

           login:{
            email:'',
            password:'',
           },
           validate:{
            email:'',
            password:'',
            validatecheck:false
           }

         }
    }

onsubmit=(event)=>{

    event.preventDefault();

    if(formValid(this.state.validate)){

        
    const login = {
        email:this.state.login.email,
        password:this.state.login.password,
        state:'login',
        post : 'yes'
  
       }; 
  
    axios({
        method: 'POST',
        url: `http://localhost/lms/lms2/src/api/getdata.php`,
        headers: { 'content-type': 'application/json' },
        data: login
        
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
      let login = this.state.login;

      switch(name){

          case 'email':
          validate.email = 
          emailRegx.test(value) ? "enter a valid email":'';
          break;

          case 'password':
          validate.password = 
          value.length < 8 
          ? "minimum 8 Characters requires":'';
          break;

          default:
          break;


      }

      switch(name){

    
        case 'email':
        login.email =value;
        break;

        case 'password':
        login.password = 
        value;
        break;

        default:
        break;


    }

   let check = this.state.validate;
   check.validatecheck = true;
   this.setState({ validate, [name]:value});
   this.setState({check:check});
   this.setState({ login, [name]:value});


};




    render() { 
        return (           
            <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapper wrapper--w680">
            <div className="card card-4">
                <div className="card-body">
                    <h2 className="title">Login</h2>
                    <form>
                        <div className="row row-space">
                            <div className="col-6">
                                <div className="input-group">
                                    <label className="label">Email</label>
                                    <input className="input--style-4" onChange={this.onchange} type="text" name="email"/>
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
 
export default Login;
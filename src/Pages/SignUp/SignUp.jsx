import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm, } from "react-hook-form"
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const SignUp = () => {
    const { register, handleSubmit,reset, formState: { errors }} = useForm()
    const navigate =useNavigate();
    const {createUser, updateUserprofile} =useContext(AuthContext)

      const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserprofile(data.name, data.photoURL)
            .then(() =>{
              console.log('user profile info');
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')

            })
            .catch(error=>{console.error(error)})
        })
      }
  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Sign Up</title>
        </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}
             className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name" {...register("name" , { required: true })}

                 
                  placeholder="type your name"
                  className="input input-bordered"
                  
                />
                {errors.name && <span className="text-red-500">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="name" {...register("photoURL" , { required: true })}

                  placeholder="photo URL"
                  className="input input-bordered"
                  
                />
                {errors.photoURL && <span className="text-red-500">photo URL is required</span>}
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder=" type your email"
                  className="input input-bordered"
                  
                />
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true, minLength:8, maxLength: 20, pattern:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ })}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  
                />
                {errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>}
                {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 8 character</p>}
                {errors.password?.type === 'maxLength' && <p className="text-red-500">Password must be less then 20 character</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-500">Password must be one upper case, one lower case,one number and one special character</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
            </form>
            <p className='pb-4 pl-4'><>Already have an account <Link className='text-red-400' to='/login'>Login</Link></></p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;

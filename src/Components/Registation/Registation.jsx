import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile, GithubAuthProvider } from "firebase/auth";
// import app from '../../firebase/firebase.init';
import { AuthContext } from '../../context/UserContext';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


// const auth = getAuth(app);

const Registation = () => {

    // const googleProvider = new GoogleAuthProvider()

    const { createUser, verifyEmail, updateUserName, handleGoogleLogIn } = useContext(AuthContext);

    const [success, setSuccess] = useState(false);

    const [error, setError] = useState("");

    const [userShow, setUserShow] = useState({})
    const handleGoogleLog = () => {

        handleGoogleLogIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setUserShow(user)
                setSuccess(true)
            }).catch(error => {
                console.log('error:', error);
            })

    }


    const handleRegistation = (event) => {
        setSuccess(false)
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        if (!/(?=.*[A-Z].*[A-])/.test(password)) {
            setError('please provide at least two uppercase')
            return;

        }
        if (!/(?=.*[@$!%*?&])/.test(password)) {
            setError('please give a special charecter');
            return;
        }
        if (password.length < 6) {
            setError('password should be at least 6 charecters')
            return;
        }
        setError('')


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true)
                form.reset();
            })
            .catch(error => {
                console.log(error);
                setError(error.massage);
                form.reset();

            })

        verifyEmail()
            .then(() => {
                alert("please check your email and verify your email address")
            })

        updateUserName(name)
            .then(() => {
                console.log('update user name');
            })
            .catch(error => console.log(error))


    }


    // const [userShow, setUserShow] = useState({})
    // const googleProvider = new GoogleAuthProvider()

    // const handleGoogleLogIn = () => {

    //     signInWithPopup(auth, googleProvider)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             setUserShow(user)
    //             setSuccess(true)
    //         }).catch(error => {
    //             console.log('error:', error);
    //         })
    // }


    // const [error, setError] = useState("");

    // const [success, setSuccess] = useState(false);

    // const handleRegistation = (event) => {

    //     setSuccess(false)
    //     event.preventDefault()
    //     const form = event.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;

    //     if (!/(?=.*[A-Z].*[A-])/.test(password)) {
    //         setError('please provide at least two uppercase')
    //         return;

    //     }
    //     if (!/(?=.*[@$!%*?&])/.test(password)) {
    //         setError('please give a special charecter');
    //         return;
    //     }
    //     if (password.length < 6) {
    //         setError('password should be at least 6 charecters')
    //         return;
    //     }
    //     setError('')

    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             setSuccess(true)

    //             form.reset()

    //             updateUserName(name)

    //         }).catch(error => {
    //             setError(error.massage)
    //             console.log(error);
    //             form.reset();
    //         })

    //     const verifyEmail = () => {

    //         sendEmailVerification(auth.currentUser)
    //             .then(() => {
    //                 alert("please check your email and verify your email address")
    //             })
    //     }

    //     const updateUserName = (name) => {
    //         updateProfile(auth.currentUser, {
    //             displayName: name,
    //         })
    //             .then(() => {
    //                 console.log('update user name');
    //             })
    //             .catch(error => console.log(error))
    //     }

    // }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl pb-5 font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegistation} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">

                                    <Link to='/login' className="label-text-alt link link-hover">Already have an account?LogIn</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
                            </div>

                        </form>
                        <div className="form-control pt-0 pb-0 p-8">
                            <button onClick={handleGoogleLog} className="btn btn-outline">Sign up with Google</button>
                        </div>

                        {
                            success && <p className='p-5 text-green-500'>Registation Successful.</p>
                        }
                        <p className='text-red-600 p-5'>{error}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Registation;
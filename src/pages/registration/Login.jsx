// eslint-disable-next-line no-unused-vars
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/data/myContext";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

function Login() {

  const context = useContext(myContext)
  const {loading, setLoading} = context;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const signin = async () => {
    setLoading(true)
    try {
      
      const result = await signInWithEmailAndPassword(auth, email, password)

      toast.success("Đăng nhập thành công!" , {
        position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
      });
      localStorage.setItem('user', JSON.stringify(result))
      navigate('/')
      setLoading(false);

    } catch (error) {
      toast.error ("Đăng nhập thất bại..." , {
        position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
      });
      setLoading(false);
    }
  }

  return (
    <div className=" flex justify-center items-center h-screen">
      {loading && <Loader/>}
      <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Login
          </h1>
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button 
          onClick={signin}
          className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg">
            Login
          </button>
        </div>
        <div>
          <h2 className="text-white">
            <p>Don&apos;t have an account?</p>
            <Link className=" text-yellow-500 font-bold" to={"/signup"}>
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;

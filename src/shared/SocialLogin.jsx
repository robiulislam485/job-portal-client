import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import AuthContext from "../Context/AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                navigate(from);

            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className=" p-6">
            <button onClick={handleGoogleLogin} className="btn w-full text-white text-lg  bg-[#e02454]"><FaGoogle /> Login With Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;
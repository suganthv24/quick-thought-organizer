
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // "Log in" and redirect—set a flag in localStorage
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F5F6FA]">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>
        <form className="space-y-4" onSubmit={e => {e.preventDefault(); handleLogin();}}>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-gray-200 p-3 text-base bg-gray-50 mb-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-gray-200 p-3 text-base bg-gray-50 mb-2"
            required
          />
          <Button className="w-full">Continue</Button>
        </form>
        <p className="text-center text-sm mt-6">
          Don&apos;t have an account?{" "}
          <button
            className="text-blue-600 hover:underline"
            onClick={() => navigate("/signup")}
            type="button"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;

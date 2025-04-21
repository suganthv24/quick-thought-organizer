
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    // "Sign up" and redirect—set a flag in localStorage
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F5F6FA]">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form className="space-y-4" onSubmit={e => {e.preventDefault(); handleSignUp();}}>
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
          <Button className="w-full">Sign Up</Button>
        </form>
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <button
            className="text-blue-600 hover:underline"
            onClick={() => navigate("/login")}
            type="button"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

import Input from "../components/Input";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = false;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="block w-full max-w-md overflow-hidden bg-gray-800 bg-opacity-50 shadow-xl file:backdrop-filter backdrop-blur-xl rounded-2xl">
      <div className="p-8">
        <h2 className="mb-6 text-3xl font-bold text-center text-transparent bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text">
          Welcome Back
        </h2>
        <form>
          <Input
            icon={Mail}
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center mb-2">
            <Link
              to="/forgot-password"
              className="text-sm text-green-400 hover:underline">
              Forgot password?
            </Link>
          </div>
          <motion.button
            className="w-full px-4 py-3 mt-5 font-bold text-white transition duration-200 rounded-lg shadow-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}>
            {isLoading ? (
              <Loader className="w-6 h-6 mx-auto animate-spin" />
            ) : (
              "Login"
            )}
          </motion.button>
        </form>
      </div>
      <div className="flex justify-center px-8 py-4 bg-gray-900 bg-opacity-50">
        <p className="text-sm text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default LoginPage;

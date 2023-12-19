import axios from "axios";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { setToken, setUser } from "../store/reducers/authSlice";
import { Link } from "react-router-dom";

function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(5).max(32).required("Password is required"),
    name: yup.string().required("Name is required"),
    role: yup.string().required("Role is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = async (data) => {
    console.log(data);

    const payload = {
      email: data.email,
      password: data.password,
      name: data.name,
      role: data.role,
    };

    try {
      const response = await axios.post("http://localhost:3000/users", payload);
      const { accessToken, user } = response.data;

      dispatch(setToken(accessToken));
      dispatch(setUser(user));

      alert("Successfully registered!");
      reset();
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-center font-bold text-2xl mb-4">Registration</h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <p className="text-center text-sm">
          Already registered?{" "}
          <Link
            to="/login"
            className="text-primary hover:underline hover:text-blue-900"
          >
            Login here
          </Link>
        </p>

        <div className="mb-4">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            placeholder="Email"
            className="w-full rounded-lg border-[1px] border-gray-200 p-4 text-sm focus:outline-sky-200"
            {...register("email")}
            id="email"
          />
          <p className="text-red-500 mt-1">{errors.email?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            placeholder="Password"
            className="w-full rounded-lg border-[1px] border-gray-200 p-4 text-sm focus:outline-sky-200"
            {...register("password")}
            id="password"
            type="password"
          />
          <p className="text-red-500 mt-1">{errors.password?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="text-sm">
            Name
          </label>
          <input
            placeholder="Name"
            className="w-full rounded-lg border-[1px] border-gray-200 p-4 text-sm focus:outline-sky-200"
            {...register("name")}
            id="name"
          />
          <p className="text-red-500 mt-1">{errors.name?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="role" className="text-sm">
            Role
          </label>
          <select
            className="p-4 pe-12 w-full rounded-lg border-[1px] border-gray-300 text-gray-700 sm:text-sm"
            {...register("role")}
            id="role"
          >
            <option value="">Please select</option>
            <option value="admin">admin</option>
            <option value="user">user</option>
          </select>
          <p className="text-red-500 mt-1">{errors.role?.message}</p>
        </div>

        <button
          className="rounded-lg bg-blue-500 py-2 text-white w-full"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;

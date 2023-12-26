import axios from "axios";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { setToken, setUser } from "../store/reducers/authSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(5).max(32).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = (data) => {
    axios
      .post("http://localhost:3000/login", data)
      .then((res) => {
        const { accessToken, user } = res.data;
        dispatch(setToken(accessToken));
        dispatch(setUser(user));
        navigate("/dashboard");
        reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-center font-bold text-2xl mb-4">Login</h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmitForm)}
      >
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

        <button
          className="rounded-lg bg-blue-500 py-2 text-white w-full"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

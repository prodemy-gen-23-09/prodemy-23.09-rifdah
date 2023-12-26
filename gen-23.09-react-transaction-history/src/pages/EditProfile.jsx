import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/reducers/authSlice";

function EditProfile() {
  const schema = yup.object().shape({
    password: yup.string().min(5).max(32).required("Password is required"),
    name: yup.string().required("Name is required"),
    role: yup.string().required("Role is required"),
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/users/${user.id}`,
        data
      );

      // Perbarui data pengguna di Redux
      dispatch(setUser(response.data));

      alert("Profile updated successfully!");
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/${user.id}`
        );
        const userData = response.data;

        if (userData) {
          setValue("email", userData.email);
          setValue("name", userData.name);
          setValue("role", userData.role);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id, setValue]);

  return (
    <section className="px-20 ml-96">
      <h1 className="text-3xl font-semibold">Edit Profile</h1>
      <div className="grid grid-cols-2 gap-20 mt-8">
        <div className="w-[500px]">
          <h2>Edit Profile</h2>
          <hr />
          <form
            className="flex flex-col gap-4 mt-4"
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <div>
              <label htmlFor="email">User Email</label>
              <input
                placeholder="User Email"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                {...register("email")}
                id="email"
                defaultValue={user.email}
              />
              <p className="error text-red-600">{errors.email?.message}</p>
            </div>

            <div>
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                placeholder="Enter new password"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 text-sm focus:outline-sky-200"
                {...register("password")}
                id="password"
                type="password"
              />
              <p className="text-red-500 mt-1">{errors.password?.message}</p>
            </div>

            <div>
              <label htmlFor="name">User Name</label>
              <input
                placeholder="User Name"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                {...register("name")}
                id="name"
                defaultValue={user.name}
              />
              <p className="error text-red-600">{errors.name?.message}</p>
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
              className="border border-white rounded-lg bg-sky-400 p-2 text-white self-center w-full"
              type="submit"
            >
              Edit Profile
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EditProfile;

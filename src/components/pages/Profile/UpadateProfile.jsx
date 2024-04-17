import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth"; // Import the updateProfile method from firebase/auth
import { toast, ToastContainer } from "react-toastify";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, setValue } = useForm();

  // Set default values for form fields
  setValue("displayName", user.displayName || "");
  setValue("photoURL", user.photoURL || "");

  const onSubmit = async (data) => {
    try {
      await updateProfile(user, data);
      toast.success("Profile updated successfully!");
      setInterval(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      toast.error("Oops something is wrong", error.message);
    }
  };

  return (
    <div className="my-10 lg:my-0 flex flex-col gap-5 justify-center md:h-[800px] lg:h-78">
      <img
        className="mx-auto rounded-full w-48 h-48 border-2 p-2"
        src={user.photoURL || ""}
        alt=""
      />

      <h1 className=" flex flex-col items-center gap-2">
        Welcome to update Profile
        <span className=" text-2xl uppercase text-blue-600 font-bold">
          {user.displayName}
        </span>
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 justify-center items-center">
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          disabled
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="New Photo URL"
          {...register("photoURL")}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="New Display Name"
          {...register("displayName")}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="submit"
          value="Update Details"
          className="input bg-success text-white input-bordered w-full max-w-xs"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfile;

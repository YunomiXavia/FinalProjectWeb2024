import Input from "../components/Input/Input";
import { Formik } from "formik";
import * as yup from "yup";
import RadioGender from "../components/Radio/RadioGender";
import logo from "../img/pngwing_1.png";

const LoginPage = () => {
  return (
    <div className="login-page flex space-x-5 gap-x-5 mb-5 justify-around ">
      <div className="flex flex-col space-y-5 gap-y-5">
        <div>
          <h1 className="font-bold text-2xl">Welcome !</h1>
          <h1 className="font-bold text-2xl mb-8">First things first...</h1>
          <span className="w-[485px] h-8 font-light text-base text-secondaryGray">
            Create a profile to powelllize your academic journey
          </span>
        </div>
        <div className="w-[475px] h[365px]">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="w-[570px] max-h-[950px] shadow-lg bg-white rounded-lg border">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            gender: "male",
            password: "",
            passwordConfirm: "",
          }}
          validationSchema={yup.object({
            firstName: yup.string().required("Please enter your first name"),
            lastName: yup.string().required("Please enter your last name"),
            email: yup
              .string()
              .email("Please enter your email address")
              .required("Please enter your email address"),
            gender: yup
              .string()
              .required("Please select your gender")
              .oneOf(["male", "female"], "You can only select male or female"),
            password: yup
              .string()
              .min(8, "Password must be 8 characters long")
              .matches(/[0-9]/, "Password requires a number")
              .matches(/[a-z]/, "Password requires a lowercase letter")
              .matches(/[A-Z]/, "Password requires an uppercase letter")
              .matches(/[^\w]/, "Password requires a symbol")
              .required("Please enter your password"),
            passwordConfirm: yup
              .string()
              .oneOf(
                [yup.ref("pass"), null],
                'Must match "password" field value'
              ),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              setSubmitting(false);
              resetForm();
            }, 5000);
          }}
        >
          {(formik) => {
            const watchGender = formik.values.gender;
            return (
              <form
                className="mt-10 ml-10"
                autoComplete="off"
                onSubmit={formik.handleSubmit}
              >
                <div className="flex gap-x-5">
                  <Input
                    name="firstName"
                    id="firstName"
                    label="FIRST NAME"
                    placeholder="Enter your first name"
                    type="text"
                    style={{ width: "230px" }}
                  ></Input>
                  <Input
                    name="lastName"
                    id="lastName"
                    label="LAST NAME"
                    placeholder="Enter your last name"
                    type="text"
                    style={{ width: "230px" }}
                  ></Input>
                </div>
                <Input
                  name="email"
                  id="email"
                  label="EMAIL ADDRESS"
                  placeholder="Enter your email address"
                  type="email"
                  style={{ width: "480px" }}
                ></Input>
                <div className="flex flex-col gap-3 mb-5">
                  <label className="text-secondaryGray cursor-pointer text-sm mt-4">
                    Gender
                  </label>
                  <div className="flex items-center gap-5">
                    <RadioGender
                      name="gender"
                      value="male"
                      cheked={watchGender === "male"}
                      label="Male"
                    ></RadioGender>
                    <RadioGender
                      name="gender"
                      value="female"
                      cheked={watchGender === "female"}
                      label="Female"
                    ></RadioGender>
                  </div>
                </div>
                <Input
                  name="password"
                  id="password"
                  label="ENTER PASSWORD"
                  placeholder="Enter your password"
                  type="password"
                  style={{ width: "480px" }}
                ></Input>
                <Input
                  name="passwordConfirm"
                  id="passwordConfirm"
                  label="REPEAT PASSWORD"
                  placeholder="Repeat your password"
                  type="password"
                  style={{ width: "480px" }}
                ></Input>
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-[480px] p-5 mt-5 font-semibold text-white bg-primaryGreen rounded-lg mb-7"
                >
                  {formik.isSubmitting ? (
                    <div className="w-5 h-5 rounded-full border-2 border-white border-t-2 border-t-transparent mx-auto animate-spin"></div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;

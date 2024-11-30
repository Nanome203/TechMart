export default function Signup({ isVisible, onClose, switchToLogIn }) {
  return (
    <section
      onClick={(e) => e.stopPropagation()}
      className={`${!isVisible && "hidden"} z-99 animate-in slide-in-from-top flex w-[500px] cursor-default flex-col items-center gap-2 rounded-2xl bg-gray-100 p-4 duration-300`}
    >
      <i
        className="fa-solid fa-x cursor-pointer self-end text-2xl hover:text-red-500"
        onClick={onClose}
      ></i>

      <h2 className="mb-2 text-center text-2xl font-semibold">Sign Up</h2>

      <div className="flex w-[390px] justify-between">
        <input
          type="text"
          placeholder="First Name"
          className="h-[55px] w-[185px] rounded-md border-none bg-gray-200 p-4 text-lg outline-none"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="h-[55px] w-[185px] rounded-md border-none bg-gray-200 p-4 text-lg outline-none"
        />
      </div>
      <input
        type="text"
        placeholder="Email"
        className="h-[55px] w-[390px] rounded-md border-none bg-gray-200 p-4 text-lg outline-none"
      />
      <input
        type="text"
        placeholder="Phone"
        className="h-[55px] w-[390px] rounded-md border-none bg-gray-200 p-4 text-lg outline-none"
      />

      <div className="flex h-[55px] w-[390px] items-center justify-between rounded-md bg-gray-200 p-4">
        <input
          type="text"
          placeholder="Day of Birth"
          className="w-full bg-transparent outline-none"
        />
        <i className="fa-regular fa-calendar text-lg"></i>
      </div>

      <input
        type="text"
        placeholder="Gender"
        className="h-[55px] w-[390px] rounded-md border-none bg-gray-200 p-4 text-lg outline-none"
      />

      <div className="flex h-[55px] w-[390px] justify-between">
        <input
          type="text"
          placeholder="Street"
          className="w-[185px] rounded-md border-none bg-gray-200 p-4 text-lg outline-none"
        />
        <input
          type="text"
          placeholder="City"
          className="w-[185px] rounded-md border-none bg-gray-200 p-4 text-lg outline-none"
        />
      </div>

      <div className="flex h-[55px] w-[390px] justify-between">
        <input
          type="text"
          placeholder="Zipcode"
          className="w-[185px] rounded-md border-none bg-gray-200 p-4 text-lg outline-none"
        />
        <input
          type="text"
          placeholder="State"
          className="w-[185px] rounded-md border-none bg-gray-200 p-4 text-lg outline-none"
        />
      </div>

      <div className="relative flex h-[55px] w-[390px] items-center justify-between rounded-md bg-gray-200 p-2">
        <input
          id="toggle-password"
          type="password"
          placeholder="Password"
          className="w-full rounded-md bg-transparent p-2 pr-10 outline-none"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex cursor-pointer items-center px-3 text-gray-600 focus:outline-none"
          onClick={() => {
            const input = document.getElementById("toggle-password");
            const icon = document.getElementById("toggle-icon");
            if (input.type === "password") {
              input.type = "text";
              icon.classList.replace("fa-eye-slash", "fa-eye");
            } else {
              input.type = "password";
              icon.classList.replace("fa-eye", "fa-eye-slash");
            }
          }}
        >
          <i id="toggle-icon" className="fa-regular fa-eye-slash text-lg"></i>
        </button>
      </div>

      <div className="relative flex h-[55px] w-[390px] items-center justify-between rounded-md bg-gray-200 p-2">
        <input
          id="toggle-confirm-password"
          type="password"
          placeholder="Confirm Password"
          className="w-full rounded-md bg-transparent p-2 pr-10 outline-none"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex cursor-pointer items-center px-3 text-gray-600 focus:outline-none"
          onClick={() => {
            const input = document.getElementById("toggle-confirm-password");
            const icon = document.getElementById("toggle-icon-confirm");
            if (input.type === "password") {
              input.type = "text";
              icon.classList.replace("fa-eye-slash", "fa-eye");
            } else {
              input.type = "password";
              icon.classList.replace("fa-eye", "fa-eye-slash");
            }
          }}
        >
          <i
            id="toggle-icon-confirm"
            className="fa-regular fa-eye-slash text-lg"
          ></i>
        </button>
      </div>

      <button className="h-12 w-[45%] cursor-pointer rounded-lg bg-blue-600 font-semibold text-white hover:border-2 hover:border-blue-600 hover:bg-white hover:text-blue-600">
        Sign Up
      </button>

      <div className="mb-1 mt-1 flex w-full items-center">
        <div className="mx-5 flex-1 border-t border-black"></div>
        <span className="text-lg text-gray-800">Or continue with</span>
        <div className="mx-5 flex-1 border-t border-black"></div>
      </div>

      <button className="flex h-12 w-[45%] cursor-pointer items-center justify-center rounded-lg border-2 border-blue-600 bg-gray-100 p-4 transition hover:scale-105">
        <img
          src="https://img.icons8.com/?size=36&id=17949&format=png&color=000000"
          alt="Google"
          className="h-6 w-6"
        />
        <p className="ml-3 font-semibold text-blue-600">Google</p>
      </button>

      <button className="flex h-12 w-[45%] cursor-pointer items-center justify-center rounded-lg border-2 border-blue-600 bg-gray-100 p-4 transition hover:scale-105">
        <img
          src="https://img.icons8.com/?size=36&id=118501&format=png&color=000000"
          alt="Facebook"
          className="h-6 w-6"
        />
        <p className="ml-3 font-semibold text-blue-600">Facebook</p>
      </button>

      <div className="mb-2">
        Already had an account?
        <button
          onClick={switchToLogIn}
          className="ml-1 font-semibold text-blue-600 underline hover:italic hover:no-underline"
        >
          Log In
        </button>
      </div>
    </section>
  );
}

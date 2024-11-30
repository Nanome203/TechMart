export default function Login({ isVisible, onClose, switchToSignUp }) {
  return (
    <section
      className={` ${isVisible ? "" : "hidden"} animate-in slide-in-from-top z-99 flex w-[500px] cursor-default flex-col items-center gap-4 rounded-2xl bg-gray-100 p-4`}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <i
        className="fa-solid fa-x cursor-pointer self-end text-2xl hover:text-red-500"
        onClick={onClose}
      ></i>

      <h2 className="mb-2 text-center text-2xl font-semibold">Login</h2>

      <input
        type="text"
        placeholder="Email"
        className="h-[55px] w-[390px] rounded-md border-none bg-gray-200 p-2 pl-4 text-lg outline-none"
      />

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

      <div className="flex w-[390px] items-center justify-between">
        <div className="inline-flex items-center">
          <label
            className="relative flex cursor-pointer items-center rounded-full p-3"
            htmlFor="ripple-on"
            data-ripple-dark="true"
          >
            <input
              id="ripple-on"
              type="checkbox"
              className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-slate-800 checked:bg-slate-800 checked:before:bg-slate-400 hover:shadow-md hover:before:opacity-10"
            />
            <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <label
            className="cursor-pointer text-[12px] text-sm text-slate-600"
            htmlFor="ripple-on"
          >
            Remberber me
          </label>
        </div>

        <a
          href="#"
          className="text-[12px] tracking-[0.3px] text-[#1173be] hover:underline"
        >
          Forgot password?
        </a>
      </div>

      <button className="h-12 w-[45%] cursor-pointer rounded-lg bg-blue-600 font-semibold text-white hover:border-2 hover:border-blue-600 hover:bg-white hover:text-blue-600">
        Login
      </button>

      <div className="mb-1 mt-1 flex w-full items-center">
        <div className="mx-5 flex-1 border-t border-black"></div>
        <span className="text-lg text-gray-800">Or continue with</span>
        <div className="mx-5 flex-1 border-t border-black"></div>
      </div>

      <button className="flex h-12 w-[45%] cursor-pointer items-center justify-center rounded-lg border-2 border-blue-600 bg-gray-100 p-2 transition hover:scale-105">
        <img
          src="https://img.icons8.com/?size=36&id=17949&format=png&color=000000"
          alt="Google"
          className="h-6 w-6"
        />
        <p className="ml-3 font-semibold text-blue-600">Google</p>
      </button>

      <button className="flex h-12 w-[45%] cursor-pointer items-center justify-center rounded-lg border-2 border-blue-600 bg-gray-100 p-2 transition hover:scale-105">
        <img
          src="https://img.icons8.com/?size=36&id=118501&format=png&color=000000"
          alt="Facebook"
          className="h-6 w-6"
        />
        <p className="ml-3 font-semibold text-blue-600">Facebook</p>
      </button>

      <div className="mb-2">
        Don’t have an account?
        <button
          className="ml-1 font-semibold text-blue-600 underline hover:italic hover:no-underline"
          onClick={switchToSignUp}
        >
          Sign Up
        </button>
      </div>
    </section>
  );
}

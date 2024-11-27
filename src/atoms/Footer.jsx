export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center bg-[#0071CE]">
      <div className="flex h-72 w-full items-center justify-center">
        <div className="flex w-1/2">
          <div
            id="about"
            className="flex w-1/4 flex-col items-center gap-3 text-white"
          >
            <b>ABOUT</b>
            <p>About Us</p>
            <p>Blog</p>
            <p>Contact Us</p>
            <p>Review</p>
          </div>
          <div
            id="privacy-services"
            className="flex w-1/4 flex-col items-center gap-3 text-white"
          >
            <b>PRIVACY AND SERVICES</b>
            <p>Privacy Policy</p>
            <p>Reviews</p>
            <p>Job Opinions</p>
            <p>Terms & Conditions</p>
          </div>
          <div
            id="shopping"
            className="flex w-1/4 flex-col items-center gap-3 text-white"
          >
            <b>SHOPPING</b>
            <p>Gift Cards</p>
            <p>FAQ</p>
            <p>Return Policy</p>
            <p>Online Catalogue</p>
            <p>Search</p>
          </div>
          <div
            id="account"
            className="flex w-1/4 flex-col items-center gap-3 text-white"
          >
            <b>ACCOUNT</b>
            <p>Log In</p>
            <p>Sign Up </p>
            <p>Delete Account</p>
            <p>Premium Package</p>
          </div>
        </div>
      </div>
      <div className="flex w-screen items-center justify-center gap-2 px-5">
        <img src="/src/assets/Logo.png" className="w-20 rounded-full" />
        <p className="font-[Oswald] text-5xl text-white">TechMart</p>
      </div>
      <p className="text-bold m-5 text-xl text-white">
        &copy;2024. All Right Reserved
      </p>
    </footer>
  );
}

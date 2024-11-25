function ManageAccount({ active, handlePageChange }) {
  return (
    <div className="flex max-h-[320px] w-3/12 flex-col space-y-5 rounded-lg bg-white p-4 shadow-md">
      <h2 className="text-2xl font-semibold">My Account</h2>
      <h3 className="text-lg font-semibold">Manage Account</h3>
      <ul className="ml-6 space-y-4 font-semibold text-[#333]">
        <li
          className={`cursor-pointer text-sm hover:text-[#0071ce] ${active === "1" ? "text-[#0071ce]" : ""}`}
          onClick={handlePageChange}
        >
          Manage Profile
        </li>
        <li
          className={`cursor-pointer text-sm hover:text-[#0071ce] ${active === "2" ? "text-[#0071ce]" : ""}`}
          onClick={handlePageChange}
        >
          Shopping Addresses
        </li>
        <li
          className={`cursor-pointer text-sm hover:text-[#0071ce] ${active === "3" ? "text-[#0071ce]" : ""}`}
          onClick={handlePageChange}
        >
          Credit Card
        </li>
        <li
          className={`cursor-pointer text-sm hover:text-[#0071ce] ${active === "4" ? "text-[#0071ce]" : ""}`}
          onClick={handlePageChange}
        >
          Gift Card
        </li>
        <li
          className={`cursor-pointer text-sm hover:text-[#0071ce] ${active === "5" ? "text-[#0071ce]" : ""}`}
          onClick={handlePageChange}
        >
          Recent Orders
        </li>
      </ul>
    </div>
  );
}

export default ManageAccount;

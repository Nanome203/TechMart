import { useState } from "react";
import ManageProfile from "./ManageProfile";
import ShoppingAddresses from "./ShoppingAddresses";
import CreditCard from "./CreditCard";
import GiftCard from "./GiftCard";
import RecentOrders from "./RecentOrders";
import ManageAccount from "./ManageAccount";

function ProfilePage() {
  const [page, setPage] = useState(<ManageProfile />);
  const [active, setActive] = useState("1");

  const handlePageChange = (e) => {
    switch (e.target.innerText) {
      case "Manage Profile":
        setPage(<ManageProfile />);
        setActive("1");
        break;
      case "Shopping Addresses":
        setPage(<ShoppingAddresses />);
        setActive("2");
        break;
      case "Credit Card":
        setPage(<CreditCard />);
        setActive("3");
        break;
      case "Gift Card":
        setPage(<GiftCard />);
        setActive("4");
        break;
      case "Recent Orders":
        setPage(<RecentOrders />);
        setActive("5");
        break;
      default:
        setPage(<ManageProfile />);
        setActive("1");
    }
  };

  return (
    <div className="mx-36 my-10 flex gap-5">
      <ManageAccount active={active} handlePageChange={handlePageChange} />
      <div className="w-9/12 rounded-lg bg-white shadow-md">
        <div className="">{page}</div>
      </div>
    </div>
  );
}

export default ProfilePage;

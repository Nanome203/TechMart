"use client";

import React, { useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import {
  FaCheck,
  FaExclamationCircle,
  FaCcPaypal,
  FaShippingFast,
  FaTruckPickup,
} from "react-icons/fa";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const DialogPopup = ({ props }) => {
  const [open, setOpen] = React.useState(props.isOpened);

  const handleClose = () => {
    setOpen(false);
    props.onClose();
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                  <FaExclamationCircle
                    aria-hidden="true"
                    className="size-6 text-red-600"
                  />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold text-gray-900"
                  >
                    {props.title}
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{props.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={handleClose}
                className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-300 sm:ml-3 sm:w-auto"
              >
                OK
              </button>
              <button
                type="button"
                data-autofocus
                onClick={handleClose}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

const PaymentReceipt = ({ props }) => {
  return (
    <div className={"my-10 w-64 rounded-2xl border-2 border-gray-800 p-2"}>
      <div className={"mx-5 flex justify-between"}>
        <div>
          <p className={"my-2 text-xl"}>Subtotal</p>
          <p className={"my-2 text-xl"}>Delivery</p>
          <p className={"my-2 text-xl"}>Est. taxes & fees</p>
        </div>
        <div>
          <p className={"my-2 text-xl font-bold"}>${props.subtotal}</p>
          <p className={"my-2 text-xl font-bold"}>${props.delivery}</p>
          <p className={"my-2 text-xl font-bold"}>${props.tax}</p>
        </div>
      </div>
      <hr className={"my-5"} />
      <div className={"mx-5 flex justify-between"}>
        <p className={"text-xl font-semibold"}>Est. Total</p>
        <p className={"text-xl font-bold"}>
          ${props.subtotal + props.delivery + props.tax}
        </p>
      </div>
      <div className={"mx-5"}>
        <p className={"cursor-pointer"}>
          <span className={"underline"}>See more detail</span>{" "}
          <span className={"-pointer text-4xl"}>+</span>
        </p>
      </div>
    </div>
  );
};

// Payment sucess modal dialog
const PaymentSuccessModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="w-80 rounded-lg bg-white p-8 text-center shadow-lg">
        <h2 className="text-xl font-bold text-green-600">
          Successful Payment!
        </h2>
        <p className="mt-4">Returning to the homepage in 5s.</p>
        <button
          className="mt-4 rounded-full bg-blue-500 px-6 py-2 text-white"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function Payment() {
  // -- Payment logic state --
  const [progress, setProgress] = React.useState(0);
  const [modal, setModal] = React.useState({
    isOpened: false,
    title: "",
    description: "",
  });
  // -- Delivery & Pickup Option --
  const [deliveryPlan, setDeliveryPlan] = React.useState("delivery_normal");
  const [storeAddress, setStoreAddress] = React.useState("");
  const [pickupDate, setPickupDate] = React.useState();

  // -- Confirm delivery address --
  const [deliveryAddress, setDeliveryAddress] = React.useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    province: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
    aptSuite: "", // Optional
    emailNotification: "",
    emailNews: false,
  });

  // -- Pickup Person --
  const [pickupPerson, setPickupPerson] = React.useState({
    firstName: "",
    lastName: "",
    emailNotification: "",
    phoneNumber: "",
  });

  // -- Payment Method --
  const [paymentMethod, setPaymentMethod] = React.useState("credit_card");
  // Credit/Debit Card
  const [creditCard, setCreditCard] = React.useState({
    cardNumber: "",
    cardName: "",
    cardExpireDate: "",
    cardCVV: "",
    cardPostalCode: "",
  });
  // Paypal
  const [paypal, setPaypal] = React.useState({
    paypalEmail: "",
    paypalPassword: "",
  });

  // Pay by UPI
  const [payupi, setPayupi] = React.useState({
    payupiEmail: "",
  });

  // -- Handle Continue and Back option to move between screen --
  /* 
    progress            progressName
    0                   Delivery & Pickup Option
    1                   Confirm delivery address
    2                   Pickup person
    3                   Payment method
  */
  const handleBackOption = () => {
    // Disable back option when progress state is 0
    if (progress !== 0) setProgress((prev) => prev - 1);
  };

  const handleContinueOption = () => {
    // Popup modal to notify the customer when missing any information
    switch (progress) {
      case 0:
        {
          //Handle pickupDate and storeAddress
          if (storeAddress === "") {
            setModal({
              isOpened: true,
              title: "Invalid Address",
              description: "Please fill the TechMart store address!",
            });
            return;
          }
          if (pickupDate === undefined) {
            setModal({
              isOpened: true,
              title: "Invalid Pickup Date",
              description: "Please choose the pickup date!",
            });
            return;
          }
        }
        break;
      case 1:
        {
          const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
          // Handles all the field
          if (
            deliveryAddress.firstName === "" ||
            deliveryAddress.lastName === "" ||
            deliveryAddress.streetAddress === "" ||
            deliveryAddress.province === "" ||
            deliveryAddress.city === "" ||
            deliveryAddress.zipCode === "" ||
            deliveryAddress.phoneNumber === "" ||
            deliveryAddress.emailNotification === "" ||
            !regex.test(deliveryAddress.emailNotification)
          ) {
            if (!regex.test(deliveryAddress.emailNotification))
              setModal({
                isOpened: true,
                title: "Invalid email",
                description: "Please enter the email correctly.",
              });
            else
              setModal({
                isOpened: true,
                title: "Missing field in confirm delivery address",
                description: "Please fill all the required field.",
              });
            return;
          }
        }
        break;
      case 2:
        {
          const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
          if (
            pickupPerson.firstName === "" ||
            pickupPerson.lastName === "" ||
            pickupPerson.emailNotification === "" ||
            pickupPerson.phoneNumber === "" ||
            !regex.test(pickupPerson.emailNotification)
          ) {
            if (!regex.test(pickupPerson.emailNotification))
              setModal({
                isOpened: true,
                title: "Invalid email",
                description: "Please enter the email correctly.",
              });
            else
              setModal({
                isOpened: true,
                title: "Missing field in pickup person",
                description: "Please fill all the required field.",
              });
            return;
          }
        }
        break;
      case 3:
        // Depend on what the payment method user use, check the
        // field input based on the selection
        {
          if (paymentMethod === "credit_card") {
            const regex =
              /^(1[0-2]|0[1-9]|\d)\/(20\d{2}|19\d{2}|0(?!0)\d|[1-9]\d)$/;
            if (
              creditCard.cardNumber === "" ||
              creditCard.cardName === "" ||
              creditCard.cardExpireDate === "" ||
              creditCard.cardCVV === "" ||
              creditCard.cardPostalCode === "" ||
              !regex.test(creditCard.cardExpireDate)
            ) {
              if (!regex.test(creditCard.cardExpireDate))
                setModal({
                  isOpened: true,
                  title: "Invalid credit card expiration date",
                  description:
                    "Please enter the credit card expiration date correctly.",
                });
              else
                setModal({
                  isOpened: true,
                  title: "Missing field in credit card payment",
                  description: "Please fill all the required field.",
                });
              return;
            }
          } else if (paymentMethod === "paypal") {
            const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
            if (
              paypal.paypalEmail === "" ||
              paypal.paypalPassword === "" ||
              !regex.test(paypal.paypalEmail)
            ) {
              if (!regex.test(paypal.paypalEmail))
                setModal({
                  isOpened: true,
                  title: "Invalid Paypal email",
                  description: "Please enter the valid Paypal email.",
                });
              else
                setModal({
                  isOpened: true,
                  title: "Missing field in Paypal payment",
                  description: "Please fill all the required field.",
                });
              return;
            }
          } else if (paymentMethod === "payupi") {
            const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
            if (payupi.payupiEmail === "" || !regex.test(payupi.payupiEmail)) {
              if (!regex.test(payupi.payupiEmail))
                setModal({
                  isOpened: true,
                  title: "Invalid Pay UPI email",
                  description: "Please enter the valid Pay UPI email.",
                });
              else
                setModal({
                  isOpened: true,
                  title: "Missing field in Pay UPI",
                  description: "Please fill all the required field.",
                });
              return;
            }
          } else {
            //Nothing in else
          }
        }
        break;
    }

    // Disable continue/Handle into payment when progress state is 3
    setTimeout(() => {
      if (progress !== 4) setProgress((prev) => prev + 1);
    }, 100);
  };

  // -- Handle the close modal option
  const handleCloseModal = () => {
    setModal((prev) => ({ ...prev, isOpened: false }));
  };

  // -- Handle Payment Method sucess with database here --
  // const [paymentSuccess, setPaymentSuccess] = useState(false); // Quản lý trạng thái thanh toán thành công
  // const handlePayment = () => {
  //   // Hiển thị thông báo thanh toán thành công
  //   setPaymentSuccess(true);
  //   // Sau 5 giây, điều hướng về trang chủ
  //   setTimeout(() => {
  //     window.location.href = "http://localhost:5173/"; // Điều hướng đến trang chủ
  //   }, 5000); // 5 giây
  // };
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Quản lý trạng thái modal
  const [loading, setLoading] = useState(false); // Quản lý trạng thái thanh toán
  const handlePayment = () => {
    setLoading(true);
    // Mô phỏng thanh toán thành công
    setTimeout(() => {
      // Hiển thị modal thông báo thanh toán thành công
      setPaymentSuccess(true);
      // Sau 5 giây, điều hướng về trang chủ
      setTimeout(() => {
        window.location.href = "http://localhost:5173/"; // Điều hướng về trang chủ
      }, 5000);
    }, 2000); // Mô phỏng thời gian xử lý thanh toán (2 giây)
  };

  // -- Render the web --
  return (
    <>
      {modal.isOpened && (
        <DialogPopup
          props={{
            title: modal.title,
            description: modal.description,
            isOpened: modal.isOpened,
            onClose: handleCloseModal,
          }}
        />
      )}
      <h1 className={"my-5 text-center text-4xl font-bold"}>Check Out</h1>
      <div className={"mx-10 mt-5"}>
        <div className={"relative flex items-start justify-center"}>
          <span
            className={"flex flex-col items-center justify-center text-center"}
          >
            <span
              className={`flex h-14 w-14 items-center justify-center border-4 border-black ${progress === 0 ? "bg-blue-500" : "bg-green-500"}`}
              style={{
                borderRadius: "100%",
              }}
            >
              {progress > 0 && <FaCheck className={"text-2xl"} />}
            </span>
            <span
              className={`mt-5 w-24 ${progress === 0 ? "font-bold text-blue-500" : "text-green-500"}`}
            >
              Delivery & Pickup Option
            </span>
          </span>
          <span className={"relative top-7 h-1 w-48 bg-black"} />
          <span
            className={"flex flex-col items-center justify-center text-center"}
          >
            <span
              className={`flex h-14 w-14 items-center justify-center border-4 border-black ${progress === 1 ? "bg-blue-500" : progress < 1 ? "bg-white" : "bg-green-500"}`}
              style={{
                borderRadius: "100%",
              }}
            >
              {progress > 1 && <FaCheck className={"text-2xl"} />}
            </span>
            <span
              className={`mt-5 w-24 ${progress === 1 ? "font-bold text-blue-500" : progress < 1 ? "text-black" : "text-green-500"}`}
            >
              Confirm delivery address
            </span>
          </span>
          <span className={"relative top-7 h-1 w-48 bg-black"} />

          <span
            className={"flex flex-col items-center justify-center text-center"}
          >
            <span
              className={`flex h-14 w-14 items-center justify-center border-4 border-black ${progress === 2 ? "bg-blue-500" : progress < 2 ? "bg-white" : "bg-green-500"}`}
              style={{
                borderRadius: "100%",
              }}
            >
              {progress > 2 && <FaCheck className={"text-2xl"} />}
            </span>
            <span
              className={`mt-5 w-24 ${progress === 2 ? "font-bold text-blue-500" : progress < 2 ? "text-black" : "text-green-500"}`}
            >
              Pickup Person
            </span>
          </span>
          <span className={"relative top-7 h-1 w-48 bg-black"} />
          <span
            className={"flex flex-col items-center justify-center text-center"}
          >
            <span
              className={`flex h-14 w-14 items-center justify-center border-4 border-black ${progress === 3 ? "bg-blue-500" : progress < 3 ? "bg-white" : "bg-green-500"}`}
              style={{
                borderRadius: "100%",
              }}
            >
              {progress > 3 && <FaCheck className={"text-2xl"} />}
            </span>
            <span
              className={`mt-5 w-24 ${progress === 3 ? "font-bold text-blue-500" : progress < 3 ? "text-black" : "text-green-500"}`}
            >
              Payment Method
            </span>
          </span>
        </div>
        {/* Delivery & Pickup Option */}
        {progress === 0 && (
          <>
            <div className={"flex flex-row justify-between"}>
              <div>
                <h2 className={"text-2xl font-bold"}>
                  Choose your delivery plan
                </h2>
                <div>
                  <div
                    className={"flex w-full cursor-pointer"}
                    onClick={() => {
                      setDeliveryPlan("delivery_plus");
                    }}
                  >
                    <input
                      className={"cursor-pointer"}
                      type="radio"
                      name="delivery_plan"
                      value="delivery_plus"
                      checked={deliveryPlan === "delivery_plus"}
                      onChange={(e) => setDeliveryPlan(e.target.value)}
                    />
                    <div
                      className={`m-3 flex items-center rounded-2xl border-4 p-3 ${deliveryPlan === "delivery_plus" ? "border-blue-500" : "border-gray-200"}`}
                    >
                      <FaShippingFast
                        className={`mr-3 text-5xl ${deliveryPlan === "delivery_plus" ? "text-blue-500" : "text-black"}`}
                      />
                      <p
                        className={`${deliveryPlan === "delivery_plus" ? "text-blue-500" : "text-black"}`}
                      >
                        Fast Delivery <span>(Require TechMart Premium+)</span>
                      </p>
                    </div>
                  </div>
                  <div
                    className={"flex w-full cursor-pointer"}
                    onClick={() => {
                      setDeliveryPlan("delivery_normal");
                    }}
                  >
                    <input
                      className={"cursor-pointer"}
                      type="radio"
                      name="delivery_plan"
                      value="delivery_normal"
                      checked={deliveryPlan === "delivery_normal"}
                      onChange={(e) => setDeliveryPlan(e.target.value)}
                    />
                    <div
                      className={`m-3 flex w-full items-center rounded-2xl border-4 p-3 ${deliveryPlan === "delivery_normal" ? "border-blue-500" : "border-gray-200"}`}
                    >
                      <CiDeliveryTruck
                        className={`mr-3 text-5xl ${deliveryPlan === "delivery_normal" ? "text-blue-500" : "text-black"}`}
                      />
                      <p
                        className={`${deliveryPlan === "delivery_normal" ? "text-blue-500" : "text-black"}`}
                      >
                        Shipping
                      </p>
                    </div>
                  </div>
                  <div
                    className={"flex w-full cursor-pointer"}
                    onClick={() => {
                      setDeliveryPlan("pickup");
                    }}
                  >
                    <input
                      className={"cursor-pointer"}
                      type="radio"
                      name="delivery_plan"
                      value="pickup"
                      checked={deliveryPlan === "pickup"}
                      onChange={(e) => setDeliveryPlan(e.target.value)}
                    />
                    <div
                      className={`m-3 flex w-full items-center rounded-2xl border-4 p-3 ${deliveryPlan === "pickup" ? "border-blue-500" : "border-gray-200"}`}
                    >
                      <FaTruckPickup
                        className={`mr-3 text-5xl ${deliveryPlan === "pickup" ? "text-blue-500" : "text-black"}`}
                      />
                      <p
                        className={`${deliveryPlan === "pickup" ? "text-blue-500" : "text-black"}`}
                      >
                        Pickup
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <PaymentReceipt
                props={{
                  subtotal: 369.25,
                  delivery: 0.0,
                  tax: 5.22,
                }}
              />
            </div>
            <hr />
            <div>
              <h2 className={"text-2xl font-bold"}>
                Choose the TechMart store
              </h2>
              <div className={"flex"}>
                <div className={"my-3 mr-3 flex flex-col"}>
                  <label for="address" className={"my-2 h-9 font-semibold"}>
                    Address
                  </label>
                  <label for="pickupdate" className={"my-2 h-9 font-semibold"}>
                    Pickup Date
                  </label>
                </div>
                <div className={"my-3 ml-3 flex flex-col"}>
                  <input
                    className={"my-1 h-9 w-96 rounded-xl border-2 p-2"}
                    type="text"
                    name="address"
                    value={storeAddress}
                    onChange={(e) => {
                      setStoreAddress(e.target.value);
                    }}
                    placeholder="Ex. TechMart Supercenter, Thu Duc, Ho Chi Minh City, Vietnam"
                  />
                  <input
                    className={"my-1 h-9 rounded-xl border-2 p-2"}
                    type="date"
                    name="pickupdate"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                  />
                  <span className={"ml-3 mt-1 text-xs"}>
                    We'll hold your items up to
                    <span className={"font-bold"}> 4 days.</span>
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Confirm delivery address */}
        {progress === 1 && (
          <>
            <div className={"flex flex-row justify-between"}>
              <div>
                <h2 className={"text-2xl font-bold"}>
                  Confirm delivery address
                </h2>
                <p className={"text-sm font-light"}>
                  Required field <span className={"text-red-500"}>*</span>
                </p>
                <div className={"flex flex-row justify-between"}>
                  <div className={"mr-5 flex w-full flex-col"}>
                    <label for="first_name">
                      First Name <span className={"text-red-500"}>*</span>
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      className={"my-1 h-9 w-64 rounded-xl border-2 p-2"}
                      value={deliveryAddress.firstName}
                      onChange={(e) =>
                        setDeliveryAddress((prev) => ({
                          ...prev,
                          firstName: e.target.value,
                        }))
                      }
                    />
                    <label for="street_address">
                      Street Address <span className={"text-red-500"}>*</span>
                    </label>
                    <input
                      type="text"
                      name="street_address"
                      className={"my-1 h-9 w-64 rounded-xl border-2 p-2"}
                      value={deliveryAddress.streetAddress}
                      onChange={(e) =>
                        setDeliveryAddress((prev) => ({
                          ...prev,
                          streetAddress: e.target.value,
                        }))
                      }
                    />
                    <label for="city">
                      City <span className={"text-red-500"}>*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      className={"my-1 h-9 w-64 rounded-xl border-2 p-2"}
                      value={deliveryAddress.city}
                      onChange={(e) =>
                        setDeliveryAddress((prev) => ({
                          ...prev,
                          city: e.target.value,
                        }))
                      }
                    />
                    <label for="phone_number">
                      Phone Number <span className={"text-red-500"}>*</span>
                    </label>
                    <input
                      type="text"
                      name="phone_number"
                      className={"my-1 h-9 w-64 rounded-xl border-2 p-2"}
                      value={deliveryAddress.phoneNumber}
                      onChange={(e) => {
                        const re = /^[0-9\b]+$/;

                        if (e.target.value === "" || re.test(e.target.value))
                          setDeliveryAddress((prev) => ({
                            ...prev,
                            phoneNumber: e.target.value,
                          }));
                      }}
                    />
                    <label for="email_notification">
                      Email address for order notification{" "}
                      <span className={"text-red-500"}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email_notification"
                      className={"my-1 h-9 w-64 rounded-xl border-2 p-2"}
                      value={deliveryAddress.emailNotification}
                      onChange={(e) =>
                        setDeliveryAddress((prev) => ({
                          ...prev,
                          emailNotification: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className={"ml-5 flex w-full flex-col"}>
                    <label for="last_name">
                      Last Name <span className={"text-red-500"}>*</span>
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      className={"my-1 h-9 w-64 rounded-xl border-2 p-2"}
                      value={deliveryAddress.lastName}
                      onChange={(e) =>
                        setDeliveryAddress((prev) => ({
                          ...prev,
                          lastName: e.target.value,
                        }))
                      }
                    />
                    <label for="province">
                      Province <span className={"text-red-500"}>*</span>
                    </label>
                    <input
                      type="text"
                      name="province"
                      className={"my-1 h-9 w-64 rounded-xl border-2 p-2"}
                      value={deliveryAddress.province}
                      onChange={(e) =>
                        setDeliveryAddress((prev) => ({
                          ...prev,
                          province: e.target.value,
                        }))
                      }
                    />
                    <label for="zipcode">
                      ZIP Code <span className={"text-red-500"}>*</span>
                    </label>
                    <input
                      type="text"
                      name="zipcode"
                      className={"my-1 h-9 w-28 rounded-xl border-2 p-2"}
                      value={deliveryAddress.zipCode}
                      onChange={(e) => {
                        const re = /^[0-9\b]+$/;

                        if (e.target.value === "" || re.test(e.target.value))
                          setDeliveryAddress((prev) => ({
                            ...prev,
                            zipCode: e.target.value,
                          }));
                      }}
                    />
                    <label for="aptsuite">Apt. suite, ect (optional)</label>
                    <input
                      type="text"
                      name="aptsuite"
                      className={"my-1 h-9 w-28 rounded-xl border-2 p-2"}
                      value={deliveryAddress.aptSuite}
                      onChange={(e) =>
                        setDeliveryAddress((prev) => ({
                          ...prev,
                          aptSuite: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div
                  className={"cursor-pointer hover:opacity-80"}
                  onClick={() => {
                    setDeliveryAddress((prev) => ({
                      ...prev,
                      emailNews: !prev.emailNews,
                    }));
                  }}
                >
                  <input
                    type="checkbox"
                    name="email_news"
                    className={"mr-3 cursor-pointer"}
                    checked={deliveryAddress.emailNews}
                    onChange={() => {
                      setDeliveryAddress((prev) => ({
                        ...prev,
                        emailNews: !prev.emailNews,
                      }));
                    }}
                  />
                  <label
                    for="email_news"
                    className={"cursor-pointer hover:opacity-80"}
                  >
                    Email me about hot items, great saving, and more.
                  </label>
                </div>
              </div>
              <div>
                <PaymentReceipt
                  props={{
                    subtotal: 369.25,
                    delivery: 0.0,
                    tax: 5.22,
                  }}
                />
              </div>
            </div>
          </>
        )}
        {progress === 2 && (
          <>
            <div className={"flex flex-row justify-between"}>
              <div>
                <h2 className={"text-2xl font-bold"}>Pickup person</h2>
                <p className={"text-sm font-light"}>
                  Required Field <span className={"text-red-500"}>*</span>
                </p>
                <div className={"flex flex-row justify-between"}>
                  <div className={"mr-5 flex w-full flex-col"}>
                    <label for="pickup_first_name">
                      First name on photo ID{" "}
                      <span className={"text-red-500"}>*</span>
                    </label>
                    <input
                      type="text"
                      name="pickup_first_name"
                      className={"my-1 h-9 w-64 rounded-xl border-2 p-2"}
                      value={pickupPerson.firstName}
                      onChange={(e) => {
                        setPickupPerson((prev) => ({
                          ...prev,
                          firstName: e.target.value,
                        }));
                      }}
                    />
                    <label for="pickup_email_notification">
                      Email for order notification{" "}
                      <span className={"text-red-500"}>*</span>
                    </label>
                    <input
                      type="text"
                      name="pickup_email_notification"
                      className={"my-1 h-9 w-64 rounded-xl border-2 p-2"}
                      value={pickupPerson.emailNotification}
                      onChange={(e) => {
                        setPickupPerson((prev) => ({
                          ...prev,
                          emailNotification: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div className={"ml-5 flex w-full flex-col"}>
                    <label for="pickup_last_name">
                      Last name on photo ID{" "}
                      <span className={"text-red-500"}>*</span>
                    </label>
                    <input
                      type="text"
                      name="pickup_last_name"
                      className={"my-1 h-9 w-64 rounded-xl border-2 p-2"}
                      value={pickupPerson.lastName}
                      onChange={(e) => {
                        setPickupPerson((prev) => ({
                          ...prev,
                          lastName: e.target.value,
                        }));
                      }}
                    />
                    <label for="pickup_phone_notification">
                      Phone for order notification{" "}
                      <span className={"text-red-500"}>*</span>
                    </label>
                    <input
                      type="text"
                      name="pickup_phone_notification"
                      className={"my-1 h-9 w-64 rounded-xl border-2 p-2"}
                      value={pickupPerson.phoneNumber}
                      onChange={(e) => {
                        const re = /^[0-9\b]+$/;

                        if (e.target.value === "" || re.test(e.target.value))
                          setPickupPerson((prev) => ({
                            ...prev,
                            phoneNumber: e.target.value,
                          }));
                      }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <PaymentReceipt
                  props={{
                    subtotal: 369.25,
                    delivery: 0.0,
                    tax: 5.22,
                  }}
                />
              </div>
            </div>
          </>
        )}
        {progress === 3 && (
          <>
            <div className={"flex flex-row justify-between"}>
              <div>
                <h2 className={"text-2xl font-bold"}>
                  Choose your payment method
                </h2>
                <p className={"text-sm font-light"}>
                  Required Field <span className={"text-red-500"}>*</span>
                </p>
                <div>
                  <div
                    className={"flex cursor-pointer"}
                    onClick={() => {
                      setPaymentMethod("credit_card");
                    }}
                  >
                    <input
                      type="radio"
                      name="payment_method"
                      value="credit_card"
                      checked={paymentMethod === "credit_card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className={"cursor-pointer"}
                    />
                    <p
                      className={`m-2 font-bold ${paymentMethod === "credit_card" ? "text-black" : "text-gray-500"}`}
                    >
                      Credit/Debit Card
                    </p>
                  </div>
                  {paymentMethod === "credit_card" && (
                    <div className={"flex flex-row justify-between"}>
                      <div className={"mr-5 flex flex-col"}>
                        <label for="credit_card_number">
                          Card Number <span className={"text-red-500"}>*</span>
                        </label>
                        <input
                          type="text"
                          name="credit_card_number"
                          className={"my-1 h-9 w-64 rounded-xl border-2 p-2"}
                          value={creditCard.cardNumber}
                          onChange={(e) => {
                            const re = /^[0-9\b]+$/;

                            if (
                              e.target.value === "" ||
                              re.test(e.target.value)
                            )
                              setCreditCard((prev) => ({
                                ...prev,
                                cardNumber: e.target.value,
                              }));
                          }}
                        />
                        <label for="credit_card_name">
                          Card Name <span className={"text-red-500"}>*</span>
                        </label>
                        <input
                          type="text"
                          name="credit_card_name"
                          className={"my-1 h-9 w-64 rounded-xl border-2 p-2"}
                          value={creditCard.cardName}
                          onChange={(e) =>
                            setCreditCard((prev) => ({
                              ...prev,
                              cardName: e.target.value,
                            }))
                          }
                        />
                        <label for="credit_card_expire_date">
                          Expire Date(mm/yy){" "}
                          <span className={"text-red-500"}>*</span>
                        </label>
                        <input
                          type="text"
                          name="credit_card_expire_date"
                          placeholder="mm/yy"
                          className={"my-1 h-9 w-40 rounded-xl border-2 p-2"}
                          value={creditCard.cardExpireDate}
                          onChange={(e) => {
                            // Regular expression for the mm/yy format where mm is between 01 and 12
                            const regex = /^(0[1-9]|1[0-2])\/\d{3}$/;

                            // Clean the input to only allow numbers
                            let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters

                            // Automatically insert a slash after the first two digits for the month
                            if (value.length > 2) {
                              value =
                                value.slice(0, 2) + "/" + value.slice(2, 4);
                            }

                            // Ensure the value follows the mm/yy format and doesn't exceed 5 characters
                            if (
                              value.length <= 5 &&
                              (value === "" || !regex.test(value))
                            ) {
                              setCreditCard((prev) => ({
                                ...prev,
                                cardExpireDate: value,
                              }));
                            }
                          }}
                        />
                      </div>
                      <div className={"ml-5 flex flex-col"}>
                        <label for="credit_card_cvv">
                          CVV <span className={"text-red-500"}>*</span>
                        </label>
                        <input
                          type="text"
                          name="credit_card_cvv"
                          className={"my-1 h-9 w-40 rounded-xl border-2 p-2"}
                          value={creditCard.cardCVV}
                          onChange={(e) => {
                            const re = /^[0-9\b]+$/;

                            if (
                              e.target.value === "" ||
                              re.test(e.target.value)
                            )
                              setCreditCard((prev) => ({
                                ...prev,
                                cardCVV: e.target.value,
                              }));
                          }}
                        />
                        <label for="credit_card_zipcode">
                          Postal/Zip code{" "}
                          <span className={"text-red-500"}>*</span>
                        </label>
                        <input
                          type="text"
                          name="credit_card_zipcode"
                          className={"my-1 h-9 w-40 rounded-xl border-2 p-2"}
                          value={creditCard.cardPostalCode}
                          onChange={(e) => {
                            const re = /^[0-9\b]+$/;

                            if (
                              e.target.value === "" ||
                              re.test(e.target.value)
                            )
                              setCreditCard((prev) => ({
                                ...prev,
                                cardPostalCode: e.target.value,
                              }));
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <hr />
                <div>
                  <div
                    className={"flex cursor-pointer"}
                    onClick={() => {
                      setPaymentMethod("paypal");
                    }}
                  >
                    <input
                      type="radio"
                      name="payment_method"
                      value="paypal"
                      checked={paymentMethod === "paypal"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className={"cursor-pointer"}
                    />
                    <p
                      className={`m-2 font-bold ${paymentMethod === "paypal" ? "text-black" : "text-gray-500"}`}
                    >
                      Paypal
                    </p>
                  </div>
                  {paymentMethod === "paypal" && (
                    <div className={"flex flex-row"}>
                      <div className={"flex flex-col"}>
                        <label for="paypal_email">
                          Email ID <span className={"text-red-500"}>*</span>
                        </label>
                        <span className={"text-xs font-light"}>
                          Enter Email ID of your paypal account
                        </span>
                        <input
                          type="email"
                          name="paypal_email"
                          className={"my-1 h-9 w-80 rounded-xl border-2 p-2"}
                          value={paypal.paypalEmail}
                          onChange={(e) =>
                            setPaypal((prev) => ({
                              ...prev,
                              paypalEmail: e.target.value,
                            }))
                          }
                        />
                        <label for="paypal_password">
                          Password <span className={"text-red-500"}>*</span>
                        </label>
                        <span className={"text-xs font-light"}>
                          Enter Password ID of your paypal account
                        </span>
                        <input
                          type="password"
                          name="paypal_password"
                          className={"my-1 h-9 w-80 rounded-xl border-2 p-2"}
                          value={paypal.paypalPassword}
                          onChange={(e) =>
                            setPaypal((prev) => ({
                              ...prev,
                              paypalPassword: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div className={"flex items-center justify-center"}>
                        <FaCcPaypal className={"mx-24 text-6xl"} />
                      </div>
                    </div>
                  )}
                </div>
                <hr />
                <div>
                  <div
                    className={"flex cursor-pointer"}
                    onClick={() => {
                      setPaymentMethod("payupi");
                    }}
                  >
                    <input
                      className={"cursor-pointer"}
                      type="radio"
                      name="payment_method"
                      value="payupi"
                      checked={paymentMethod === "payupi"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <p
                      className={`m-2 font-bold ${paymentMethod === "payupi" ? "text-black" : "text-gray-500"}`}
                    >
                      Pay by UPI
                    </p>
                  </div>
                  {paymentMethod === "payupi" && (
                    <div className={"flex flex-row"}>
                      <div className={"flex flex-col"}>
                        <label for="payupi_email">
                          UPI ID <span className={"text-red-500"}>*</span>
                        </label>
                        <p className={"text-xs font-light"}>
                          Enter ID or UPI available to you
                        </p>
                        <input
                          type="text"
                          name="payupi_email"
                          className={"my-1 h-9 w-64 rounded-xl border-2 p-2"}
                          value={payupi.payupiEmail}
                          onChange={(e) =>
                            setPayupi((prev) => ({
                              ...prev,
                              payupiEmail: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <PaymentReceipt
                  props={{
                    subtotal: 369.25,
                    delivery: 0.0,
                    tax: 5.22,
                  }}
                />
              </div>
            </div>
          </>
        )}
        <div className={"mb-5 mt-10 flex justify-end text-right"}>
          {progress !== 3 ? (
            <button
              className={
                "w-35 mr-5 rounded-2xl border-2 bg-blue-500 px-5 py-2 text-lg text-white"
              }
              onClick={handleContinueOption}
            >
              Continue
            </button>
          ) : (
            <div>
              {/* Hiển thị modal thanh toán thành công */}
              {paymentSuccess && (
                <PaymentSuccessModal onClose={() => setPaymentSuccess(false)} />
              )}
              {/* Hiển thị nút Pay Now nếu chưa thanh toán */}
              {!paymentSuccess && (
                <button
                  className="w-35 mr-5 rounded-2xl border-2 bg-blue-500 px-5 py-2 text-lg text-white"
                  onClick={handlePayment}
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Pay Now"}
                </button>
              )}
            </div>
          )}
          <button
            className={`w-35 mr-5 rounded-2xl border-2 border-gray-300 px-5 py-2 text-lg text-gray-600 ${
              progress === 0 ? "hidden" : "inline-block"
            }`}
            onClick={handleBackOption}
          >
            Back
          </button>
          <button className="w-35 rounded-2xl border-2 bg-red-500 px-5 py-2 text-lg text-white">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

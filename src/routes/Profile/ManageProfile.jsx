import { useState } from "react";

const user = {
  firstName: "John",
  lastName: "Doe",
  birthDate: "2000-01-01",
  gender: "female",
  email: "john@gmail.com",
  phone: "1234567890",
  address: "123 Main St",
  province: "Ontario",
  city: "Toronto",
  country: "Canada",
  zipCode: "A1B 2C3",
  personalQuote: "Hello, World!",
};

function ManageProfile() {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [birthDate, setBirthDate] = useState(user.birthDate);
  const [gender, setGender] = useState(user.gender);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [province, setProvince] = useState(user.province);
  const [city, setCity] = useState(user.city);
  const [country, setCountry] = useState(user.country);
  const [zipCode, setZipCode] = useState(user.zipCode);
  const [personalQuote, setPersonalQuote] = useState(user.personalQuote);

  const [openModal, setOpenModal] = useState(false);
  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };
  const saveChangesHandler = () => {
    console.log("Save changes");
    closeModalHandler();
  };
  function Modal() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-6/12 rounded-md bg-white p-8">
          <h2 className="mb-4 text-2xl font-medium">
            Confirm update of user information?
          </h2>
          <div className="flex justify-end gap-4">
            <button
              className="h-[40px] w-[100px] rounded-md border-2 border-gray-300 bg-[#f5f5f5] hover:brightness-75"
              onClick={closeModalHandler}
            >
              Cancel
            </button>
            <button
              className="h-[40px] w-[100px] rounded-md bg-[#1173be] text-white hover:brightness-125"
              onClick={saveChangesHandler}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  }

  const firstNameChange = (e) => {
    setFirstName(e.target.value);
    console.log("First Name: ", e.target.value);
  };
  const lastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const birthDateChange = (e) => {
    setBirthDate(e.target.value);
  };
  const genderChange = (e) => {
    setGender(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const phoneChange = (e) => {
    setPhone(e.target.value);
  };
  const addressChange = (e) => {
    setAddress(e.target.value);
  };
  const provinceChange = (e) => {
    setProvince(e.target.value);
  };
  const cityChange = (e) => {
    setCity(e.target.value);
  };
  const countryChange = (e) => {
    setCountry(e.target.value);
  };
  const zipCodeChange = (e) => {
    setZipCode(e.target.value);
  };
  const personalQuoteChange = (e) => {
    setPersonalQuote(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 py-8 pl-20">
      <div className="flex gap-10">
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={firstNameChange}
            className="h-[50px] w-[350px] rounded-md border-2 border-gray-300 bg-[#f5f5f5] pl-4"
          />
        </div>
        <p>{firstName}</p>
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={lastNameChange}
            className="h-[50px] w-[350px] rounded-md border-2 border-gray-300 bg-[#f5f5f5] pl-4"
          />
        </div>
      </div>

      <div className="flex gap-10">
        <div className="flex flex-col">
          <label htmlFor="birthDate">Birth Date</label>
          <input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={birthDateChange}
            className="h-[50px] w-[350px] rounded-md border-2 border-gray-300 bg-[#f5f5f5] px-4"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="gender">Gender</label>
          <select
            value={gender}
            id="gender"
            onChange={genderChange}
            className="h-[50px] w-[350px] rounded-md border-2 border-gray-300 bg-[#f5f5f5] px-4"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      <div className="flex gap-10">
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={emailChange}
            className="h-[50px] w-[350px] rounded-md border-2 border-gray-300 bg-[#f5f5f5] pl-4"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={phoneChange}
            className="h-[50px] w-[350px] rounded-md border-2 border-gray-300 bg-[#f5f5f5] pl-4"
          />
        </div>
      </div>

      <div className="flex gap-10">
        <div className="flex flex-col">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={addressChange}
            className="h-[50px] w-[350px] rounded-md border-2 border-gray-300 bg-[#f5f5f5] pl-4"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="province">Province</label>
          <input
            type="text"
            id="province"
            value={province}
            onChange={provinceChange}
            className="h-[50px] w-[350px] rounded-md border-2 border-gray-300 bg-[#f5f5f5] pl-4"
          />
        </div>
      </div>

      <div className="flex gap-10">
        <div className="flex flex-col">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={cityChange}
            className="h-[50px] w-[350px] rounded-md border-2 border-gray-300 bg-[#f5f5f5] pl-4"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={countryChange}
            className="h-[50px] w-[350px] rounded-md border-2 border-gray-300 bg-[#f5f5f5] pl-4"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="zipCode">ZIP Code</label>
        <input
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={zipCodeChange}
          className="h-[50px] w-[350px] rounded-md border-2 border-gray-300 bg-[#f5f5f5] pl-4"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="personalQuote">Personal Quote</label>
        <textarea
          id="personalQuote"
          value={personalQuote}
          onChange={personalQuoteChange}
          rows={4}
          className="w-[740px] rounded-md border-2 border-gray-300 bg-[#f5f5f5] pl-4 pt-4"
        ></textarea>
      </div>

      <div className="mr-10 mt-4 flex justify-end gap-4">
        <button
          className="h-[40px] w-[100px] rounded-md bg-[#1173be] text-white hover:brightness-125"
          onClick={openModalHandler}
        >
          Save
        </button>
      </div>
      {openModal && <Modal />}
    </div>
  );
}

export default ManageProfile;

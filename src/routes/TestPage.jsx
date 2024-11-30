import ProductTag from "../atoms/ProductTag";

function TestPage() {
  return (
    <div>
      <ProductTag
        discountPercentage={50}
        // image="https://noithatthienhoa.vn/wp-content/uploads/2021/09/vang-sofa-ni-2.jpg"
        // image="https://cdn.viettelstore.vn/Images/Product/ProductImage/594842402.jpeg"
        image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS83rckFJZZJ2fmOj4Y8VuNniusTmzTwDk10965KiS5fZUdGgHFY7_z0NDwOYI9XqR4RZL95KajVKEQtw13U-HwO62CWkmQ5dOM0jPV8Lo&usqp=CAE"
        name="Modern LED Couple with Luxury Bed and Two Set of Pillows"
        stars={5}
        discountedPrice={100}
        originalPrice={200}
        id="MVNIoKNH3UsB"
      />
    </div>
  );
}

export default TestPage;

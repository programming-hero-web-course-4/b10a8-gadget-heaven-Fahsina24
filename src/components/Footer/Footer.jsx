const Footer = () => {
  const services = (
    <>
      <nav className="flex flex-col text-[#656374]">
        <h6 className="text-black font-bold">Services</h6>
        <p>Product Support</p>
        <p>Order Tracking</p>
        <p>Shipping & Delivery</p>
        <p>Returns</p>
      </nav>
    </>
  );

  const legal = (
    <nav className="flex flex-col text-[#656374]">
      <h6 className="text-black font-bold">Legal</h6>
      <p>Terms of use</p>
      <p>Privacy policy</p>
      <p>Cookie policy</p>
    </nav>
  );

  const company = (
    <>
      <nav className="flex flex-col text-[#656374]">
        <h6 className="text-black font-bold">Company</h6>
        <p>About Us</p>
        <p>Careers</p>
        <p>Contact</p>
      </nav>
    </>
  );
  return (
    <footer className="bg-white pt-16 pb-16">
      <div className="text-center w-10/12 mx-auto">
        <h1 className="text-black">Gadget Heaven</h1>
        <p className="text-[#656374]">
          Leading the way in cutting-edge technology and innovation.
        </p>
        <div class="divider"></div>
      </div>
      <div className="flex justify-evenly w-10/12 mx-auto text-center">
        <p>{services}</p>
        <p>{company}</p>
        <p>{legal}</p>
      </div>
    </footer>
  );
};

export default Footer;

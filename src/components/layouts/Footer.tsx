import React from "react";

const Footer = () => {
  const footerData = {
    logoSrc: "./assets/images/logo.svg",
    logoAlt: "Wren logo",
    address: {
      street: "123 Main Street",
      city: "New York, NY 10001",
    },
    categories: [
      "Action",
      "Business",
      "Adventure",
      "Canada",
      "America",
      "Curiosity",
      "Animal",
      "Dental",
      "Biology",
      "Design",
      "Breakfast",
      "Dessert",
    ],
    newsletter: {
      title: "Newsletter",
      description:
        "Sign up to be the first to receive the latest stories inspiring us, case studies, and industry news.",
    },
    socialLinks: [
      {
        icon: "logo-twitter",
        text: "Twitter",
      },
      {
        icon: "logo-linkedin",
        text: "LinkedIn",
      },
      {
        icon: "logo-instagram",
        text: "Instagram",
      },
    ],
  };

  return (
    <footer>
      <div className="container mt-[50px]">
        <div className="border border-prussian-blue bg-oxford-blue-2 pl-6 pr-6 rounded-[48px] text-wild-blue-yonder">
          <div className="grid lg:grid-cols-3 gap-[40px] p-[90px] text-sbase">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img
                  src={footerData.logoSrc}
                  width="119"
                  height="37"
                  loading="lazy"
                  alt={footerData.logoAlt}
                />
              </a>
              <p className="mt-[20px] mb-[20px]">
                When an unknown prnoto sans took a galley and scrambled it to
                make specimen book not only five When an unknown prnoto sans
                took a galley and scrambled it to five centurie.
              </p>
              <p className="text-xl">Address</p>
              <address className="footer-text address">
                {footerData.address.street} <br />
                {footerData.address.city}
              </address>
            </div>
            <div className="footer-list">
              <p className="text-columbia-blue  text-xl mb-[20px]">
                Categories
              </p>
              <ul className="columns-2">
                {footerData.categories.map((category, index) => (
                  <li key={index}>
                    <a href="#" className="mb-[12px] text-base hover-2">
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-list">
              <p className="text-columbia-blue  text-xl mb-[20px]">
                {footerData.newsletter.title}
              </p>
              <p className="text-base mt-[20px] mb-[20px]">
                {footerData.newsletter.description}
              </p>
              <div className="input-wrapper relative mb-[24px]">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="input-field"
                  autoComplete="off"
                />
                {/* <ion-icon name="person-outline" aria-hidden="true"></ion-icon> */}
              </div>
              <div className="input-wrapper  relative mb-[24px]">
                <input
                  type="email"
                  name="email_address"
                  placeholder="Email address"
                  required
                  className="input-field"
                  autoComplete="off"
                />
                {/* <ion-icon name="mail-outline" aria-hidden="true"></ion-icon> */}
              </div>
              <a href="#" className="btn btn-primary">
                <span className="span">Subscribe</span>
                {/* <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon> */}
              </a>
            </div>
          </div>
          <div className="border-t border-prussian-blue grid lg:grid-cols-2 pt-[50px] pb-[50px]">
            <p className="copyright flex justify-center gap-[5px]">
              &copy; Developed by{" "}
              <a href="#" className="text-carolina-blue italic">
                someone
              </a>
            </p>
            <ul className="flex flex-wrap gap-[15px] justify-center ">
              {footerData.socialLinks.map((socialLink, index) => (
                <li key={index}>
                  <a href="#" className="social-link hover-2">
                    {/* <ion-icon name={socialLink.icon}></ion-icon> */}
                    <span className="span">{socialLink.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

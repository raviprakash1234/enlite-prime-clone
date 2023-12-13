import ContactView from "./view";

const Contact = ({
  themeColor = "#e35981",
  isDrawerMargin = true,
  lightColor = "",
}) => {
  const userData = [
    {
      id: 1,
      phone: "+23132213",
      secondaryPhone: "+432434324",
      personalEmail: "johndoe@mail.com",
      companyEmail: "johndoe@company.com",
      address: "Ipsum Street no.77 Block A/5A, New York",
      website: "http://doeclans.net",
    },

    {
      id: 2,
      phone: "+2313265656213",
      secondaryPhone: "+4565656",
      personalEmail: "jimdoe@mail.com",
      companyEmail: "jimdoe@company.com",
      address: "Lorem Street no.76 Block B/8B, Brooklyn",
      website: "http://doeclans.net",
    },

    {
      id: 3,
      phone: "+23132213",
      secondaryPhone: "+432434324",
      personalEmail: "johndoe@mail.com",
      companyEmail: "johndoe@company.com",
      address: "Ipsum Street no.77 Block A/5A, New York",
      website: "http://doeclans.net",
    },

    {
      id: 4,
      phone: "+23132213",
      secondaryPhone: "+432434324",
      personalEmail: "johndoe@mail.com",
      companyEmail: "johndoe@company.com",
      address: "Ipsum Street no.77 Block A/5A, New York",
      website: "http://doeclans.net",
    },

    {
      id: 5,
      phone: "+23132213",
      secondaryPhone: "+432434324",
      personalEmail: "johndoe@mail.com",
      companyEmail: "johndoe@company.com",
      address: "Ipsum Street no.77 Block A/5A, New York",
      website: "http://doeclans.net",
    },

    {
      id: 6,
      phone: "+23132213",
      secondaryPhone: "+432434324",
      personalEmail: "johndoe@mail.com",
      companyEmail: "johndoe@company.com",
      address: "Ipsum Street no.77 Block A/5A, New York",
      website: "http://doeclans.net",
    },
  ];
  return (
    <>
      <ContactView
        userData={userData}
        themeColor={themeColor}
        isDrawerMargin={isDrawerMargin}
        lightColor={lightColor}
      />
    </>
  );
};

export default Contact;

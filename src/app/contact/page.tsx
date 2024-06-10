import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="We’re here to help! Whether you have questions, feedback, or need assistance, feel free to reach out to us. Our team is dedicated to providing you with the best support possible. Connect with us and let's start a conversation."
      />
      <Contact />
    </>
  );
};

export default ContactPage;

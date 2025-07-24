import ContactForm from "@/components/contact/contactform";
import SectionHeading from "@/components/ui/sectionheading";
export default function ContactSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <SectionHeading title="Contact Me" />
      <p className="mt-4 text-lg">
        If you have any questions or would like to get in touch, feel free to
        reach out via email or connect with me on social media.
      </p>
      <div className="mt-8 w-full max-w-md">
        <ContactForm />
      </div>
    </div>
  );
}

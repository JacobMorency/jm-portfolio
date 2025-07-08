import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4">
      <Label htmlFor="name">Your Name</Label>
      <Input id="name" type="text" placeholder="Your Name" required />
      <Label htmlFor="email">Your Email</Label>
      <Input id="email" type="email" placeholder="Your Email" required />
      <Label htmlFor="message">Your Message</Label>
      <Textarea
        id="message"
        placeholder="Your Message"
        className="h-32"
        required
      />
      <Button type="submit">Send Message</Button>
    </form>
  );
}

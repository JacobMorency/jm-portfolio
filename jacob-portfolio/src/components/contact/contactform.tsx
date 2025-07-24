import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <div>
      <form className="flex flex-col gap-4">
        <div>
          <Label htmlFor="name" className="font-semibold my-2">
            Your Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Your Name"
            className="rounded py-6"
            required
          />
        </div>
        <div>
          <Label htmlFor="email" className="font-semibold my-2">
            Your Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Your Email"
            className="rounded py-6"
            required
          />
        </div>
        <div>
          <Label htmlFor="message" className="font-semibold my-2">
            Your Message
          </Label>
          <Textarea
            id="message"
            placeholder="Your Message"
            className="h-32 rounded"
            required
          />
        </div>
        <Button type="submit" className="py-6 rounded">
          Send Message
        </Button>
      </form>
    </div>
  );
}

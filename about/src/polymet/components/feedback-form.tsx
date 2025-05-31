import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SendIcon } from "lucide-react";

export default function FeedbackForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!email || !message) {
      setError("Please fill out all required fields.");
      return;
    }

    // In a real application, you would send the form data to a server here
    console.log("Form submitted:", { email, message });

    // Show success message
    setSubmitted(true);
    setError(null);

    // Reset form
    setEmail("");
    setMessage("");

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>We Value Your Feedback</CardTitle>
        <CardDescription>
          Your message will go to our web team. Thank you for helping us to
          serve you better! If you want to contact a specific department and get
          a response, please go to the{" "}
          <a
            href="/about-us"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            About Us page
          </a>
          .
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div>
            <Textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full min-h-[120px]"
            />
          </div>
          {/* Hidden field for spam prevention */}
          <input type="text" name="middle" className="hidden" />

          {error && <div className="text-red-500 text-sm">{error}</div>}

          {submitted && (
            <div className="text-green-600 dark:text-green-400 text-sm">
              Thank you for your feedback! Your message has been sent.
            </div>
          )}

          <Button type="submit" className="w-full sm:w-auto">
            <SendIcon className="mr-2 h-4 w-4" />
            Send message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

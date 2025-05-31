import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquareIcon, XIcon } from "lucide-react";

export default function FeedbackForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot (should be empty)
    if (honeypot) {
      // This is likely a bot, silently fail
      console.log("Bot submission detected");
      setIsOpen(false);
      return;
    }

    // Validate form
    if (!email || !message) {
      setError("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // In a real implementation, you would send the form data to a server
    console.log("Form submitted:", { email, message });

    // Show success message
    setSubmitted(true);
    setError("");

    // Reset form after 3 seconds and close
    setTimeout(() => {
      setEmail("");
      setMessage("");
      setSubmitted(false);
      setIsOpen(false);
    }, 3000);
  };

  return (
    <div className="relative">
      {/* Feedback button */}
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        className="border-blue-500 text-blue-500 hover:bg-blue-50"
      >
        How can we make this page better for you?
      </Button>

      {/* Feedback form modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2"
              onClick={() => setIsOpen(false)}
            >
              <XIcon className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-2 mb-4">
              <MessageSquareIcon className="h-5 w-5 text-blue-500" />

              <h2 className="text-xl font-bold">We Value Your Feedback</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Your message will go to our web team. Thank you for helping us to
              serve you better!
              <br />
              If you want to contact a specific department and get a response,
              please go to the{" "}
              <a href="/about-us" className="text-blue-500 hover:underline">
                About Us page
              </a>
              .
            </p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
                Thank you for your feedback! Your message has been sent.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-md mb-4">
                    {error}
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  {/* Honeypot field - hidden from users but bots will fill it */}
                  <div className="hidden">
                    <label htmlFor="honeypot">Leave this field blank</label>
                    <Input
                      id="honeypot"
                      type="text"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send message
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

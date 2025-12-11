import React, { useRef, useState } from "react";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const messageRef = useRef<HTMLTextAreaElement>(null); // using ref for message

  console.log("Hello from FeedbackForm");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) {
      alert("Name required");
      return;
    }
    if (!email.includes("@")) {
      alert("Valid email required");
      return;
    }
    if (messageRef.current !== null && !messageRef.current.value) {
      messageRef.current.focus();
      return;
    }

    console.log("Form submitted:", {
      name,
      email,
      message: messageRef.current && messageRef.current.value,
    });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        className="border rounded-2xl p-2 my-3"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        className="border rounded-2xl p-2 my-3"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <textarea
        className="border rounded-2xl p-2 my-3"
        ref={messageRef}
        placeholder="Your message"
      />
      <button className="bg-purple-500 text-white p-1 rounded" type="submit">
        Send Feedback
      </button>
    </form>
  );
}

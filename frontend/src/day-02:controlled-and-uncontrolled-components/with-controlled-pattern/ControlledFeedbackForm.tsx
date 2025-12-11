import React, { ChangeEvent, FormEvent, useRef, useState } from "react";

type FormFields = {
  name: string;
  email: string;
  message: string;
};

export default function ControlledFeedbackForm() {
  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    message: "",
  });

  console.log("Hello from ControlledFeedbackForm");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name) {
      nameRef.current?.focus();
      return;
    }
    if (!form.email.includes("@")) {
      emailRef.current?.focus();
      return;
    }
    if (!form.message) {
      messageRef.current?.focus();
      return;
    }
    console.log("Form submitted:", form);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        className="border rounded-2xl p-2 my-3"
        name="name"
        type="text"
        ref={nameRef}
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        className="border rounded-2xl p-2 my-3"
        name="email"
        type="email"
        ref={emailRef}
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        className="border rounded-2xl p-2 my-3"
        name="message"
        ref={messageRef}
        value={form.message}
        onChange={handleChange}
        placeholder="Your message"
      />
      <button className="bg-purple-500 text-white p-1 rounded" type="submit">
        Send Feedback
      </button>
    </form>
  );
}

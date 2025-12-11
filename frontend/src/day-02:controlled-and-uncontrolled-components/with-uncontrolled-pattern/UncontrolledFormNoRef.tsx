import React from "react";

export default function UncontrolledFormNoRef() {
  console.log("Hello from UncontrolledFormNoRef");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Use FormData API to grab values directly
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {
      username: string;
      email: string;
      [key: string]: FormDataEntryValue;
    };

    console.log("Form Data:", data);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        className="border rounded-2xl p-2 my-3"
        name="username"
        placeholder="Username"
      />
      <input
        className="border rounded-2xl p-2 my-3"
        name="email"
        type="email"
        placeholder="Email"
      />
      <button className="bg-purple-500 text-white p-1 rounded" type="submit">
        Submit
      </button>
    </form>
  );
}

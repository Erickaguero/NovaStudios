"use client"
import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "340346ff-d051-406e-a9e9-5339b02be0df";

export type FormStatus = "idle" | "sending" | "success" | "error";

export function useWeb3Form() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("from_name", "Sitio web Nova Studios");

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return { status, handleSubmit };
}

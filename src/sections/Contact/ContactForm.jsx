import { useState } from "react";
import { Send } from "lucide-react";
import { FormField } from "../../components/ui/FormField";
import { Input } from "../../components/ui/Input";
import { Textarea } from "../../components/ui/Textarea";
import { Button } from "../../components/ui/Button";

const initialValues = { name: "", email: "", subject: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Please enter a message.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    // NOTE: no backend wired up yet — replace this with a real request
    // (e.g. Formspree, EmailJS, or a custom API endpoint) before going live.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    setValues(initialValues);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Name" htmlFor="name" required error={errors.name}>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            error={Boolean(errors.name)}
          />
        </FormField>

        <FormField label="Email" htmlFor="email" required error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
          />
        </FormField>
      </div>

      <FormField label="Subject" htmlFor="subject">
        <Input id="subject" name="subject" value={values.subject} onChange={handleChange} />
      </FormField>

      <FormField label="Message" htmlFor="message" required error={errors.message}>
        <Textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          error={Boolean(errors.message)}
        />
      </FormField>

      <Button type="submit" icon={Send} disabled={status === "submitting"} className="self-start">
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="text-sm font-medium text-accent">
            Thanks for reaching out! I'll get back to you soon.
          </p>
        )}
      </div>
    </form>
  );
}

import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { personalInfo } from "../../data/personalInfo";
import { FormField } from "../../components/ui/FormField";
import { Input } from "../../components/ui/Input";
import { Textarea } from "../../components/ui/Textarea";
import { Button } from "../../components/ui/Button";

const initialValues = { name: "", email: "", subject: "", message: "" };

const LIMITS = { name: 100, subject: 150, messageMin: 10, message: 5000 };

// Submissions faster than this after the form appears are almost certainly bots.
const MIN_FILL_TIME_MS = 3000;

function validate(values) {
  const errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (!name) errors.name = "Please enter your name.";
  else if (name.length > LIMITS.name) errors.name = `Please keep your name under ${LIMITS.name} characters.`;

  if (!email) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email address.";

  if (!subject) errors.subject = "Please enter a subject.";
  else if (subject.length > LIMITS.subject) errors.subject = `Please keep the subject under ${LIMITS.subject} characters.`;

  if (!message) errors.message = "Please enter a message.";
  else if (message.length < LIMITS.messageMin) errors.message = `Please write at least ${LIMITS.messageMin} characters.`;
  else if (message.length > LIMITS.message) errors.message = `Please keep your message under ${LIMITS.message} characters.`;

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [renderedAt] = useState(() => Date.now());
  const honeypotRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "submitting") return;

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // Bots fill the hidden field or submit instantly: show success but send nothing.
    if (honeypotRef.current?.value || Date.now() - renderedAt < MIN_FILL_TIME_MS) {
      setStatus("success");
      setValues(initialValues);
      return;
    }

    setStatus("submitting");
    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    };

    try {
      const response = await fetch(personalInfo.contactFormEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          _subject: `Portfolio contact: ${payload.subject}`,
          _replyto: payload.email,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setValues(initialValues);
        return;
      }

      const data = await response.json().catch(() => null);
      setErrorMessage(data?.errors?.map((error) => error.message).join(" ") ?? "");
      setStatus("error");
    } catch {
      setErrorMessage("");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Name" htmlFor="name" required error={errors.name}>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            maxLength={LIMITS.name}
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

      <FormField label="Subject" htmlFor="subject" required error={errors.subject}>
        <Input
          id="subject"
          name="subject"
          maxLength={LIMITS.subject}
          value={values.subject}
          onChange={handleChange}
          error={Boolean(errors.subject)}
        />
      </FormField>

      <FormField label="Message" htmlFor="message" required error={errors.message}>
        <Textarea
          id="message"
          name="message"
          maxLength={LIMITS.message}
          value={values.message}
          onChange={handleChange}
          error={Boolean(errors.message)}
        />
      </FormField>

      {/* Honeypot: hidden from people, but naive bots fill it in. */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="_gotcha">Leave this field empty</label>
        <input ref={honeypotRef} id="_gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Button type="submit" icon={Send} disabled={status === "submitting"} className="self-start">
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="text-sm font-medium text-accent">
            Thanks for reaching out! I'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-destructive">
            {errorMessage || "Sorry, your message couldn't be sent."} Please try again, or reach me on{" "}
            <a href={personalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="underline">
              WhatsApp
            </a>{" "}
            or at{" "}
            <a href={`mailto:${personalInfo.email}`} className="underline">
              {personalInfo.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

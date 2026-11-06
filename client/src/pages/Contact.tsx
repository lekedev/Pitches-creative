import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { serviceOptions } from "../data/services";
import { site } from "../data/site";
import { submitEnquiry, type Enquiry } from "../service/contactService";
import { usePageMeta } from "../hooks/usePageMeta";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Reveal } from "../components/ui/Reveal";
import { ButtonLink } from "../components/ui/Button";

type Field = Exclude<keyof Enquiry, "website">;
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELD_ORDER: Field[] = ["name", "email", "company", "service", "budget", "message"];

function validate(values: Enquiry): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name.";
  if (!values.email.trim()) errors.email = "Please add an email address so we can reply.";
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "That email address doesn't look quite right.";
  if (!values.service) errors.service = "Choose the closest option — “Not sure yet” is fine.";
  if (values.message.trim().length < 20) errors.message = "A sentence or two about your project helps us reply properly (20 characters minimum).";
  return errors;
}

const nextSteps = [
  { title: "We read every enquiry", description: "Your message comes straight to our team — no automated sales funnel." },
  { title: "We reply by email", description: "Usually with a few questions, or a time to talk it through." },
  { title: "We recommend a way forward", description: "A clear proposal, scope and next steps — only if we're the right fit." },
];

function FormField({
  id,
  label,
  optional,
  error,
  hint,
  children,
}: {
  id: Field;
  label: string;
  optional?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid content-start gap-2">
      <label htmlFor={id} className="flex items-baseline justify-between gap-4 text-[15px] font-medium">
        {label}
        {optional && <span className="text-sm font-normal text-stone">Optional</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="text-sm text-stone">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-sm text-ember-deep">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  usePageMeta({
    title: "Contact",
    description: "Tell The Stable Company about your project — websites, software, branding, media or growth.",
  });

  const [params] = useSearchParams();
  const preselected = serviceOptions.some((o) => o.value === params.get("service")) ? params.get("service")! : "";

  const [values, setValues] = useState<Enquiry>({
    name: "",
    email: "",
    company: "",
    service: preselected,
    budget: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const update = (field: keyof Enquiry) => (event: { target: { value: string } }) => {
    const next = { ...values, [field]: event.target.value };
    setValues(next);
    // After a first submit attempt, re-check as the visitor corrects things.
    if (attempted) setErrors(validate(next));
  };

  const describedBy = (field: Field, hasHint = false) =>
    errors[field] ? `${field}-error` : hasHint ? `${field}-hint` : undefined;

  const inputClass = (field: Field) =>
    `w-full rounded-sm border bg-transparent px-4 py-3.5 text-base text-ink placeholder:text-stone/70 transition-colors focus:outline-none ${
      errors[field] ? "border-ember-deep" : "border-ink/20 hover:border-ink/40 focus:border-ink"
    }`;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setAttempted(true);
    const found = validate(values);
    setErrors(found);

    const firstInvalid = FIELD_ORDER.find((field) => found[field]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      await submitEnquiry({
        ...values,
        name: values.name.trim(),
        email: values.email.trim(),
        company: values.company.trim(),
        budget: values.budget.trim(),
        message: values.message.trim(),
      });
      setStatus("success");
      requestAnimationFrame(() => successRef.current?.focus());
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const { email, phone, location } = site.contact;
  const hasContact = Boolean(email || phone || location);

  return (
    <section aria-labelledby="contact-heading" className="container-page pb-24 pt-36 sm:pt-44 md:pb-32 lg:pt-52">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        {/* Introduction */}
        <div className="lg:col-span-5">
          <Reveal immediate>
            <Eyebrow>Contact</Eyebrow>
          </Reveal>
          <Reveal immediate delay={0.08}>
            <h1 id="contact-heading" className="mt-8 max-w-[11ch] text-headline">
              Let's build something <em className="font-serif font-normal italic tracking-[-0.02em] text-ember">together.</em>
            </h1>
          </Reveal>
          <Reveal immediate delay={0.16}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-stone">
              Whether it's a website, a product, a brand or a system to run your business better — tell us what you have
              in mind. The more context you share, the more useful our reply will be.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-14">
            <h2 className="text-eyebrow font-medium uppercase text-stone">What happens next</h2>
            <ol className="mt-5 border-t border-line">
              {nextSteps.map((step, index) => (
                <li key={step.title} className="grid grid-cols-[2.5rem_1fr] border-b border-line py-5">
                  <span className="text-eyebrow tabular-nums text-ember-deep">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-medium">{step.title}</p>
                    <p className="mt-1 text-stone">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          {hasContact && (
            <Reveal className="mt-12">
              <h2 className="text-eyebrow font-medium uppercase text-stone">Or reach us directly</h2>
              <ul className="mt-4 space-y-2 text-lg">
                {email && (
                  <li>
                    <a href={`mailto:${email}`} className="underline decoration-line underline-offset-4 hover:decoration-ember">
                      {email}
                    </a>
                  </li>
                )}
                {phone && (
                  <li>
                    <a href={`tel:${phone.replace(/\s+/g, "")}`} className="underline decoration-line underline-offset-4 hover:decoration-ember">
                      {phone}
                    </a>
                  </li>
                )}
                {location && <li className="text-stone">{location}</li>}
              </ul>
            </Reveal>
          )}
        </div>

        {/* Form */}
        <div className="lg:col-span-6 lg:col-start-7">
          {status === "success" ? (
            <motion.div
              ref={successRef}
              tabIndex={-1}
              role="status"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-sm bg-sand p-8 focus:outline-none sm:p-12"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-ivory">
                <Check aria-hidden="true" strokeWidth={2} className="h-5 w-5" />
              </span>
              <h2 className="mt-8 text-title">Thank you, {values.name.split(" ")[0]}.</h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-stone">
                Your enquiry has been received. We'll read it carefully and reply to <strong className="font-medium text-ink">{values.email}</strong>.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink to="/work" variant="secondary" arrow="right">
                  Explore our work
                </ButtonLink>
              </div>
            </motion.div>
          ) : (
            <Reveal immediate delay={0.2}>
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid gap-7" aria-describedby="form-note">
                <p id="form-note" className="text-sm text-stone">
                  All fields are required unless marked optional.
                </p>

                <div className="grid gap-7 sm:grid-cols-2">
                  <FormField id="name" label="Name" error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={values.name}
                      onChange={update("name")}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={describedBy("name")}
                      maxLength={120}
                      className={inputClass("name")}
                    />
                  </FormField>
                  <FormField id="email" label="Email" error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={update("email")}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={describedBy("email")}
                      maxLength={200}
                      className={inputClass("email")}
                    />
                  </FormField>
                </div>

                <FormField id="company" label="Company or brand" optional>
                  <input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    value={values.company}
                    onChange={update("company")}
                    maxLength={160}
                    className={inputClass("company")}
                  />
                </FormField>

                <div className="grid gap-7 sm:grid-cols-2">
                  <FormField id="service" label="Service required" error={errors.service}>
                    <select
                      id="service"
                      name="service"
                      value={values.service}
                      onChange={update("service")}
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={describedBy("service")}
                      className={`${inputClass("service")} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23171717' stroke-width='1.75'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")] bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-10`}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </FormField>
                  <FormField id="budget" label="Project budget" optional hint="A rough range is fine, in any currency.">
                    <input
                      id="budget"
                      name="budget"
                      value={values.budget}
                      onChange={update("budget")}
                      aria-describedby={describedBy("budget", true)}
                      maxLength={80}
                      className={inputClass("budget")}
                    />
                  </FormField>
                </div>

                <FormField id="message" label="Tell us about your project" error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={values.message}
                    onChange={update("message")}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={describedBy("message")}
                    maxLength={5000}
                    placeholder="What are you building, who is it for, and what would success look like?"
                    className={`${inputClass("message")} resize-y`}
                  />
                </FormField>

                {/* Honeypot — hidden from people and assistive tech; bots tend to fill it. */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={update("website")} />
                </div>

                {status === "error" && (
                  <p role="alert" className="rounded-sm border border-ember-deep/30 bg-ember/10 px-4 py-3 text-ember-deep">
                    Something went wrong and your enquiry wasn't sent. Please check your connection and try again.
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-6 pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex h-13 items-center justify-center rounded-full bg-ink px-7 text-[15px] font-medium text-ivory transition-colors duration-300 hover:bg-cocoa disabled:cursor-wait disabled:opacity-60"
                  >
                    {status === "submitting" ? "Sending…" : "Send enquiry"}
                  </button>
                  <p className="text-sm text-stone">We'll only use your details to reply to this enquiry.</p>
                </div>
              </form>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { SiGmail } from "react-icons/si";

import { Link } from "react-router-dom";

import { EarthCanvas } from "@/components/canvas";
import SocialLinks from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { budgets, projectTypes, siteConfig } from "@/constants";
import { styles } from "@/styles";
import { slideIn, textVariant } from "@/utils/motion";

const initialForm = { name: "", email: "", projectType: "", budget: "", message: "" };

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const FieldError = ({ id, children }) =>
  children ? (
    <p id={id} className="text-sm text-red-400">
      {children}
    </p>
  ) : null;

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const setField = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleChange = (e) => setField(e.target.name, e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please tell me your name.";
    if (!validateEmail(form.email)) nextErrors.email = "Please enter a valid email address.";
    if (!form.message.trim()) nextErrors.message = "A short description of your project helps me reply faster.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("sending");

    const details = [
      form.projectType && `Project type: ${form.projectType}`,
      form.budget && `Budget: ${form.budget}`,
    ]
      .filter(Boolean)
      .join("\n");

    emailjs
      .send(
        "service_r2i0by4",
        "template_mf5x3bh",
        {
          from_name: form.name,
          to_name: "Azeez Ademola Bello",
          from_email: form.email,
          to_email: siteConfig.email,
          message: details ? `${details}\n\n${form.message}` : form.message,
        },
        "p-gXzzyvEhPaJ0XA-"
      )
      .then(() => {
        setStatus("sent");
        setForm(initialForm);
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
      });
  };

  return (
    <section className={`${styles.paddingX} mx-auto max-w-7xl pt-28 sm:pt-36 pb-10`}>
      <div className="flex flex-col-reverse gap-10 overflow-hidden xl:flex-row">
        <motion.div variants={slideIn("left", "tween", 0.1, 0.8)} initial="hidden" animate="show" className="xl:flex-[0.9]">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Get in touch</p>
            <h1 className={styles.sectionHeadText}>Let&apos;s talk about your project</h1>
            <p className="mt-4 max-w-xl text-[17px] leading-[30px] text-muted-foreground">
              Share a few details and I&apos;ll get back to you with ideas, a rough timeline and next steps.
              No commitment required.
            </p>
          </motion.div>

          <Card className="mt-10 bg-black-100 p-6 sm:p-8">
            {status === "sent" ? (
              <div className="flex flex-col items-start gap-4 py-6" role="status">
                <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                <h2 className="text-2xl font-bold text-white">Thanks, your message is on its way!</h2>
                <p className="text-muted-foreground">I&apos;ll get back to you as soon as possible.</p>
                <Button variant="outline" onClick={() => setStatus("idle")}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Your name</Label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    <FieldError id="name-error">{errors.name}</FieldError>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    <FieldError id="email-error">{errors.email}</FieldError>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="projectType">What do you need?</Label>
                    <Select value={form.projectType} onValueChange={(value) => setField("projectType", value)}>
                      <SelectTrigger id="projectType">
                        <SelectValue placeholder="Choose a project type" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="budget">
                      Budget <span className="font-normal text-muted-foreground">(optional)</span>
                    </Label>
                    <Select value={form.budget} onValueChange={(value) => setField("budget", value)}>
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="Select a range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgets.map((budget) => (
                          <SelectItem key={budget} value={budget}>
                            {budget}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Tell me about your project</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What are you building, who is it for, and when would you like to launch?"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  <FieldError id="message-error">{errors.message}</FieldError>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-fit">
                    {status === "sending" ? <Loader2 className="animate-spin" /> : <Send />}
                    {status === "sending" ? "Sending..." : "Send message"}
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    By sending, you agree to my{" "}
                    <Link to="/privacy" className="underline underline-offset-4 hover:text-white">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                  {status === "error" && (
                    <p className="text-sm text-red-400" role="alert">
                      Something went wrong. Please try again or email me directly.
                    </p>
                  )}
                </div>
              </form>
            )}
          </Card>

          <p className="mt-6 text-sm text-muted-foreground">
            Prefer email?{" "}
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-1.5 font-medium text-white transition-colors hover:text-ember">
              <SiGmail className="h-4 w-4 text-ember" aria-hidden="true" /> {siteConfig.email}
            </a>
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>See more of my work on</span>
            <SocialLinks showLabels />
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.1, 0.8)}
          initial="hidden"
          animate="show"
          className="h-[320px] md:h-[500px] xl:h-auto xl:flex-1"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

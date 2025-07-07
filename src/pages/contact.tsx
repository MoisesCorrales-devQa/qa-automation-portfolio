import { useState } from "react";
import Head from "next/head";

// Utilidad simple para validar email
function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        website: "", // honeypot
    });
    const [errors, setErrors] = useState<{ [k: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState<null | "success" | "error">(null);

    // Validación frontend
    function validate() {
        const errs: { [k: string]: string } = {};
        if (form.name.trim().length < 3) errs.name = "Please enter at least 3 characters.";
        if (!isValidEmail(form.email)) errs.email = "Please enter a valid email address.";
        if (form.message.trim().length < 3) errs.message = "Please enter at least 3 characters.";
        // honeypot validation is not shown to user
        return errs;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setResult(null);
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;

        setIsSubmitting(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setResult("success");
                setForm({ name: "", email: "", message: "", website: "" });
            } else {
                setResult("error");
            }
        } catch {
            setResult("error");
        }
        setIsSubmitting(false);
    }

    return (
        <>
            <Head>
                <title>Contact | Moisés Corrales</title>
            </Head>
            <section className="flex flex-col items-center justify-center min-h-screen py-20 px-4">
                <div className="max-w-lg w-full bg-black/30 rounded-2xl shadow-lg p-8 md:p-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-blue-300 mb-4">Contact Me</h1>
                    <p className="text-blue-100 mb-6">
                        Have a question or want to work together? Fill out the form and I&apos;ll get back to you soon!
                    </p>
                    <form className="space-y-5" onSubmit={handleSubmit} autoComplete="off">
                        {/* Honeypot (oculto) */}
                        <div style={{ display: "none" }}>
                            <label>
                                Website
                                <input
                                    name="website"
                                    value={form.website}
                                    onChange={e => setForm(f => ({ ...f, website: e.target.value }))}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </label>
                        </div>
                        <div>
                            <label className="block text-blue-200 font-semibold mb-1">
                                Name<span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                className={`w-full px-4 py-2 rounded-lg bg-blue-900/60 text-white border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
                                    errors.name ? "border-red-400" : ""
                                }`}
                                value={form.name}
                                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                                disabled={isSubmitting}
                                minLength={3}
                                required
                            />
                            {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <label className="block text-blue-200 font-semibold mb-1">
                                Email<span className="text-red-400">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                className={`w-full px-4 py-2 rounded-lg bg-blue-900/60 text-white border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
                                    errors.email ? "border-red-400" : ""
                                }`}
                                value={form.email}
                                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                disabled={isSubmitting}
                                required
                            />
                            {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <label className="block text-blue-200 font-semibold mb-1">
                                Message<span className="text-red-400">*</span>
                            </label>
                            <textarea
                                name="message"
                                className={`w-full px-4 py-2 rounded-lg bg-blue-900/60 text-white border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition min-h-[120px] resize-vertical ${
                                    errors.message ? "border-red-400" : ""
                                }`}
                                value={form.message}
                                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                                disabled={isSubmitting}
                                minLength={3}
                                required
                            />
                            {errors.message && <p className="text-red-300 text-sm mt-1">{errors.message}</p>}
                        </div>
                        <div className="text-blue-200 text-xs mb-2">
                            Your message will be sent securely and only used to reply to you.
                        </div>
                        <div className="flex justify-center mt-6">
                            <button
                                type="submit"
                                className="contact-button"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "📧 Send Message"}
                            </button>
                        </div>
                        {result === "success" && (
                            <div className="text-green-300 text-center mt-2 font-semibold">
                                Thank you for your message!
                            </div>
                        )}
                        {result === "error" && (
                            <div className="text-red-300 text-center mt-2 font-semibold">
                                Oops! Something went wrong. Please try again later.
                            </div>
                        )}
                    </form>
                </div>
            </section>
        </>
    );
}
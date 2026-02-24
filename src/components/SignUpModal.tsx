import { useState, useEffect } from "react";

interface SignUpFormData {
  fullName: string;
  email: string;
  phone: string;
  membership: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  membership?: string;
}

interface SignUpModalProps {
  isOpen: boolean;
  preselectedMembership?: string;
  onClose: () => void;
}

const MEMBERSHIP_OPTIONS = ["Foundation Membership", "Economy Membership"];

const EMPTY_FORM: SignUpFormData = {
  fullName: "",
  email: "",
  phone: "",
  membership: "",
};

function validate(data: SignUpFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^\+?[\d\s\-]{7,15}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!data.membership) {
    errors.membership = "Please select a membership type.";
  }

  return errors;
}

export default function SignUpModal({ isOpen, preselectedMembership, onClose }: SignUpModalProps) {
  const [form, setForm] = useState<SignUpFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Pre-fill membership when opened from a specific card
  useEffect(() => {
    if (isOpen) {
      setForm({ ...EMPTY_FORM, membership: preselectedMembership ?? "" });
      setErrors({});
      setSubmitted(false);
    }
  }, [isOpen, preselectedMembership]);

  // Prevent background scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const errorList = Object.values(errors).filter(Boolean);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear individual error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
        style={{ background: "#fff" }}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4" style={{ background: "#44403c" }}>
          <h2 className="text-base font-bold tracking-widest">
            <span style={{ color: "#fbbf24" }}>SIGN UP</span>
            <span className="text-white font-normal"> FOR MEMBERSHIP</span>
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-stone-400 hover:text-white transition-colors text-xl leading-none focus:outline-none"
          >
            ✕
          </button>
        </div>

        <div className="px-6 py-5">
          {submitted ? (
            /* Success state */
            <div className="text-center py-6">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ background: "#d97706" }}
              >
                ✓
              </div>
              <h3 className="text-base font-bold mb-1" style={{ color: "#1c1917" }}>
                You're all set, {form.fullName.split(" ")[0]}!
              </h3>
              <p className="text-sm" style={{ color: "#78716c" }}>
                We'll be in touch shortly about your <strong>{form.membership}</strong>.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ background: "#d97706" }}
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Error summary */}
              {errorList.length > 0 && (
                <div
                  className="mb-4 rounded-lg px-4 py-3 text-sm"
                  style={{ background: "#fef2f2", border: "1px solid #fca5a5", color: "#b91c1c" }}
                  role="alert"
                  aria-live="polite"
                >
                  <p className="font-semibold mb-1">Please fix the following:</p>
                  <ul className="list-disc list-inside space-y-0.5">
                    {errorList.map((err, i) => (
                      <li key={i}>{err}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold mb-1" style={{ color: "#57534e" }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Michael Osei"
                    className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none"
                    style={{
                      border: `1px solid ${errors.fullName ? "#f87171" : "#e7e5e4"}`,
                      background: errors.fullName ? "#fff7f7" : "#fafaf9",
                      color: "#1c1917",
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold mb-1" style={{ color: "#57534e" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g. michael@email.com"
                    className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none"
                    style={{
                      border: `1px solid ${errors.email ? "#f87171" : "#e7e5e4"}`,
                      background: errors.email ? "#fff7f7" : "#fafaf9",
                      color: "#1c1917",
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold mb-1" style={{ color: "#57534e" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="e.g. +254 712 345 678"
                    className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none"
                    style={{
                      border: `1px solid ${errors.phone ? "#f87171" : "#e7e5e4"}`,
                      background: errors.phone ? "#fff7f7" : "#fafaf9",
                      color: "#1c1917",
                    }}
                  />
                </div>

                {/* Membership select */}
                <div>
                  <label className="block text-xs font-semibold mb-1" style={{ color: "#57534e" }}>
                    Membership Type
                  </label>
                  <select
                    name="membership"
                    value={form.membership}
                    onChange={handleChange}
                    className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none appearance-none"
                    style={{
                      border: `1px solid ${errors.membership ? "#f87171" : "#e7e5e4"}`,
                      background: errors.membership ? "#fff7f7" : "#fafaf9",
                      color: form.membership ? "#1c1917" : "#a8a29e",
                    }}
                  >
                    <option value="" disabled>Select a membership</option>
                    {MEMBERSHIP_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "#d97706" }}
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
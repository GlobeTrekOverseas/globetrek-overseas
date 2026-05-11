import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import qrcode from "../assets/qrcode.jpeg";
import { sendIELTSEnrollmentMail } from "@/lib/bot";
type Props = {
  open: boolean;
  onClose: () => void;
};

export default function IELTSEnrollModal({ open, onClose }: Props) {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    dob: "",
    gender: "",
    nationality: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    utr: "",
    amount: "",
    screenshot: null as File | null,
  });

  if (!open) return null;

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e: any) => {
    setForm({ ...form, screenshot: e.target.files[0] });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Enrollment Data:", form);

    alert("Enrollment submitted successfully!");

    onClose();
  };

  const handlePersonalSubmit = async () => {
  try {
    const payload = {
      name: form.name,
      dob: form.dob,
      gender: form.gender,
      nationality: form.nationality,
      email: form.email,
      phone: form.phone,
    };

    await sendIELTSEnrollmentMail(payload);

    setStep(2);
  } catch (error) {
    console.error(error);

    alert("Failed to send enrollment details");
  }
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur overflow-y-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8 relative"
      >
        {/* Close Button */}

        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-muted-foreground hover:text-foreground"
        >
          <X />
        </button>

        {/* Title */}

        <h2 className="text-3xl font-serif font-bold mb-6 gradient-text">
          IELTS Enrollment
        </h2>

        {/* Progress */}

        <div className="flex gap-3 mb-8">
          <Step active={step >= 1} title="Personal" />
          <Step active={step >= 2} title="Address" />
          <Step active={step >= 3} title="Payment" />
        </div>

        {/* STEP 1 */}

        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Full Name"
              className="form-input"
              onChange={handleChange}
            />

            <input
              name="dob"
              type="date"
              className="form-input"
              onChange={handleChange}
            />

            <select
              name="gender"
              className="form-input"
              onChange={handleChange}
            >
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input
              name="nationality"
              placeholder="Nationality"
              className="form-input"
              onChange={handleChange}
            />

            <input
              name="email"
              placeholder="Email Address"
              className="form-input col-span-2"
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Mobile Number (WhatsApp)"
              className="form-input col-span-2"
              onChange={handleChange}
            />

            <button
              onClick={handlePersonalSubmit}
              className="btn-accent col-span-2 mt-3"
            >
              Next
            </button>
          </div>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="address"
              placeholder="Permanent Address"
              className="form-input col-span-2"
              onChange={handleChange}
            />

            <input
              name="city"
              placeholder="City"
              className="form-input"
              onChange={handleChange}
            />

            <input
              name="state"
              placeholder="State"
              className="form-input"
              onChange={handleChange}
            />

            <input
              name="pincode"
              placeholder="Pincode"
              className="form-input"
              onChange={handleChange}
            />

            <input
              name="country"
              placeholder="Country"
              className="form-input"
              onChange={handleChange}
            />

            <div className="flex gap-3 col-span-2 mt-3">
              <button onClick={() => setStep(1)} className="btn-primary w-full">
                Back
              </button>

              <button onClick={() => setStep(3)} className="btn-accent w-full">
                Proceed to Payment
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Scan the QR code below to complete payment
              </p>
              <img
                src={qrcode}
                alt="UPI QR"
                className="w-44 mx-auto mb-6 border rounded-lg"
              />
            </div>

            <input
              type="file"
              required
              onChange={handleFile}
              className="form-input"
            />

            <input
              name="utr"
              placeholder="Enter UTR / Transaction ID"
              onChange={handleChange}
              className="form-input"
              required
            />

            <input
              name="amount"
              placeholder="Amount Paid"
              onChange={handleChange}
              className="form-input"
              required
            />

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn-primary w-full"
              >
                Back
              </button>

              <button type="submit" className="btn-accent w-full">
                Submit Enrollment
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}

/* Step UI */

function Step({ active, title }: any) {
  return (
    <div
      className={`px-4 py-2 rounded-full text-sm font-medium ${
        active ? "bg-accent text-white" : "bg-muted text-muted-foreground"
      }`}
    >
      {title}
    </div>
  );
}

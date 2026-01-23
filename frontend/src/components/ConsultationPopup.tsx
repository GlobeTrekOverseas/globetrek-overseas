import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GraduationCap, Sparkles, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { API } from "@/lib/bot";

interface ConsultationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const studyDestinations = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "New Zealand",
  "Ireland",
  "France",
  "Netherlands",
  "Other",
];

const timelines = [
  "Immediately",
  "Within 3 months",
  "Within 6 months",
  "Within 1 year",
  "Just exploring",
];

const counsellingModes = ["In-Person", "Virtual"];

const studyLevels = [
  "Undergraduate (Bachelor's)",
  "Postgraduate (Master's)",
  "Doctorate (PhD)",
  "University Prepration",
  "English Language Course",
];

const courses = ["IELTS", "PTE", "GMAT", "GRE"];

const fundingOptions = ["Education Loan", "Others"];

const ConsultationPopup = ({ isOpen, onClose }: ConsultationPopupProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    destination: "",
    timeline: "",
    counsellingMode: "",
    studyLevel: "",
    course: "",
    funding: "",
    agreeTerms: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreeTerms) {
      toast({
        title: "Please accept terms",
        description: "You must agree to the terms and conditions to proceed.",
        variant: "destructive",
      });
      return;
    }

    try {
      const res = await fetch(API.consultationMail, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send consultation request");
      }

      toast({
        title: "Request Submitted!",
        description: "Our counselor will contact you within 24 hours.",
      });

      onClose();
      setFormData({
        fullName: "",
        email: "",
        contact: "",
        destination: "",
        timeline: "",
        counsellingMode: "",
        studyLevel: "",
        course: "",
        funding: "",
        agreeTerms: false,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background via-background to-primary/5 border-primary/20">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-2xl" />

        <DialogHeader className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="mx-auto mb-2 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
          >
            <GraduationCap className="w-8 h-8 text-white" />
          </motion.div>
          <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Free Career Consultation
          </DialogTitle>
          <p className="text-center text-muted-foreground text-sm">
            Take the first step towards your dream education abroad
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10 mt-4">
          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
                className="bg-background/50 border-primary/20 focus:border-accent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-background/50 border-primary/20 focus:border-accent"
              />
            </div>
          </div>

          {/* Row 2: Contact & Destination */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contact" className="text-sm font-medium">
                Contact Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="contact"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
                required
                className="bg-background/50 border-primary/20 focus:border-accent"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Preferred Study Destination{" "}
                <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.destination}
                onValueChange={(value) =>
                  setFormData({ ...formData, destination: value })
                }
                required
              >
                <SelectTrigger className="bg-background/50 border-primary/20">
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent>
                  {studyDestinations.map((dest) => (
                    <SelectItem key={dest} value={dest}>
                      {dest}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Row 3: Timeline & Counselling Mode */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                When would you like to start?{" "}
                <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.timeline}
                onValueChange={(value) =>
                  setFormData({ ...formData, timeline: value })
                }
                required
              >
                <SelectTrigger className="bg-background/50 border-primary/20">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  {timelines.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Preferred Mode of Counselling{" "}
                <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.counsellingMode}
                onValueChange={(value) =>
                  setFormData({ ...formData, counsellingMode: value })
                }
                required
              >
                <SelectTrigger className="bg-background/50 border-primary/20">
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>
                <SelectContent>
                  {counsellingModes.map((mode) => (
                    <SelectItem key={mode} value={mode}>
                      {mode}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Row 4: Study Level & Course */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Preferred Study Level{" "}
                <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.studyLevel}
                onValueChange={(value) =>
                  setFormData({ ...formData, studyLevel: value })
                }
                required
              >
                <SelectTrigger className="bg-background/50 border-primary/20">
                  <SelectValue placeholder="Select study level" />
                </SelectTrigger>
                <SelectContent>
                  {studyLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Select Your Power Batches{" "}
                <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.course}
                onValueChange={(value) =>
                  setFormData({ ...formData, course: value })
                }
                required
              >
                <SelectTrigger className="bg-background/50 border-primary/20">
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Row 5: Funding */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              How would you fund your education?{" "}
              <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.funding}
              onValueChange={(value) =>
                setFormData({ ...formData, funding: value })
              }
              required
            >
              <SelectTrigger className="bg-background/50 border-primary/20">
                <SelectValue placeholder="Select funding option" />
              </SelectTrigger>
              <SelectContent>
                {fundingOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start space-x-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
            <Checkbox
              id="terms"
              checked={formData.agreeTerms}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, agreeTerms: checked as boolean })
              }
              className="mt-0.5"
            />
            <Label
              htmlFor="terms"
              className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
            >
              I agree to the{" "}
              <a href="#" className="text-accent hover:underline font-medium">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-accent hover:underline font-medium">
                Privacy Policy
              </a>
              . I consent to receiving communications regarding my inquiry.
            </Label>
          </div>

          {/* Submit Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-accent to-globe-green-light hover:from-accent/90 hover:to-globe-green-light/90 text-white font-semibold py-6 rounded-xl shadow-lg"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Book Your Free Consultation
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          <p className="text-center text-xs text-muted-foreground">
            🔒 Your information is secure and will never be shared
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationPopup;

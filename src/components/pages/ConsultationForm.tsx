import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Clock, Mail, Phone, User } from "lucide-react";

const services = [
  {
    id: "content",
    label: "Content Marketing",
    description:
      "Erstellen Sie hochwertigen Content, der Ihre Zielgruppe begeistert und zu mehr Conversions führt.",
  },
  {
    id: "seo",
    label: "SEO Optimierung",
    description:
      "Verbessern Sie Ihre Sichtbarkeit in Suchmaschinen und erreichen Sie mehr qualifizierte Besucher.",
  },
  {
    id: "performance",
    label: "Performance Marketing",
    description:
      "Maximieren Sie Ihren ROI durch datengetriebene Werbekampagnen auf allen relevanten Kanälen.",
  },
  {
    id: "social",
    label: "Social Media Marketing",
    description:
      "Bauen Sie eine starke Social Media Präsenz auf und verbinden Sie sich mit Ihrer Zielgruppe.",
  },
];

const formSchema = z.object({
  firstName: z.string().min(2, "Vorname muss mindestens 2 Zeichen lang sein"),
  lastName: z.string().min(2, "Nachname muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Ungültige E-Mail Adresse"),
  phone: z.string().min(6, "Telefonnummer muss mindestens 6 Zeichen lang sein"),
  company: z.string().optional(),
  services: z
    .array(z.string())
    .min(1, "Bitte wählen Sie mindestens eine Dienstleistung aus"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
  urgency: z.enum(["low", "medium", "high"]).optional(),
  budget: z.enum(["none", "small", "medium", "large"]).optional(),
  newsletter: z.boolean().default(false).optional(),
});

export default function ConsultationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
      newsletter: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the form data to your backend
    setIsSubmitted(true);
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      <Header />
      <main className="flex-grow container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tight font-scandia mb-4 text-brand-dark">
              Kostenlose Beratung
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Füllen Sie das Formular aus und wir melden uns innerhalb von 24
              Stunden bei Ihnen für ein unverbindliches Beratungsgespräch.
            </p>
          </motion.div>

          {isSubmitted ? (
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Vielen Dank für Ihre Anfrage!
              </h2>
              <p className="text-gray-600 mb-6">
                Wir haben Ihre Anfrage erhalten und werden uns innerhalb der
                nächsten 24 Stunden bei Ihnen melden. In der Zwischenzeit können
                Sie gerne unsere vollständigen Case Studies durchstöbern.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = "/")}
                >
                  Zurück zur Startseite
                </Button>
                <Button
                  onClick={() => (window.location.href = "/#case-study")}
                  className="bg-brand-secondary hover:bg-brand-primary"
                >
                  Vollständige Case Studies
                </Button>
              </div>
            </motion.div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Progress bar */}
              <div className="bg-gray-50 p-4 border-b">
                <div className="flex justify-between items-center mb-2">
                  {Array.from({ length: totalSteps }).map((_, index) => (
                    <div
                      key={index}
                      className={`flex items-center ${index > 0 ? "flex-1" : ""}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep > index + 1 ? "bg-brand-secondary text-white" : currentStep === index + 1 ? "bg-brand-primary text-white" : "bg-gray-200 text-gray-500"}`}
                      >
                        {currentStep > index + 1 ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      {index < totalSteps - 1 && (
                        <div
                          className={`flex-1 h-1 mx-2 ${currentStep > index + 1 ? "bg-brand-secondary" : "bg-gray-200"}`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Persönliche Daten</span>
                  <span>Dienstleistungen</span>
                  <span>Projektdetails</span>
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="p-6">
                  {currentStep === 1 && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-6"
                    >
                      <motion.div variants={itemVariants}>
                        <h2 className="text-xl font-semibold mb-4 flex items-center text-brand-dark">
                          <User className="mr-2 h-5 w-5 text-brand-secondary" />
                          Persönliche Informationen
                        </h2>
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Vorname*</FormLabel>
                              <FormControl>
                                <Input placeholder="Max" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nachname*</FormLabel>
                              <FormControl>
                                <Input placeholder="Mustermann" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email*</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                  <Input
                                    placeholder="max.mustermann@example.com"
                                    className="pl-10"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Telefon*</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                  <Input
                                    placeholder="+43 123 4567890"
                                    className="pl-10"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Unternehmen</FormLabel>
                              <FormControl>
                                <Input placeholder="Firma" {...field} />
                              </FormControl>
                              <FormDescription>
                                Optional - Geben Sie den Namen Ihres
                                Unternehmens an
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-6"
                    >
                      <motion.div variants={itemVariants}>
                        <h2 className="text-xl font-semibold mb-4 flex items-center text-brand-dark">
                          <Calendar className="mr-2 h-5 w-5 text-brand-secondary" />
                          Gewünschte Dienstleistungen
                        </h2>
                        <p className="text-gray-500 mb-6">
                          Wählen Sie eine oder mehrere Dienstleistungen aus, die
                          Sie interessieren
                        </p>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="services"
                          render={() => (
                            <FormItem>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {services.map((service) => (
                                  <FormField
                                    key={service.id}
                                    control={form.control}
                                    name="services"
                                    render={({ field }) => {
                                      return (
                                        <FormItem
                                          key={service.id}
                                          className="flex flex-col space-y-0 p-4 border rounded-lg hover:border-brand-secondary transition-colors duration-200"
                                        >
                                          <div className="flex items-start space-x-3 mb-2">
                                            <FormControl>
                                              <Checkbox
                                                checked={field.value?.includes(
                                                  service.id,
                                                )}
                                                onCheckedChange={(checked) => {
                                                  return checked
                                                    ? field.onChange([
                                                        ...field.value,
                                                        service.id,
                                                      ])
                                                    : field.onChange(
                                                        field.value?.filter(
                                                          (value) =>
                                                            value !==
                                                            service.id,
                                                        ),
                                                      );
                                                }}
                                              />
                                            </FormControl>
                                            <FormLabel className="font-medium cursor-pointer">
                                              {service.label}
                                            </FormLabel>
                                          </div>
                                          <p className="text-gray-500 text-sm pl-7">
                                            {service.description}
                                          </p>
                                        </FormItem>
                                      );
                                    }}
                                  />
                                ))}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-6"
                    >
                      <motion.div variants={itemVariants}>
                        <h2 className="text-xl font-semibold mb-4 flex items-center text-brand-dark">
                          <Clock className="mr-2 h-5 w-5 text-brand-secondary" />
                          Projektdetails
                        </h2>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Ihre Nachricht*</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Beschreiben Sie kurz Ihr Projekt, Ihre Ziele oder Ihre Anforderungen"
                                  className="min-h-[150px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <FormField
                          control={form.control}
                          name="urgency"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Dringlichkeit</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Wie dringend ist Ihr Anliegen?" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="low">
                                    Niedrig (in den nächsten 3 Monaten)
                                  </SelectItem>
                                  <SelectItem value="medium">
                                    Mittel (in den nächsten 4-6 Wochen)
                                  </SelectItem>
                                  <SelectItem value="high">
                                    Hoch (in den nächsten 2 Wochen)
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                Optional - Hilft uns bei der Priorisierung
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Budget</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Ihr ungefähres Budget" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="none">
                                    Keine Angabe
                                  </SelectItem>
                                  <SelectItem value="small">
                                    Bis 2.000 €
                                  </SelectItem>
                                  <SelectItem value="medium">
                                    2.000 € - 5.000 €
                                  </SelectItem>
                                  <SelectItem value="large">
                                    Über 5.000 €
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                Optional - Hilft uns, passende Lösungen
                                vorzuschlagen
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="newsletter"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 mt-6">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>Newsletter abonnieren</FormLabel>
                                <FormDescription>
                                  Erhalten Sie regelmäßig Tipps, Trends und
                                  Neuigkeiten aus dem Bereich Digital Marketing.
                                </FormDescription>
                              </div>
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    </motion.div>
                  )}

                  <div className="mt-8 flex justify-between">
                    {currentStep > 1 ? (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                      >
                        Zurück
                      </Button>
                    ) : (
                      <div></div>
                    )}

                    {currentStep < totalSteps ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="bg-brand-secondary hover:bg-brand-primary"
                      >
                        Weiter
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="bg-brand-secondary hover:bg-brand-primary"
                      >
                        Anfrage absenden
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            </div>
          )}

          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="font-medium mb-2">Kostenlose Erstberatung</h3>
              <p className="text-sm text-gray-500">
                Unverbindliches Gespräch ohne versteckte Kosten
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-brand-secondary" />
              </div>
              <h3 className="font-medium mb-2">Datenschutz garantiert</h3>
              <p className="text-sm text-gray-500">
                Ihre Daten werden vertraulich behandelt
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-medium mb-2">Schnelle Antwort</h3>
              <p className="text-sm text-gray-500">
                Antwort innerhalb von 24 Stunden garantiert
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

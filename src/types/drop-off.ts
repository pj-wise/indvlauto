import { z } from "zod";

export const dropOffSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z.string().min(6, "Phone number must be at least 6 characters"),
  companyName: z.string().optional(),
  month: z.string().min(1, "Month is required"),
  day: z.string().min(1, "Day is required"),
  year: z.string().min(1, "Year is required"),
  time: z.string().min(1, "Time is required"),
  ampm: z.string().min(1, "AM/PM is required"),
  vehicleYear: z.string().min(1, "Vehicle year is required"),
  vehicleMake: z.string().min(1, "Vehicle make is required"),
  vehicleModel: z.string().min(1, "Vehicle model is required"),
  vin: z.string().min(1, "VIN is required"),
  services: z.string().min(1, "Services being performed is required"),
  previousWork: z.string().min(1, "Previous work disclosure is required"),
  signature: z.string().min(1, "Signature is required"),
  policyAgreement: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the policies" }),
  }),
});

export const pickUpSchema = z.object({
  signature: z.string().min(1, "Signature is required"),
  vehicleAcceptance: z.literal(true, {
    errorMap: () => ({
      message: "You must confirm vehicle acceptance",
    }),
  }),
  notes: z.string().optional(),
});

export type DropOffFormData = z.infer<typeof dropOffSchema>;
export type PickUpFormData = z.infer<typeof pickUpSchema>;

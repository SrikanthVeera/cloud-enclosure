// src/components/BookVisitForm.tsx
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SITE } from "../data/siteContent";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  phone: z.string().min(10, "Enter a valid phone").max(15),
  enclosure: z.string(),
  finish: z.string(),
  message: z.string().optional()
});

type FormData = z.infer<typeof schema>;

export default function BookVisitForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { enclosure: "Not Sure", finish: SITE.services.finishes[0] }
  });

  const onSubmit = async (data: FormData) => {
    // TODO: replace with real endpoint (serverless or API)
    console.log("Booking request", data);
    alert("Thanks! We'll contact you soon.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm">Name</label>
        <input {...register("name")} className="w-full border p-2 rounded" />
        <p className="text-red-600 text-sm">{errors.name?.message as string}</p>
      </div>

      <div>
        <label className="block text-sm">Phone</label>
        <input {...register("phone")} className="w-full border p-2 rounded" />
        <p className="text-red-600 text-sm">{errors.phone?.message as string}</p>
      </div>

      <div>
        <label className="block text-sm">Preferred Shower Enclosure Type</label>
        <select {...register("enclosure")} className="w-full border p-2 rounded">
          {SITE.services.enclosureTypes.map(e => <option key={e.id} value={e.name}>{e.name}</option>)}
          <option value="Not Sure">Not Sure</option>
        </select>
      </div>

      <div>
        <label className="block text-sm">Preferred Hardware Finish</label>
        <select {...register("finish")} className="w-full border p-2 rounded">
          {SITE.services.finishes.map(f => <option key={f} value={f}>{f}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-sm">Message (optional)</label>
        <textarea {...register("message")} className="w-full border p-2 rounded" rows={4}></textarea>
      </div>

      <div>
        <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-teal-600 text-white rounded">
          Schedule My Visit
        </button>
      </div>
    </form>
  );
}

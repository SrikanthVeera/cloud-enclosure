import BookVisitForm from "./BookVisitForm";

export default function BookingModal({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative bg-white rounded-xl shadow-xl p-6 max-w-lg w-full z-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Book a Measurement Visit</h3>
          <button onClick={onClose} aria-label="Close" className="p-2 rounded">
            ✕
          </button>
        </div>

        <BookVisitForm />
      </div>
    </div>
  );
}

export default function ServiceCard({
  name,
  desc
}: {
  name: string;
  desc: string;
}) {
  return (
    <article className="border rounded-lg p-4 shadow-sm">
      <h3 className="font-semibold">{name}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
      <button className="mt-4 inline-block text-sm px-3 py-2 border rounded">
        See Gallery
      </button>
    </article>
  );
}

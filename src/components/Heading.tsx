export default function Heading({
  id,
  title,
  description,
  center = false,
}: {
  id: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div
      className={
        "mb-10 " +
        (center ? "mx-auto max-w-[700px] text-center" : "max-w-[680px]")
      }
    >
      <h2 id={id + "-title"} className="section-title">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-7 text-muted">{description}</p>
      )}
    </div>
  );
}

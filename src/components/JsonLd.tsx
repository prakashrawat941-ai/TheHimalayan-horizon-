type JsonLdProps = {
  data: Record<string, unknown>;
};

// Escaping "<" stops the JSON from closing the script tag early.
export default function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

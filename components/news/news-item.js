import Link from "next/link";

export default function NewsItem({ title, content }) {
  return (
    <>
      <h1>
        <Link href={`/news/${title}`}>{title}</Link>
      </h1>
    </>
  );
}

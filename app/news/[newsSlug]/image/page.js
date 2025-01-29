import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default function ImagePage({ params }) {
  const newsItemSlug = params.newsSlug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img className="imgFit" src={`/images/news/${newsItem.image}`} />
    </div>
  );
}

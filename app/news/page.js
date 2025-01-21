import classes from "@/app/globals.css";
import NewsList from "@/components/news/news-list";
import Link from "next/link";

export default function NewsPage() {
  const news1 = {
    title: "New News!",
    content: "NEWSSS",
  };

  const news2 = {
    title: "New New News!",
    content: "NEWSSS",
  };

  const displayNews = [news1, news2];

  return (
    <>
      <h1>News List</h1>
      <ul className={classes["news-list"]}>
        <NewsList news={displayNews} />
      </ul>
    </>
  );
}

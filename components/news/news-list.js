import NewsItem from "./news-item";
import classes from "@/app/globals.css";

export default function NewsList({ news }) {
  return (
    <ul className={classes.nav}>
      {news.map((news) => (
        <li key={news.title}>
          <NewsItem {...news} />
        </li>
      ))}
    </ul>
  );
}

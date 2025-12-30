import { withDataFetching } from "./with-pattern/withDataFetching";

import MovieAnalytics from "./components/MovieAnalytics";
import MovieList from "./components/MovieList";

// Wrap both components with the same HOC
const MovieListWithData = withDataFetching(MovieList);
const MovieAnalyticsWithData = withDataFetching(MovieAnalytics);

export default function MovieWithHOC() {
  return (
    <div className="max-w-lg mx-auto mt-10 space-y-6">
      <MovieListWithData />
      <MovieAnalyticsWithData />
    </div>
  );
}

import { useRouteError } from "react-router-dom";
import Header from "../atoms/Header";
import Footer from "../atoms/Footer";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex h-screen min-h-screen w-screen flex-col justify-between">
      <Header />
      <div
        id="error-page"
        className="flex flex-col items-center justify-center gap-2"
      >
        <p className="text-5xl font-bold">ERROR {error.status}</p>
        <p className="text-4xl">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <Footer />
    </div>
  );
}

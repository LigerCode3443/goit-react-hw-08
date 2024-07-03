import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div
      className="hero min-h-screen rounded-xl"
      style={{
        backgroundImage:
          "url(https://media.npr.org/assets/img/2022/12/22/gettyimages-1245203807-1536x1029_wide-93c747aa49ce21d6ef2e0684afba0fcef010adfb.jpg?s=1400&c=100&f=jpeg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/contacts" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

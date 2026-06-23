import Script from "next/script";

export default function GoogleReviews() {
  return (
    <>
      {/* <!-- Elfsight Google Reviews | Primo Painters --> */}
      <Script src="https://elfsightcdn.com/platform.js" async></Script>
      <div className="">
        <div
          className="elfsight-app-9ba5075d-6901-442e-9996-80f98158da65 "
          data-elfsight-app-lazy
        ></div>
      </div>
    </>
  );
}

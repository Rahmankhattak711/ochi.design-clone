export default function Hero() {
  const headingText = [
    {
      title: "We create",
    },
    {
      title: "eye-opening",
    },
    {
      title: "presentations",
    }
  ]
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="container">
        <div>
          <div className="maske">
            {headingText.map(
              (text, index) => (
                <h1
                  key={index}
                  className="uppercase text-9xl leading-[7.3vw] tracking-tighter font-heading font-weight-200  "
                >
                  {text.title}
                </h1>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

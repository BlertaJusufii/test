const InfoSection = ({ data }) => {
  return (
    <div className=" max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="block text-[18px] font-semibold text-[#669933] mb-2 uppercase tracking-wider text-center">
            {data.title}
          </span>

          <h2 className="text-[28px] md:text-[35px] lg:text-3xl font-bold text-gray-900 mb-6 leading-tight text-center">
            {data.subtitle}
          </h2>

          <div className="prose prose-lg text-gray-600 space-y-4 text-center text-[16px]">
            {data.description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoSection;

import BottomLink from "../bottomLink";

type Props = {};

const OurStudio = (props: Props) => {

  function generateImagePaths(prefix = "/images/logo", count = 48) {
    const imagePaths = [];
    for (let i = 1; i <= count; i++) {
      imagePaths.push(`${prefix}${i}.png`);
    }
    return imagePaths;
  }
  const images = generateImagePaths();
  return (
    <section className="md:mx-10 mx-5 mt-28">
      <div className="md:w-[90%] w-[100%] mx-auto">
        <h2 className="header">Our Studio Portfolio</h2>
        <p className="subHeading">
          Our 2024 Service Incubator Portfolio Companies
        </p>
        <div className="flex justify-center">
          <div className="mt-10 items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {images.map((image) => (
              <div key={image}>
                <img src={image} alt={image}/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomLink text="View All Companies "/>
    </section>
  );
};

export default OurStudio;

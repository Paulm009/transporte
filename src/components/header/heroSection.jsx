
import heroImg from "../../assets/logo.png";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <img
        src={heroImg}
        alt="Car service"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          WE ARE YOUR TRUSTED{" "}
          <span className="text-[#E41E26]">CAR CARE EXPERTS</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Auto Transmission, Brakes, Maintenance, and a whole lot more!
        </p>
        <div className="flex justify-center space-x-4">
          <input
            type="text"
            placeholder="Locate a center near you"
            className="px-4 py-2 rounded-lg text-black"
          />
          <button className="bg-[#E41E26] hover:bg-[#C11A1E] px-6 py-2 rounded-lg font-semibold">
            My Local Mechanic
          </button>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import mulherNegraColagem from "../../assets/mulherNegraColagem 1.svg";

export default function HistoricalContextResistance() {
  return (
    <section className="w-full relative">
      <div className="w-full flex max-md:flex-col items-center lg:justify-between">
        <h3 className="font-normal text-[20px] lg:text-6xl lg:w-1/2 ">
          Sua atuação uniu tradição,{" "}
          <span className="inline-block bg-[#72D14A] px-2 leading-none">
            resistência
          </span>{" "}
          <span className="inline-block bg-[#72D14A] px-2 leading-none">
            comunidade
          </span>{" "}
          tornando-se um símbolo do protagonismo feminino negro na história da
          música brasileira.
        </h3>
        <Image
          className=""
          src={mulherNegraColagem}
          alt="Colagem mulher negra"
          width={600}
          height={300}
          sizes="(max-width: 640px) 100vw, 400px"
        />
      </div>
    </section>
  );
}

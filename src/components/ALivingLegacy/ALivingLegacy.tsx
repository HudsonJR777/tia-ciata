import Image from "next/image";
import ALivingLegacyImage from "../../assets/ALivingLegacy.png";

export default function ALivingLegacy() {
  return (
    <section className="container-section w-full">
      <div className="relative overflow-hidden rounded-[24px] bg-[#0B0B0B] shadow-[0_30px_60px_rgba(0,0,0,0.35)]">
        <div className="absolute inset-0">
          <Image
            src={ALivingLegacyImage}
            alt="O legado continua vivo"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* <div className="absolute inset-0 bg-black/65" /> */}

        <div className="relative mx-auto flex min-h-[420px] flex-col items-center justify-center px-6 py-16 text-center text-white sm:px-8 md:min-h-[500px] md:px-10 lg:flex-row lg:items-center lg:justify-center lg:px-14 lg:py-20">
          <div className="w-full max-w-3xl lg:max-w-2xl">
            <h2 className="text-[2.5rem] font-black leading-[1.02] tracking-[-0.04em] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem]">
              O Legado
              <br />
              Continua Vivo
            </h2>
            <p className="mt-6 text-sm leading-6 text-white sm:text-base sm:leading-7 md:text-lg md:leading-8">
              A história de Tia Ciata atravessou gerações e ajudou a moldar a
              cultura brasileira. Sua influência permanece presente no samba, na
              religiosidade afro-brasileira e na identidade de um povo que
              transformou resistência em arte.
            </p>
            <button className="cursor-pointer mt-10 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#f5f5f5] md:px-10 md:py-4">
              Conheça seu legado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

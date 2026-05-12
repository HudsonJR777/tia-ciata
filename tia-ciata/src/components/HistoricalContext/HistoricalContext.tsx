import Image from "next/image";
import HistoricalContextImage from "../../assets/HistoricalContextImage.png";
import HistoricalContextResistance from "./HistoricalContextResistance";

export default function HistoricalContext() {
  return (
    <section className="container-section w-full flex flex-col gap-10 lg:gap-20">
      <div className="flex flex-col gap-10">
        <Image
          className="w-full rounded"
          src={HistoricalContextImage}
          alt="banner cultural showcase"
          height={380}
        />
        <div>
          <p className="text-[#FFFFFF] text-[12px] lg:text-3xl">
            Tia Ciata foi uma das figuras mais importantes na formação do samba
            no Brasil. Nascida na Bahia e radicada no Rio de Janeiro, ela
            transformou sua casa em um ponto de encontro para músicos,
            compositores e festeiros, ajudando a consolidar o samba como
            expressão cultural urbana.
          </p>
        </div>
      </div>
      <HistoricalContextResistance />
    </section>
  );
}

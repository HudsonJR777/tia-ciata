import Image from "next/image";
import type { ChapterBlock } from "@/src/constants/chapters";

interface ChapterContentProps {
  blocks: ChapterBlock[];
}

export default function ChapterContent({ blocks }: ChapterContentProps) {
  return (
    <div className="chapter-content space-y-8">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            if (block.level === 2) {
              return (
                <h2
                  key={index}
                  className="text-2xl lg:text-3xl font-bold text-white mt-10"
                >
                  {block.text}
                </h2>
              );
            }

            return (
              <h3
                key={index}
                className="text-xl lg:text-2xl font-semibold text-white/90 mt-8"
              >
                {block.text}
              </h3>
            );

          case "paragraph":
            return (
              <p
                key={index}
                className="text-white/70 leading-8 text-sm lg:text-base"
              >
                {block.text}
              </p>
            );

          case "image":
            return (
              <div key={index} className="w-full rounded-3xl overflow-hidden">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={block.src.width}
                  height={block.src.height}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
                {block.caption ? (
                  <p className="mt-4 text-sm text-white/60">{block.caption}</p>
                ) : null}
              </div>
            );

          case "list":
            return block.ordered ? (
              <ol
                key={index}
                className="list-decimal ml-6 space-y-3 text-white/70 text-sm lg:text-base"
              >
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul
                key={index}
                className="list-disc ml-6 space-y-3 text-white/70 text-sm lg:text-base"
              >
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

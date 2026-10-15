import type { ReadmeBlock } from "@/content/profile";
import { profile } from "@/content/profile";
import { Box } from "./Primitives";

export function Readme({ blocks, greeting }: { blocks: ReadmeBlock[]; greeting: string }) {
  return (
    <Box className="p-6">
      <p className="mb-4 font-mono text-xs text-muted">
        {profile.login} / README<span className="text-fg">.md</span>
      </p>
      <h2 className="mb-4 border-b border-line pb-2 text-2xl font-semibold">{greeting}</h2>
      <div className="space-y-4 text-base leading-relaxed">
        {blocks.map((block, i) => {
          if (block.type === "h") {
            return (
              <h3 key={i} className="border-b border-line pb-1 pt-2 text-xl font-semibold">
                {block.text}
              </h3>
            );
          }
          if (block.type === "ul") {
            return (
              <ul key={i} className="list-disc space-y-1 pl-6">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          }
          return <p key={i}>{block.text}</p>;
        })}
      </div>
    </Box>
  );
}

"use client";
import React, { useState, useRef } from "react";

interface TagsInputProps {
  maxTags?: number;
}

export default function TagsInput({ maxTags = 10 }: TagsInputProps) {
  const [tags, setTags] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addTag = (tag: string) => {
    const trimmed = tag.trim();
    if (
      !trimmed ||
      tags.includes(trimmed) ||
      tags.length >= maxTags ||
      trimmed.length > 32
    )
      return;
    setTags([...tags, trimmed]);
    setInput("");
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(input);
    } else if (e.key === "Backspace" && !input && tags.length > 0) {
      removeTag(tags[tags.length - 1]);
    }
  };

  return (
    <div>
      <div className="relative">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInputKeyDown}
          className="w-full text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 pr-10 focus:ring-1 focus:ring-primary focus:border-primary"
          placeholder={
            tags.length >= maxTags
              ? `Max ${maxTags} tags reached`
              : "Add tags..."
          }
          type="text"
          disabled={tags.length >= maxTags}
          autoComplete="off"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-sm">
          keyboard_return
        </span>
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag, idx) => (
          <span
            key={tag + idx}
            className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded flex items-center gap-1"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="material-symbols-outlined text-[12px] cursor-pointer bg-transparent border-none p-0"
              aria-label={`Remove tag ${tag}`}
            >
              close
            </button>
          </span>
        ))}
      </div>
      {/* Hidden input to serialize tags as array for server */}
      <input type="hidden" name="tags" value={JSON.stringify(tags)} />
    </div>
  );
}

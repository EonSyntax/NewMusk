"use client";

import { useState } from "react";
import NichTextEditor from "./NichTextEditor";

interface Props {
  initialContent: string;
}

export default function PostEditorForm({ initialContent }: Props) {
  const [content, setContent] = useState(initialContent);

  return (
    <>
      <NichTextEditor content={initialContent} onChange={setContent} />

      {/* Hidden input for form submission */}
      <input type="hidden" name="content" value={content} />
    </>
  );
}
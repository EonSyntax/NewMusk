"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { useEffect } from "react";

interface Props {
  content?: string;
  onChange: (value: string) => void;
}

export default function RichTextEditor({ content, onChange }: Props) {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: content || "",
    immediatelyRender: false,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && content !== undefined) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) return null;

  return (
    <div className="border rounded-md">
      {/* 🔥 Toolbar */}
      <div className="flex gap-2 border-b p-2 flex-wrap">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="px-2 py-1 border rounded"
        >
          Bold
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="px-2 py-1 border rounded"
        >
          Italic
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className="px-2 py-1 border rounded"
        >
          H1
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className="px-2 py-1 border rounded"
        >
          H2
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className="px-2 py-1 border rounded"
        >
          Bullet List
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className="px-2 py-1 border rounded"
        >
          Numbered List
        </button>
        <button
          type="button"
          onClick={async () => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/*";
            input.click();

            input.onchange = async () => {
              if (!input.files?.length) return;

              const file = input.files[0];
              const formData = new FormData();
              formData.append("file", file);

              const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
              });

              const data = await res.json();

              if (data.secure_url) {
                editor
                  ?.chain()
                  .focus()
                  .setImage({ src: data.secure_url })
                  .run();
              }
            };
          }}
          className="px-2 py-1 border rounded"
        >
          Upload Image
        </button>
      </div>

      {/* ✍ Editor */}
      <div className="p-3 min-h-50">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

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
    <>
      <div className="sticky top-4 mb-8 p-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-none flex items-center gap-1 z-20 overflow-x-auto flex-nowrap scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700 scrollbar-track-transparent">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300"
        >
          <span className="material-symbols-outlined">format_bold</span>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300"
        >
          <span className="material-symbols-outlined">format_italic</span>
        </button>
        <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 flex items-center gap-1"
        >
          <span className="material-symbols-outlined">format_h1</span>
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 flex items-center gap-1"
        >
          <span className="material-symbols-outlined">format_h2</span>
        </button>
        <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleLink().run()}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300"
        >
          <span className="material-symbols-outlined">link</span>
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
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300"
        >
          <span className="material-symbols-outlined">image</span>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCode().run()}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300"
        >
          <span className="material-symbols-outlined">code</span>
        </button>
        <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300"
        >
          <span className="material-symbols-outlined">
            format_list_bulleted
          </span>
        </button>
      </div>
      {/* <!-- Content Area --> */}
      <div
        className="editor-content prose dark:prose-invert max-w-none text-lg leading-relaxed text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 min-h-[20em] max-h-[40em] overflow-y-auto p-4"
        style={{ minHeight: "20em", maxHeight: "40em" }}
      >
        <EditorContent
          editor={editor}
          className="h-full border-none caret-accent dark:caret-slate-100"
        />
      </div>
    </>
  );
}

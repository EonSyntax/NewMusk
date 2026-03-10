"use client";
import TextAlign from "@tiptap/extension-text-align";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ResizeImage from "tiptap-extension-resize-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect } from "react";

interface Props {
  content?: string;
  onChange: (value: string) => void;
}

export default function NichTextEditor({ content, onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      ResizeImage,
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        placeholder: "Start writing your post....",
      }),
    ],
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
      <div className="relative">
        <div className="sticky top-4 mb-8 p-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-none flex items-center gap-1 z-20 overflow-x-auto flex-nowrap scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700 scrollbar-track-transparent">
          <button
            title="Bold"
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 rounded-lg text-slate-600 ${
              editor.isActive("bold")
                ? "bg-slate-200 dark:bg-slate-700"
                : "hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            <span className="material-symbols-outlined">format_bold</span>
          </button>
          <button
            title="Italic"
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 rounded-lg text-slate-600 ${
              editor.isActive("italic")
                ? "bg-slate-200 dark:bg-slate-700"
                : "hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            <span className="material-symbols-outlined">format_italic</span>
          </button>
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>
          <button
            title="Heading 1"
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={`p-2 rounded-lg text-slate-600 ${
              editor.isActive("heading", { level: 1 })
                ? "bg-slate-200 dark:bg-slate-700"
                : "hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            <span className="material-symbols-outlined">format_h1</span>
          </button>
          <button
            title="Heading 2"
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={`p-2 rounded-lg text-slate-600 ${
              editor.isActive("heading", { level: 2 })
                ? "bg-slate-200 dark:bg-slate-700"
                : "hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            <span className="material-symbols-outlined">format_h2</span>
          </button>
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>

          <button
            title="Link"
            type="button"
            onClick={() => {
              const url = prompt("Enter URL");

              if (url) {
                editor.chain().focus().setLink({ href: url }).run();
              }
            }}
            className={`p-2 rounded-lg text-slate-600 ${
              editor.isActive("link")
                ? "bg-slate-200 dark:bg-slate-700"
                : "hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            <span className="material-symbols-outlined">link</span>
          </button>
          <button
            title="Image"
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
            className={`p-2 rounded-lg text-slate-600 ${
              editor.isActive("image")
                ? "bg-slate-200 dark:bg-slate-700"
                : "hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            <span className="material-symbols-outlined">image</span>
          </button>
          <button
            title="Code Block"
            type="button"
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={`p-2 rounded-lg text-slate-600 ${
              editor.isActive("codeBlock")
                ? "bg-slate-200 dark:bg-slate-700"
                : "hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            <span className="material-symbols-outlined">code</span>
          </button>
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>
          <button
            title="Bullet List"
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-2 rounded-lg text-slate-600 ${
              editor.isActive("bulletList")
                ? "bg-slate-200 dark:bg-slate-700"
                : "hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            <span className="material-symbols-outlined">
              format_list_bulleted
            </span>
          </button>
          <button
            title="Numbered List"
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`p-2 rounded-lg text-slate-600 ${
              editor.isActive("orderedList")
                ? "bg-slate-200 dark:bg-slate-700"
                : "hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            <span className="material-symbols-outlined">
              format_list_numbered
            </span>
          </button>
          <div className="relative group align-dropdown-trigger">
            <button
              type="button"
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
            >
              <span className="material-symbols-outlined">
                format_align_justify
              </span>
            </button>

            {/* Dropdown positioned outside the toolbar overflow */}
            <div
              className="fixed hidden group-hover:flex flex-col bg-white dark:bg-slate-800 border rounded-lg shadow-lg"
              // style={{ top: "375px", right: "773px" }}
            >
              <button
                onClick={() =>
                  editor.chain().focus().setTextAlign("left").run()
                }
                className="p-2 hover:bg-slate-100"
                title="Align Left"
              >
                <span className="material-symbols-outlined">
                  format_align_left
                </span>
              </button>

              <button
                onClick={() =>
                  editor.chain().focus().setTextAlign("center").run()
                }
                className="p-2 hover:bg-slate-100"
                title="Align Center"
              >
                <span className="material-symbols-outlined">
                  format_align_center
                </span>
              </button>

              <button
                onClick={() =>
                  editor.chain().focus().setTextAlign("right").run()
                }
                className="p-2 hover:bg-slate-100"
                title="Align Right"
              >
                <span className="material-symbols-outlined">
                  format_align_right
                </span>
              </button>

              <button
                onClick={() =>
                  editor.chain().focus().setTextAlign("justify").run()
                }
                className="p-2 hover:bg-slate-100"
                title="Justify"
              >
                <span className="material-symbols-outlined">
                  format_align_justify
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Content Area --> */}
        <div
          className="editor-content max-w-none text-lg leading-relaxed text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 min-h-75 max-h-150 overflow-y-auto p-4 focus-within:ring-2 focus-within:ring-blue-500"
          style={{ minHeight: "20em", maxHeight: "40em" }}
        >
          <EditorContent
            editor={editor}
            className="h-full border-none outline-none [&_p]:outline-none"
          />
        </div>
      </div>
    </>
  );
}

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import React from "react";

const RichTextEditor = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: value,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 p-2 bg-gray-50 border-b border-gray-200">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-1 text-sm rounded-lg border-gray-300 border
          ${editor.isActive("bold") ? "bg-blue-600 text-white" : "bg-white hover:bg-gray-100"}`}
        >
          Bold
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-1 text-sm rounded-lg border-gray-300 border
          ${editor.isActive("italic") ? "bg-blue-600 text-white" : "bg-white hover:bg-gray-100"}`}
        >
          Italic
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className="px-2 py-1 text-sm rounded-lg border-gray-300 border bg-white hover:bg-gray-100"
        >
          H1
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className="px-2 py-1 text-sm rounded-lg border-gray-300 border bg-white hover:bg-gray-100"
        >
          H2
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className="px-2 py-1 text-sm rounded-lg border-gray-300 border bg-white hover:bg-gray-100"
        >
          • List
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className="px-2 py-1 text-sm rounded-lg border-gray-300 border bg-white hover:bg-gray-100"
        >
          1. List
        </button>
      </div>

      {/* Editor Area */}
      <div className="p-4 min-h-[180px] bg-white prose max-w-none focus-within:ring-2 focus-within:ring-blue-500">
        <EditorContent editor={editor} className="outline-none min-h-[150px]" />
      </div>
    </div>
  );
};

export default RichTextEditor;

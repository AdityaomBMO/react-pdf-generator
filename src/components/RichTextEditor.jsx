import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import { Toggle } from "@/components/ui/toggle";
import { BoldIcon, ItalicIcon, ListIcon, ListOrderedIcon } from "lucide-react";
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
        <Toggle
          variant="outline"
          aria-label="Toggle bold"
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
          pressed={editor.isActive("bold")}
        >
          <BoldIcon />
        </Toggle>

        <Toggle
          variant="outline"
          aria-label="Toggle italic"
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
          pressed={editor.isActive("italic")}
        >
          <ItalicIcon />
        </Toggle>

        <Toggle
          variant="outline"
          aria-label="Toggle heading 1"
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          pressed={editor.isActive("heading", { level: 1 })}
        >
          H1
        </Toggle>

        <Toggle
          variant="outline"
          aria-label="Toggle heading 2"
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          pressed={editor.isActive("heading", { level: 2 })}
        >
          H2
        </Toggle>

        <Toggle
          variant="outline"
          aria-label="Toggle bullet list"
          onPressedChange={() =>
            editor.chain().focus().toggleBulletList().run()
          }
          pressed={editor.isActive("bulletList")}
        >
          <ListIcon />
        </Toggle>

        <Toggle
          variant="outline"
          aria-label="Toggle ordered list"
          onPressedChange={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
          pressed={editor.isActive("orderedList")}
        >
          <ListOrderedIcon />
        </Toggle>
      </div>

      {/* Editor Area */}
      <div className="p-4 min-h-45 bg-white prose max-w-none focus-within:ring-2 focus-within:ring-blue-500">
        <EditorContent editor={editor} className="outline-none min-h-37.5" />
      </div>
    </div>
  );
};

export default RichTextEditor;

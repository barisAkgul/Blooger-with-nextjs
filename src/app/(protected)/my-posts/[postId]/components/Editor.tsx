import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import "./styles.css";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ align: [] }],
    [{ color: [] }],
    ["code-block"],
    ["clean"],
  ],
};

const quillFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "link",
  "image",
  "align",
  "color",
  "code-block",
];

interface EditorProps {
  // disabled?: boolean;
  onChange: (value: string) => void;
  // onRemove: (value: string) => void;
  value: string;
}

const Editor: React.FC<EditorProps> = ({ onChange, value }) => {
  const [content, setContent] = useState("");

  const handleEditorChange = (newContent: any) => {
    setContent(newContent);
    onChange(newContent);
  };

  return (
    <main>
      <QuillEditor
        value={value}
        onChange={handleEditorChange}
        modules={quillModules}
        formats={quillFormats}
        className="w-full h-[70%] mt-10 bg-oxford-blue-2 border-wild-blue-yonder "
      />

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
};

export { Editor };

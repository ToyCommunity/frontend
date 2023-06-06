import React from 'react';
import dynamic from "next/dynamic";
import MDEditorSkeleton from "./MDEditorSkeleton";

import "@uiw/react-markdown-preview/markdown.css";
import "@uiw/react-md-editor/markdown-editor.css";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  {
    ssr: false, loading: () => <MDEditorSkeleton />
  }
);

export default MDEditor;
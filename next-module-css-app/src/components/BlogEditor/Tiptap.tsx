import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import localStyles from "./BlogEditor.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import { useState } from "react";
import makeFetch from "../../utils/makeFetch";
import { backendRoute } from "../../consts/consts";
import { useRouter } from "next/router";

const validateTitleAndBody = (bodyText: string, titleText: string) => {
  if (titleText.length < 2) {
    return false;
  }
  return true;
};

const Tiptap = () => {
  const router = useRouter();
  const [titleError, setTitleError] = useState("");
  const titleEditor = useEditor({
    extensions: [StarterKit],
    content: "Title",
  });
  const contentEditor = useEditor({
    extensions: [StarterKit],
    content: "<p>Body Text 🌎️</p>",
  });

  return (
    <div>
      {/*  <div className={localStyles.titleTextEditorDiv}>
        <h4>Title</h4>
        <hr></hr> */}
      <div className={localStyles.blogCont}>
        <div className={localStyles.blogHeadDiv}>
          <EditorContent
            className={localStyles.titleEditor}
            editor={titleEditor}
            rows={2}
            maxLength={50}
          />
        </div>
        <EditorContent
          className={localStyles.titleTextEditor}
          editor={contentEditor}
        />
      </div>
      {/* </div>
      <h4 className={localStyles.errTxt}>{titleError}</h4> */}
      <div className={localStyles.flexButt}>
        <button
          className={sharedStyles.actionButton}
          onClick={async () => {
            const titleText = titleEditor.getText();
            const bodyText = contentEditor.getText();
            if (!validateTitleAndBody(titleText, bodyText)) {
              setTitleError("Title too short");
              return;
            }
            makeFetch(
              backendRoute + "/data/addblog",
              { title: titleText, body: bodyText },
              "POST"
            )().then((res) => {
              if (!res?.success) {
                return;
              }
              router.push("/");
            });
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Tiptap;

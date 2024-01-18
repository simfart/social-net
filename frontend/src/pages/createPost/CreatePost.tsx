import { FC, useCallback, useState } from "react";
import { Navbar } from "widgets/menu";
import { ContentMenu } from "./contentMenu";
import { useForm } from "shared/hooks";
import profilePhoto from "../../shared/images/profile photo-to-del.jpg";
import deleteIcon from "../../shared/images/delete.png";
import { Button } from "../../shared/ui/button";
import { Input } from "../../shared/ui";

import "./CreatePost.scss";
import { cn } from "@bem-react/classname";

const CnCreatePost = cn("createPost");

const initialFormData = {
  postText: "",
  image: "",
  video: "",
};

const placeholderFromInputName = {
  postText: "What’s on your mind?",
  image: "Paste the URL of the image",
  video: "Paste the link to the video from YouTube",
};

const typeFromInputName = {
  postText: "text",
  image: "url",
  video: "url",
};

export const CreatePost: FC = () => {
  const { values, isValid, errors, clearForm, handleInputChange } =
    useForm(initialFormData);

  const [contentInput, setContentInput] = useState<string>();

  const addImg = useCallback(() => {
    setContentInput("image");
  }, [contentInput]);

  const addVideo = useCallback(() => {
    setContentInput("video");
  }, [contentInput]);

  const deletInput = useCallback(() => {
    setContentInput("");
  }, []);

  return (
    <section className={CnCreatePost()}>
      <Navbar />
      <div className={CnCreatePost("form")}>
        <div className={CnCreatePost("formMenu")}>
          <Button view="discard" textButton="Discard" />
          <h2>Create</h2>
          <Button view="publish" textButton="Publish" />
        </div>
        <div className={CnCreatePost("formInput")}>
          <img src={profilePhoto} alt="" />
          <Input
            name="postText"
            type="text"
            isInvalid={!!errors[initialFormData.postText]}
            value={values.postText}
            onChange={handleInputChange}
            errText={errors.postText}
            placeholder={placeholderFromInputName.postText}
            minLength={4}
            view="post"
            autoFocus
          />
        </div>
        {contentInput && (
          <div className={CnCreatePost("formInput_content")}>
            <Input
              name={contentInput}
              type="url"
              view="post"
              placeholder={
                contentInput === "image"
                  ? placeholderFromInputName.image
                  : placeholderFromInputName.video
              }
              autoFocus
            />
            <button onClick={deletInput}>
              <img src={deleteIcon} alt="delete" />
            </button>
          </div>
        )}

        <ContentMenu onClickImg={addImg} onClickVideo={addVideo} />
      </div>
    </section>
  );
};

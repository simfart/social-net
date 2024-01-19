import { FC, FormEvent, useCallback, useState } from "react";
import { Navbar } from "widgets/menu";
import { ContentMenu } from "./contentMenu";
import { useForm } from "shared/hooks";
import { deleteIcon } from "shared/images";
import { Button } from "../../shared/ui/button";
import { Input } from "../../shared/ui";

import { useNewPost } from "shared/hooks";

import "./CreatePost.scss";
import { cn } from "@bem-react/classname";
import { useUser } from "shared/hooks/useUser";

const CnCreatePost = cn("createPost");

const initialFormData = {
  description: "",
  image: "",
  video: "",
};

const placeholderFromInputName = {
  description: "What’s on your mind?",
  image: "Paste the URL of the image",
  video: "Paste the link to the video from YouTube",
};

export const CreatePost: FC = () => {
  const { values, isValid, errors, clearForm, handleInputChange } =
    useForm(initialFormData);

  const { mutate, isLoading } = useNewPost();
  const [contentInput, setContentInput] = useState<string>();

  const addImg = useCallback(() => {
    setContentInput("image");
  }, [contentInput]);

  const addVideo = useCallback(() => {
    setContentInput("video");
  }, [contentInput]);

  const deletInput = useCallback(() => {
    setContentInput("");
    values.image = "";
    values.video = "";
  }, [contentInput]);

  const { data: currentUser } = useUser();
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      mutate(values);
      clearForm();
    },
    [mutate, values, clearForm]
  );

  return (
    <section className={CnCreatePost()}>
      <Navbar />
      <form className={CnCreatePost("form")}>
        <div className={CnCreatePost("formMenu")}>
          <Button view="discard" textButton="Discard" />
          <h2>Create</h2>
          <Button
            onClick={handleSubmit}
            isInvalid={!isValid}
            view="publish"
            textButton="Publish"
          />
        </div>
        <div className={CnCreatePost("formInput")}>
          <img src={currentUser?.data.avatar} alt="" />
          <Input
            name="description"
            type="text"
            isInvalid={!!errors.description}
            value={values.description}
            onChange={handleInputChange}
            errText={errors.description}
            placeholder={placeholderFromInputName.description}
            minLength={4}
            view="post"
            autoFocus
          />
        </div>

        {(contentInput == "image" || contentInput == "video") && (
          <div className={CnCreatePost("formInput_content")}>
            <Input
              name={contentInput}
              type="url"
              view="post"
              isInvalid={!!errors[contentInput]}
              errText={errors[contentInput]}
              placeholder={placeholderFromInputName[contentInput]}
              value={values[contentInput]}
              onChange={handleInputChange}
              autoFocus
            />
            <button onClick={deletInput}>
              <img src={deleteIcon} alt="delete" />
            </button>
          </div>
        )}

        <ContentMenu onClickImg={addImg} onClickVideo={addVideo} />
      </form>
    </section>
  );
};

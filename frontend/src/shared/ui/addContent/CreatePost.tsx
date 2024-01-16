import { FC, useCallback, useState } from "react";
import { Navbar } from "widgets/menu";
import { ContentMenu } from "./content-menu";
import profilePhoto from "../../images/profile photo-to-del.jpg";
import { Button } from "../button";
import { Input } from "..";

import "./CreatePost.scss";
import { cn } from "@bem-react/classname";

const CnCreatePost = cn("createPost");

// createPost-form
// createPost-formMenu

export const CreatePost: FC = () => {
  const [contentInput, setContentInput] = useState<string>();

  const addImg = useCallback(() => {
    setContentInput("img");
  }, [contentInput]);

  const addVideo = useCallback(() => {
    setContentInput("img");
  }, [contentInput]);

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
            type="text"
            view="post"
            placeholder="What’s on your mind?"
            autoFocus
          />
        </div>
        {contentInput && (
          <div className={CnCreatePost("formInput")}>
            <input type="text" placeholder={contentInput} autoFocus />
            {/* <button onClick={handleDeleteInput}>Delete</button> */}
          </div>
        )}
        {/* {components.map((item) => (
          <div key={item.name} className={CnCreatePost("formInput")}>
            <div></div>
            <input type="text" placeholder={item.name} autoFocus />
            <button onClick={handleDeleteInput}>Delete</button>
          </div>
        ))} */}
        <ContentMenu onClickImg={addImg} onClickVideo={addVideo} />
      </div>
    </section>
  );
};

import { FC, useCallback, useState } from "react";
import { Navbar } from "widgets/menu";
import { ContentMenu } from "./content-menu";
import profilePhoto from "../../images/profile photo-to-del.jpg";

import "./CreatePost.scss";
import { cn } from "@bem-react/classname";

const CnCreatePost = cn('createPost')

// createPost-form
// createPost-formMenu


export const CreatePost: FC = () => {
  const [components, setComponents] = useState<{name: string}[]>([]);

  const addImg = useCallback(() => {
    setComponents([{ name: "photo" }]);
  }, []);

  const addVideo = useCallback(() => {
    setComponents([{ name: "video" }]);
  }, []);

  const handleDeleteInput = () => {
    setComponents([]);
  };

  return (
    <section className={CnCreatePost()}>
      <Navbar />
      <div className={CnCreatePost('form')}>
        <div className={CnCreatePost('formMenu')}>
          {/* <button className="create-form__btn__discard">Discard</button> -> <Button view="discard">Discard</Button>*/} 
          <h2>Create</h2>
          {/* <button className="create-form__btn__publish">Publish</button> -> <Button view="publish">Publish</Button> */}
        </div>
        <div className={CnCreatePost('formInput')}>
          <img src={profilePhoto} alt="" />
          {/* <input type="text" placeholder="What’s on your mind?" autoFocus /> -> <Input view="Какой то новый вид"/> */}
        </div>

        {components.map(
          (item) =>
            (
              <div key={item.name} className={CnCreatePost("formInput")}>
                <div></div>
                {/* <input type="text" placeholder={item.name} autoFocus /> */}
                <button onClick={handleDeleteInput}>Delete</button>
              </div>
            )
        )}
        <ContentMenu onClickImg={addImg} onClickVideo={addVideo} />
      </div>
    </section>
  );
};

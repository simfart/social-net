import { FC, useCallback, useState } from "react";
import { Navbar } from "widgets/menu";
import { ContentMenu } from "./content-menu";

import "./CreatePost.scss";
import profilePhoto from "../../images/profile photo-to-del.jpg";

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const CreatePost: FC = () => {
  const [components, setComponents] = useState<IInputProps[]>([]);

  const addImg = useCallback(() => {
    components.length < 1 && setComponents([...components, { name: "photo" }]);
  }, []);

  const addVideo = useCallback(() => {
    components.length < 1 && setComponents([...components, { name: "video" }]);
  }, []);

  const handleDeleteInput = () => {
    setComponents([]);
  };

  return (
    <section className="create-post">
      <Navbar />
      <form className="create-form">
        <div className="create-form__menu">
          <button className="create-form__btn__discard">Discard</button>
          <h2>Create</h2>
          <button className="create-form__btn__publish">Publish</button>
        </div>
        <div className="create-form__input">
          <img src={profilePhoto} alt="" />
          <input type="text" placeholder="What’s on your mind?" autoFocus />
        </div>

        {components.map(
          (item, i) =>
            components.length > 0 && (
              <div key={i} className="create-form__input">
                <div></div>
                <input type="text" placeholder={item.name} autoFocus />
                <button onClick={() => handleDeleteInput()}>Delete</button>
              </div>
            )
        )}
        <ContentMenu onClickImg={addImg} onClickVideo={addVideo} />
      </form>
    </section>
  );
};

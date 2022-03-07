import { PageBackground } from "components/PageBackground";
import CustomButton from "components/UI_KIT/CustomButton";
import { useCallback, useState } from "react";
import { Form } from "reactstrap";
import { ButtonTypes, IArtist } from "types";
import { FormField } from "components/UI_KIT/CustomForm/FormField";
import { useDispatch } from "react-redux";
import Actions from "redux/actions";
import { submitArtist } from "api/index";

export const ArtistForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");

  const [validation, setValidation] = useState("");
  const dispatch = useDispatch();
  const newToast = useCallback(
    (payload) => dispatch(Actions.UtilsActions.AddToast(payload)),
    [dispatch]
  );

  const isValid = () => {
    setValidation("");
    if (!name.length) {
      setValidation("Name is invalid");
      return false;
    } else if (!email.length) {
      setValidation("Email is invalid");
      return false;
    } else if (!bio.length) {
      setValidation("Bio is required");
      return false;
    } else if (!twitter.length) {
      setValidation("Twitter is invalid");
      return false;
    }
    return true;
  };

  const isButtonDisabled =
    !name.length || !email.length || !bio.length || !twitter.length
      ? true
      : false;

  const handleSubmit = async () => {
    if (isValid()) {
      const artist: IArtist = {
        name,
        email,
        bio,
        website,
        twitter_url: twitter,
        instagram_url: instagram,
      };
      try {
        const res = await submitArtist(artist);
        if (res.status === 200) {
          newToast({
            message: "Artist created successfully",
            type: "success",
          });
        }
      } catch (e: any) {
        newToast({ text: e.message, type: "error" });
      }
    }
  };

  return (
    <PageBackground background={false}>
      <h2>Artist Submission</h2>
      <Form className="form" onSubmit={handleSubmit}>
        <p
          style={{ textAlign: "right", fontStyle: "italic", fontSize: ".8rem" }}
        >
          Fields with * are required
        </p>
        <FormField type="name" onChange={setName} />
        <FormField type="email" onChange={setEmail} />
        <FormField type="twitter" onChange={setTwitter} />
        <FormField type="instagram" onChange={setInstagram} required={false} />
        <FormField type="website" onChange={setWebsite} required={false} />
        <FormField type="textarea" onChange={setBio} />

        <CustomButton
          type={ButtonTypes.secondary}
          text="Submit"
          onClick={handleSubmit}
          style={{ marginTop: "20px" }}
          disabled={isButtonDisabled}
        />
      </Form>
      <h5 style={{ color: "red" }}>{validation}</h5>
    </PageBackground>
  );
};

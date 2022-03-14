import CustomButton from "components/UI_KIT/CustomButton";
import { useCallback, useState } from "react";
import { Form } from "reactstrap";
import { ButtonTypes, IArtist } from "types";
import { FormField } from "components/UI_KIT/CustomForm/FormField";
import { useDispatch } from "react-redux";
import Actions from "redux/actions";
import { submitArtist } from "apis/index";
import { validators } from "utils/formValidators";
import { FlexView } from "components/UI_KIT/Display";
import LoadingModal from "components/LoadingModal";
import { useNavigate } from "react-router-dom";

export const ArtistForm = () => {
  const getInitialValue = (type: string) => {
    const saved = localStorage.getItem('form-' + type);
    return saved?.length ? saved : '';
  }
  const navigate = useNavigate();

  const [name, setName] = useState(() => getInitialValue("name"));
  const [email, setEmail] = useState(() => getInitialValue("email"));
  const [bio, setBio] = useState(() => getInitialValue("textarea"));
  const [website, setWebsite] = useState(() => getInitialValue("website"));
  const [twitter, setTwitter] = useState(() => getInitialValue("twitter"));
  const [instagram, setInstagram] = useState(() => getInitialValue("instagram"));

  const [loading, setLoading] = useState(false);

  const [validation, setValidation] = useState("");
  const dispatch = useDispatch();
  const newToast = useCallback(
    (payload) => dispatch(Actions.UtilsActions.AddToast(payload)),
    [dispatch]
  );


  const isValid = () => {
    setValidation("");
    if (!validators.lengthValidator(name, 3)) {
      setValidation("Name is invalid");
      return false;
    } else if (!validators.emailValidator(email)) {
      setValidation("Email is invalid");
      return false;
    } else if (!validators.lengthValidator(bio)) {
      setValidation("Bio is required");
      return false;
    } else if (!validators.urlValidator(twitter, "twitter")) {
      setValidation("Twitter is invalid");
      return false;
    } else if (
      instagram.length &&
      !validators.urlValidator(instagram, "instagram")
    ) {
      setValidation("Instagram is invalid");
      return false;
    } else if (website.length && !validators.urlValidator(website)) {
      setValidation("Website is invalid, please include http://");
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
        setLoading(true);
        await submitArtist(artist);
        setLoading(false);
        newToast({
          text: "Thank you for your application. Our team will review your profile and will reach out if it meets our requirements.",
          type: "success",
          time: 5000
        });
        clearState();
        navigate('/');
      } catch (e: any) {
        setLoading(false);
        newToast({ text: "Oops, something went wrong!", type: "error" });
      }
    }
  };

  const clearState = () => {
    setName("");
    setEmail("");
    setBio("");
    setWebsite("");
    setTwitter("");
    setInstagram("");
    localStorage.setItem('form-name', '');
    localStorage.setItem('form-email', '');
    localStorage.setItem('form-textarea', '');
    localStorage.setItem('form-website', '');
    localStorage.setItem('form-twitter', '');
    localStorage.setItem('form-instagram', '');
  };

  return (
    <FlexView isTop column>
      <h2 style = {{ textAlign:'center' }}>Artist Application</h2>
      <Form className="form" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '900px',
        flexDirection: 'column',
      }} onSubmit={handleSubmit}>
        <p
          style={{ alignSelf: "flex-end", fontStyle: "italic", fontSize: ".8rem" }}
        >
          Fields with * are required
        </p>
        <FormField value={name} type="name" onChange={setName} />
        <FormField value={email} type="email" onChange={setEmail} />
        <FormField value={twitter} type="twitter" onChange={setTwitter} />
        <FormField value={instagram} type="instagram" onChange={setInstagram} required={false} />
        <FormField value={website} type="website" onChange={setWebsite} required={false} />
        <FormField value={bio} type="textarea" onChange={setBio} />

        <CustomButton
          type={ButtonTypes.secondary}
          text="Submit"
          onClick={handleSubmit}
          style={{ marginTop: "20px" }}
          disabled={isButtonDisabled}
        />
      </Form>
      <h5 style={{ color: "red" }}>{validation}</h5>
      {loading && <LoadingModal />}
    </FlexView>
  );
};

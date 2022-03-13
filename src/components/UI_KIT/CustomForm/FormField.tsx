import { FormGroup, Input, Label } from "reactstrap";

interface FormFieldProps {
  type: string;
  required?: boolean;
  onChange: (event: string) => void;
  value: string;
}

export function FormField({ required = true, onChange, type, value }: FormFieldProps) {
  const updateValue = (value: string) => {
    localStorage.setItem('form-'+type, value);
    onChange(value);
  };
  
  const FormField = () => {
    switch (type) {
      case "name":
        return (
          <>
            <Label>Name *</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={value}
              placeholder="John Doe"
              required={required}
              onChange={(e) => updateValue(e.target.value)}
            />
          </>
        );
      case "email":
        return (
          <>
            <Label>Email *</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={value}
              placeholder="john.doe@gmail.com"
              required={required}
              onChange={(e) => updateValue(e.target.value)}
            />
          </>
        );
      case "twitter":
      case "instagram":
      case "website":
        return (
          <>
            <Label aria-required={true}>
              {type === "website"
                ? "Website" //@ts-ignore
                : type.charAt(0).toUpperCase() +
                  type.slice(1) +
                  ` URL ${required ? "*" : ""}`}
            </Label>
            <Input
              type="text"
              name={type}
              value={value}
              id={type}
              required={required}
              onChange={(e) => updateValue(e.target.value)}
              placeholder={
                type === "website"
                  ? "https://www.john-doe.com"
                  : type === "instagram"
                  ? "https://instagram.com/JohnDoe"
                  : "https://twitter.com/JohnDoe"
              }
            />
          </>
        );
      case "textarea":
        return (
          <>
            <Label>Bio *</Label>
            <Input
              value={value}
              type="textarea"
              name={type}
              id={type}
              required={required}
              onChange={(e) => updateValue(e.target.value)}
              placeholder="Tell us about yourself"
            />
          </>
        );
      default:
        return;
    }
  };
  return (
    <FormGroup style={{ textAlign: "left", marginBottom: "2rem", width: '100%' }}>
      {FormField()}
    </FormGroup>
  );
}

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactForm: React.FC = () => {
  const formFields = [
    { name: "name", label: "First & Last name", type: "text", required: true },
    { name: "email", label: "Email address", type: "email", required: true },
    { name: "phone", label: "Phone number", type: "tel", required: true },
    {
      name: "message",
      label: "Write your message",
      type: "textarea",
      required: true,
    },
  ];

  const { handleSubmit } = useForm({ mode: "onChange" });

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Message, setMessage] = useState("");
  const [FormAlert, setFormAlert] = useState("");

  const SendEmail = async () => {
    console.log("Send Email");
    const params = { Name: Name, Email: Email, Phone: Phone, Message: Message };

    if (!Name) {
      setFormAlert("<div class='ErrorAlert'>Please enter name </div>");
      return false;
    }
    if (!Email) {
      setFormAlert("<div class='ErrorAlert'>Please enter email </div>");
      return false;
    }
    if (!Phone) {
      setFormAlert("<div class='ErrorAlert'>Please enter phone </div>");
      return false;
    }
    if (!Message) {
      setFormAlert("<div class='ErrorAlert'>Please enter message </div>");
      return false;
    }

    console.log("Contact form submission ===");
    console.log(params);

    try {
      //Try content
      const res = await axios.post(
        "https://godark.sadaynaal.com/contactUs.php",
        params
      );
      // const message = res.data
      console.log(res.data.response);
      console.log(params);
      if (res.data.response == "success") {
        setFormAlert(
          "<div class='SuccessAlert'>Message sent successfully </div>"
        );
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setTimeout(() => {
          setFormAlert("");
        }, 7000);
      } else {
        setFormAlert(
          "<div class='ErrorAlert'>Unable to proceed with your request </div>"
        );
      }
    } catch (e) {
      console.log(e);
      setFormAlert(
        "<div class='ErrorAlert'>Unable to proceed with your request </div>"
      );
      setTimeout(() => {
        setFormAlert("");
      }, 7000);
    }
  };

  return (
    <form onSubmit={handleSubmit(SendEmail)} className="contact-form">
      {formFields.map((field) => (
        <div key={field.name} className="form-field">
          <label htmlFor={field.name} className="visually-hidden">
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              placeholder={field.label}
              aria-label={field.label}
              required={field.required}
              onChange={(e) => {
                if (field.name == "message") {
                  setMessage(e.currentTarget.value);
                }
                // console.log(e.currentTarget.value);
              }}
            />
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              onChange={(e) => {
                if (field.name == "name") {
                  setName(e.currentTarget.value);
                } else if (field.name == "email") {
                  setEmail(e.currentTarget.value);
                } else if (field.name == "phone") {
                  setPhone(e.currentTarget.value);
                }
                // console.log(e.currentTarget.value);
              }}
              placeholder={field.label}
              aria-label={field.label}
              required={field.required}
            />
          )}
        </div>
      ))}

      <div className="button-wrapper">
        <div className="button-container">
          <button className="send-button" onClick={SendEmail}>
            <span className="button-text">Send Message</span>
          </button>
          <div dangerouslySetInnerHTML={{ __html: FormAlert }}></div>
        </div>
      </div>

      <style jsx>{`
        .contact-form {
          display: flex;
          margin-top: 27px;
          width: 100%;
          flex-direction: column;
          font-size: 18px;
          color: #95979e;
          font-weight: 300;
          letter-spacing: -0.36px;
          line-height: 1;
          justify-content: flex-start;
        }
        .form-field {
          margin-top: 23px;
        }
        .form-field:first-child {
          margin-top: 0;
        }
        input,
        textarea {
          width: 100%;
          padding: 18px 23px;
          border: 1px solid #373737;
          background-color: transparent;
          color: #95979e;
          font-size: 18px;
          font-weight: 300;
          letter-spacing: -0.36px;
        }
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        @media (max-width: 991px) {
          .contact-form {
            max-width: 100%;
          }
          input,
          textarea {
            padding: 18px 20px;
          }
        }

        .button-wrapper {
          display: flex;
          margin-top: 27px;
          width: 331px;
          max-width: 100%;
          flex-direction: column;
          align-items: flex-start;
          margin: 15px auto;
        }
        .button-container {
          border-radius: 11999px;
          background-color: transparent;
          z-index: 10;
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          padding: 7px 6px;
        }
        .send-button {
          border-radius: 11999px;
          background-color: #d1d1d1;
          box-shadow: 10px 0 5px #ff5100;
          position: relative;
          display: flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          padding: 13px 61px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          cursor: pointer;
          overflow: hidden;
        }
        .button-text {
          z-index: 0;
          font-size: 14px;
          color: #5a250a;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: -0.22px;
        }
        @media (max-width: 991px) {
          .button-wrapper {
            padding-right: 20px;
          }
          .send-button {
            padding: 13px 20px;
          }
        }
      `}</style>
    </form>
  );
};

export default ContactForm;

import Button from "../Button/Button";
import styles from "./FormSection.module.css";
import { MdMessage, MdMail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { useState } from "react";

const FormSection = () => {
  const [name, setName] = useState("Dheeraj");
  const [email, setEmail] = useState("dheeraj@gmail.com");
  const [message, setMessage] = useState(
    "checking and testing how to work useState hooks "
  );
  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setMessage(event.target[2].value);
  };

  return (
    <section className={styles.containor}>
      <div className={styles.sec_conatiner}>
        <div className={styles.tob_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={24} />} />
          <Button text="VIA CALL" icon={<BiSolidPhoneCall fontSize={24} />} />
        </div>
        <Button
          outLine={true}
          text="VIA EMAIL FORM"
          icon={<MdMail fontSize={24} />}
        />
        <form onSubmit={onSubmit}>
          {/* Fix: Pass the function reference without invoking it */}
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">E-mail</label>{" "}
            {/* Fix: Corrected htmlFor value */}
            <input type="email" id="email" /> {/* Fix: Added id attribute */}
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea
              className={styles.textarea}
              id="text"
              name="text"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button className={styles.sub_button}>Submit</button>{" "}
          </div>
          <div>
            <div>{"Name: " + name}</div>
            <div>{"Email: " + email}</div>
            <div>{"Message: " + message}</div>
          </div>
        </form>
      </div>
      <div className={styles.serviceImg}>
        <img src="images/Service 24_7-pana 1.svg" alt="24*7" />
      </div>
    </section>
  );
};

export default FormSection;

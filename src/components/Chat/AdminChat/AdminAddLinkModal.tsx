import React, { ChangeEvent, useState } from "react";
import * as Styled from "../../../styles/Chat/ChatInputForm.styled";
import { urlPattern } from "../../../consts";

interface LinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (link: string, text: string) => void;
}

const LinkModal: React.FC<LinkModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [link, setLink] = useState("");
  const [isValidLink, setIsValidlink] = useState(true);
  const [text, setText] = useState("");

  if (!isOpen) return null;

  const handleLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.match(urlPattern)) {
      setIsValidlink(true);
    } else {
      setIsValidlink(false);
    }

    setLink(inputValue);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(link, text);
    onClose();
  };

  return (
    <Styled.LinkModal className="overlay">
      <div className="modal">
        <h3>Insert Link</h3>
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="link">Link</label>
            <input
              type="url"
              id="link"
              value={link}
              onChange={handleLinkChange}
              required
              className="input"
              style={{
                borderColor: isValidLink ? "black" : "red",
              }}
            />
            {!isValidLink && (
              <p style={{ color: "red" }}>Please enter a valid URL.</p>
            )}
          </div>
          <div className="inputGroup">
            <label htmlFor="text">Text (Optional)</label>
            <input
              type="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="input"
            />
          </div>
          <button
            type="submit"
            className="submitButton"
            disabled={!isValidLink}
          >
            Submit
          </button>
          <button type="button" onClick={onClose} className="closeButton">
            Close
          </button>
        </form>
      </div>
    </Styled.LinkModal>
  );
};

export default LinkModal;

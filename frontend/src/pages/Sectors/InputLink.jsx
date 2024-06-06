import "../../styles/inputLink.css";
import "../../styles/loading.css";

export default function InputLink({
  link,
  LinkInput,
  HandleEnter,
  ShortenLink,
}) {
  return (
    <div className="input-link">
      {/* Input field for entering the link */}
      <input
        type="text"
        id="inputLink"
        autoComplete="off"
        placeholder="Your link"
        value={link} // Set the value of the input to the link state
        onChange={LinkInput} // Call LinkInput function when the input value changes
        onKeyUp={HandleEnter} // Call HandleEnter function when a key is released
      />

      {/* Button to shorten the link */}
      <button
        type="submit"
        onClick={ShortenLink} // Call ShortenLink function when the button is clicked
        data-testid="narrow" // Data attribute for testing
        aria-label="Narrow Link" // ARIA label for accessibility
      >
        Shorten
        {/* // Button text */}
      </button>
    </div>
  );
}

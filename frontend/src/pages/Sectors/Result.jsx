import "../../styles/result.css";
import "../../styles/loading.css";

export default function Result(props) {
  // Destructure props to get narrowLink and isValid
  const { narrowLink, isValid } = props;

  // Function to copy the shortened link to the clipboard
  function CopyShortenedLink() {
    // Copy the narrowLink to the clipboard
    navigator.clipboard.writeText(narrowLink);

    // Get the icon element
    const iconCopy = document.getElementById("iconCopy");

    // Change the icon to indicate success
    iconCopy.classList.remove("ri-file-copy-line");
    iconCopy.classList.add("ri-checkbox-circle-fill");

    // Revert the icon back to the original after 1 second
    setTimeout(() => {
      iconCopy.classList.remove("ri-checkbox-circle-fill");
      iconCopy.classList.add("ri-file-copy-line");
    }, 500);
  }

  return (
    <section className="result">
      <div className="container-result">
        <div className="container-itms-result">
          <section className="container-valid-result">
            <span>
              {isValid
                ? "The link was successfully shortened!" // Display success message if valid
                : "There was a problem, please try again."}{" "}
              {/* // Display error message if not valid */}
            </span>
          </section>

          {isValid && (
            <>
              {/* Display the shortened link if it is valid */}
              <section className="result-your-link">
                <span>Your link:</span>
                <div onClick={CopyShortenedLink} className="container-copy-link">
                  <h2>
                    {narrowLink}
                    {/* Icon for copying the link */}
                  </h2>
                  <i
                    id="iconCopy"
                    class="ri-file-copy-line transition-icon-copy"
                  ></i>
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

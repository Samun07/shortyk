import { useState, useEffect } from "react";
import InputLink from "./Sectors/InputLink";
import Result from "./Sectors/Result";
import "../styles/index.css";
import "../styles/loading.css";
import mainImg from "../assets/www-bro.svg";

export default function Index() {
  // State variables
  const [link, setLink] = useState("");
  const [narrowLink, setNarrowLink] = useState("");
  const [status, setStatus] = useState("idle");
  const [validLink, setValidLink] = useState(true);

  // Function to handle link input change
  function LinkInput(element) {
    setLink(element.target.value);
  }

  // Function to handle Enter key press
  function HandleEnter(e) {
    if (e.keyCode === 13) {
      ShortenLink();
    }
  }

  // Function to shorten the link
  async function ShortenLink(e) {
    setStatus("loading"); // Set status to loading

    // Function to validate the link
    const isValidLink = (link) => {
      let linkCheck = new RegExp(
        "^(https?:\\/\\/)?" +
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
          "((\\d{1,3}\\.){3}\\d{1,3}))" +
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
          "(\\?[;&a-z\\d%_.~+=-]*)?" +
          "(\\#[-a-z\\d_]*)?$",
        "i"
      );
      return !!linkCheck.test(link);
    };

    // Check if the link is valid
    if (!isValidLink(link)) {
      setValidLink(false);
      setStatus("done"); // Set status to done if link is not valid
    } else {
      // Fetch API to shorten the link
      const response = await fetch(

        //LocalHost URL
        // "http://localhost:3000/api/link/narrowlink/",

        //Public URL
        "https://shortyk-backend.vercel.app/api/link/narrowlink/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            originalLink: !link.startsWith("https://")
              ? "https://" + link
              : link,
          }),
        }
      );

      const jsonResponse = await response.json();
      console.log(jsonResponse.originalLink, jsonResponse.shortLink);
      setLink(link);
      setNarrowLink(jsonResponse.shortLink);
      setStatus("done"); // Set status to done after shortening the link
      setValidLink("true");
    }
  }

  // Use useEffect to add the event listener after the component mounts
  useEffect(() => {
    // Add event listener for smooth scrolling
    const scrollInputLink = document.getElementById("scrollInputLink");
    if (scrollInputLink) {
      scrollInputLink.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default link behavior
        document
          .querySelector(scrollInputLink.getAttribute("href"))
          .scrollIntoView({
            behavior: "smooth", // Smooth scrolling
            block: "center",
          });
      });
    }
  }, []); // Empty dependency array ensures this runs once after mount

  return (
    <>
      {/* Main container */}
      <section className="main-container">
        <div className="main-container-left">
          <div className="main-texts-left">
            <h1>Streamline Links, Welcome Aboard!</h1>
            <p>
              Welcome to our link shortening platform! Easily transform lengthy
              URLs into concise links to enhance accessibility and shareability.
              Streamline your online presence with our intuitive service. Start
              shortening links today for efficient communication and seamless
              sharing across all platforms. Join us and experience the
              convenience of shortened links.
            </p>
            <a id="scrollInputLink" href="#inputLink">
              <button>Start Now</button>
            </a>
          </div>
        </div>

        <section className="main-container-right">
          <div className="main-img-right">
            <img src={mainImg} alt="main-image" />
          </div>
        </section>
      </section>

      {/* Input link container */}
      <section id="inputLink" className="input-link-container">
        <section className="input-link-container-left">
          <div className="input-link-title">
            <h1>Shorten Your Links Here</h1>
            <p>
              Get concise URLs instantly. Simplify sharing and boost engagement
              with our link shortening tool.
            </p>
          </div>

          <InputLink
            link={link}
            LinkInput={LinkInput}
            HandleEnter={HandleEnter}
            ShortenLink={ShortenLink}
          />

          {/* Conditional rendering based on status */}
          {status === "idle" && (
            <div className="container-main-description">
              <div>
                <p>Enter the link you want to shorten.</p>
              </div>
            </div>
          )}
          {status === "loading" && (
            <div className="loading-process">
              <i className="ri-loader-4-line"></i>
              <h1>Loading...</h1>
            </div>
          )}

          {status === "done" && (
            <Result narrowLink={narrowLink} isValid={validLink} />
          )}
        </section>

        <section className="input-link-container-right">
          <div className="utility-list-title">
            <i className="ri-list-check"></i>
            <h2>Utilities</h2>
          </div>
          <section className="utility-list">
            <div className="text-utility-list">
              <i className="ri-check-line"></i>
              <span>Enhanced Shareability</span>
            </div>

            <div className="text-utility-list">
              <i className="ri-check-line"></i>
              <span>Analytics Insights</span>
            </div>

            <div className="text-utility-list">
              <i className="ri-check-line"></i>
              <span>Custom Branding</span>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

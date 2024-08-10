import { useState } from "react";
import "../Userstyles/BookEvent.css";
import book from "../Userasset/tech1.jpg";
function BookEvent() {
    const faqData = [
        { question: "Our Experience?", answer: "Blaaa Blaaa Blaaa" },
        { question: "Our Uniqueness?", answer: "Blaaa Blaaa Blaaa" },
        { question: "Our Commitments?", answer: "Blaaa Blaaa Blaaa" },
    ];
    const [openIndex, setOpenIndex] = useState(null);
    const toggleAnswer = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <div className="book-page">
        <div className="book-img">
            <h2>
            The all-in-one ticketing and discovery platform trusted by millions of
            organizers and attendees worldwide
            </h2>
            <br />
            <center>
            <p style={{ color: "white" }}>
                Easily create and manage events on a platform that attendees love
                and trust
            </p>
            </center>
        </div>
        <br />
        <div className="welcome-note">
            <h1>
            {" "}
            Bringing the business world <br />
            together through live experiences
            </h1>
            <h4>
            Eventbrite is the industry-leading ticketing and marketing solution
            for corporate events <br />— with built-in tools for conferences,
            workshops, networking events, and more.
            </h4>
        </div>
        <div className="book-card">
            <div className="card-item">
            <h1>Effortlessly create corporate events</h1>
            <h3>
                Provide a professional, seamless experience for your attendees at
                every stage of your conferences, webinars, networking events, and
                more.
            </h3>
            <a href="">Learn more</a>
            </div>
            <div className="card-item">
            <h1>Effortlessly create corporate events</h1>
            <h3>
                Provide a professional, seamless experience for your attendees at
                every stage of your conferences, webinars, networking events, and
                more.
            </h3>
            <a href="">Learn more</a>
            </div>
            <div className="card-item">
            <h1>Effortlessly create corporate events</h1>
            <h3>
                Provide a professional, seamless experience for your attendees at
                every stage of your conferences, webinars, networking events, and
                more.
            </h3>
            <a href="">Learn more</a>
            </div>
        </div>
        <div className="faq-box">
            <div className="faq-text">
            <h1>Frequently Asked Questions</h1>
            </div>
            <div className="faq-container">
            {faqData.map((faq, index) => (
                <div key={index} className="faq-item">
                <div
                    className={`faq-question ${openIndex === index ? "open" : ""}`}
                    onClick={() => toggleAnswer(index)}
                >
                    {faq.question}
                </div>
                {openIndex === index && (
                    <div className="faq-answer">{faq.answer}</div>
                )}
                </div>
            ))}
            </div>
        </div>
        <div className="simplify">
            <div className="simplify-left">
            <h1>Simplify virtual events with our faster Zoom integration</h1>
            <p>
                Our faster-than-ever integration will drastically shorten the time
                it takes to connect your virtual events to Zoom. It will also allow
                you to seamlessly create and edit Zoom meetings and webinars
                directly within the Eventbrite platform. Spend more time bringing
                your online experience to life, and less time with manual workflows
                and troubleshooting.
            </p>
            <button>Learn More</button>
            </div>
            <div className="simplify-right">
            <img src={book} height={300} width={500} />
            </div>
        </div>
        </div>
    );
}
export default BookEvent;
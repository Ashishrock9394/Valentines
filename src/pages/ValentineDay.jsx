import GiftBox from "../components/GiftBox";
import Footer from "../components/Footer";

export default function ValentineDay() {
    const name = "Your Name";
    return (
        <div className="page">
            <h1>Happy Valentine’s Day, {name} ❤️</h1>
            <p>You are my today and all my tomorrows</p>
            <GiftBox />
            <button
                className="share-btn"
                onClick={() =>
                    navigator.share({
                    title: "Valentine Surprise ❤️",
                    text: "I made something special for you 💖",
                    url: window.location.href,
                    })
                }
                >
                💌 Share This
            </button>
            <Footer />
        </div>
    );
}

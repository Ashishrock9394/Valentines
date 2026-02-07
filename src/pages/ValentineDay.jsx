import GiftBox from "../components/GiftBox";
import Footer from "../components/Footer";

export default function ValentineDay() {
    const name = "My Love"; // You can replace this with a dynamic name if needed
    return (
        <div className="page">
            <h1>Happy Valentine’s Day, {name} ❤️</h1>
            <p>You are my today and all my tomorrows</p>
            <GiftBox />
            <Footer />
        </div>
    );
}

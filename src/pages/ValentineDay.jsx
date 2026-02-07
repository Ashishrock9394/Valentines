import GiftBox from "../components/GiftBox";
import Footer from "../components/Footer";

export default function ValentineDay() {
    const DEFAULT_NAME = 'My Love';
    const FIXED_NAMES = ['ashish', 'Pooja']; // edit this list to change allowed names

    let name = DEFAULT_NAME;
    try {
        const params = new URLSearchParams(window.location.search);
        const raw = params.get('name');
        if (raw) {
            const normalized = raw.trim().toLowerCase();
            if (FIXED_NAMES.includes(normalized)) {
                // Capitalize first letter for display
                name = normalized.charAt(0).toUpperCase() + normalized.slice(1);
            }
        }
    } catch (e) {
        // keep default if URLSearchParams isn't available for some reason
    }

    return (
        <div className="page">
            <h1>Happy Valentine’s Day, {name} ❤️</h1>
            <p>You are my today and all my tomorrows</p>
            <GiftBox />
            <Footer />
        </div>
    );
}

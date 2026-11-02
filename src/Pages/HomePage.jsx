import { Header } from '../components/Header';
import { OffersBan } from '../components/OffersBan';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { BodyComponent } from '../components/BodyComponent';

export const HomePage = () => {
    return (
        <div style={{ paddingTop: '70px' }}>
            <Header />
            <OffersBan />
            <HeroSection />
            <BodyComponent />
            <Footer />
        </div>
    )
}
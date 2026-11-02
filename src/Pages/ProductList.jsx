import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CommonHeroAllPages } from '../components/CommonHeroAllPages';
import { useParams } from 'react-router-dom';


export const ProductList = () => {
    const { category } = useParams();
    console.log(category);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', paddingTop: '70px' }}>
            <Header />
            <main style={{ flex: 1 }}>
                <CommonHeroAllPages 
                    pagePath={`Home / Products / ${category.charAt(0).toUpperCase() + category.slice(1)}`}
                    headerOne={category.charAt(0).toUpperCase() + category.slice(1)}
                    Headertwo="Discover over 4,800 handpicked styles from effortless <br/> 
                                casuals to red-carpet glamour. New arrivals added every <br/> 
                                Monday."
                    pageKey={category}
                />
            </main>
            <Footer />
        </div>
    )
}
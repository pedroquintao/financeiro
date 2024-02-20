import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer";
import { Container } from "react-grid-system";

const BaseLayout = () => {
    return (
        <div>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </div>
    )

}

export default BaseLayout;
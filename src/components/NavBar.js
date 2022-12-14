import { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
// import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";

const navVariant = {
    hidden: { opacity: 0, right: "-100vh" },
    visible: { opacity: 1, right: 0, transition: { delay: 0.2 } },
};

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        // <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <motion.div
                        variants={navVariant}
                        initial="hidden"
                        animate="visible"
                        style={{ position: "relative" }}
                    >
                        <Navbar.Brand href="/">
                            {/* <img src={logo} alt="Logo" className="logo" /> */}
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <span className="logo">JAY PATEL</span>
                            </motion.div>
                        </Navbar.Brand>
                    </motion.div>
                </Container>
            </Navbar>
        // </Router>
    );
};

export default NavBar;

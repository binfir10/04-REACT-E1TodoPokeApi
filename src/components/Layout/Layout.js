import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
    return (

            <>
            <Navbar />
            <main className="grow">
            {children}

            </main>
            </>

    );
}

export default Layout;

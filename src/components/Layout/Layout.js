import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
    return (

            <>
            <Navbar />
            <main className="grow px-4">
            {children}

            </main>
            </>

    );
}

export default Layout;

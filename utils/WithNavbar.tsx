import { Navbar } from "@/components/Navbar";
import { JSX } from "react";

const WithNavbar = (Component: any) => {

    return (props: any) => (
        <div >
            <Navbar />
            <main>
                <Component {...props} />
            </main>
        </div>
    );
};

export default WithNavbar;
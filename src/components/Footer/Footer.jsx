import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer footer-center bg-base-300 text-base-content p-4 pb-6 text-center bg-purple-800 rounded-sm text-white text-xl">
                <aside>
                    <p>Copyright © ${new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;
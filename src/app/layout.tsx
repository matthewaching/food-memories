import { Metadata } from 'next';
import NavBar from '../components/NavBar';
import Provider from './provider';

export const metadata: Metadata = {
    title: 'Matt&apos;s Food App',
    description: 'Food Memories Journal and Random Recipe Generator',
    manifest: '/manifest.json',
    other: {
        themeColor: '#000000'
    }
};

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <NavBar />
                    {children}
                </Provider>
            </body>
        </html>
    );
}

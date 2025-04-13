import './globals.css';

export const metadata = {
  title: 'Easter Creche',
  description: 'A fun drag and drop easter creche for kids.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "Carl Mathew L. Replan | Software Developer",
  description: "Portfolio of Carl Mathew L. Replan",
  openGraph: {
    title: "Carl Mathew L. Replan | Software Developer",
    description: "Portfolio of Carl Mathew L. Replan",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

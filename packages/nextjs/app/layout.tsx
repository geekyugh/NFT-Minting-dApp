import "@rainbow-me/rainbowkit/styles.css";
import { Metadata } from "next";
import { NFTAppWithProviders } from "~~/components/NFTAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";

// Replace baseUrl with your website's url if using a custom domain
const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:3000`;
const imageUrl = `${baseUrl}/thumbnail.jpg`;

const title = "The Robotz Collection";
const titleTemplate = "%s | The Robotz Collection";
const description = "The Official NFT Shop.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: title,
    template: titleTemplate,
  },
  description,
  openGraph: {
    title: {
      default: title,
      template: titleTemplate,
    },
    description,
    images: [
      {
        url: imageUrl,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: imageUrl,
      },
    ],
    title: {
      default: title,
      template: titleTemplate,
    },
    description,
  },
  icons: {
    icon: [{ url: "/favicon.png", sizes: "32x32", type: "image/png" }],
  },
};

const NFTApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem>
          <NFTAppWithProviders>{children}</NFTAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default NFTApp;

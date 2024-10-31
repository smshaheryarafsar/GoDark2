import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FavIcon from "./favicon.ico";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GoDark - Landing Page",
  description: "Theme drafted by GoDark",
};

const ClashDisplayVariable = localFont({
  src: "./fonts/ClashDisplay-Variable.woff",
  variable: "--font-clash-display-variable",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={FavIcon.src} type="image/png" sizes="32x32" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ClashDisplayVariable.variable} `}
      >
        {children}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.0/gsap.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                      let FollowBox = "#Wrap .FollowBox";
                      gsap.set(FollowBox, {
                        xPercent: 50,
                        yPercent: 0,
                        transformOrigin: 'center',
                        scale: 1
                      });

                      let initialMouseMove = true
                      let mouseMoved = 0
                      let timer

                      window.addEventListener("mousemove", (e) => {
                        // if it's the first mouse movement run this
                        if (initialMouseMove) {
                          // it's not the first mouse move anymore, 
                          // so we won't run this again 
                          initialMouseMove = false
                          
                          gsap.to(FollowBox, {
                            scale: 1,
                            stagger: 0.02,
                            ease: 'sine.out'
                          })
                        }
                        
                        // clear the timer every time the mouse moves
                        clearTimeout(timer);
                        // set a timer for 0.1 second 
                        timer = setTimeout(mouseStopped,10);
                        
                        function mouseStopped() {
                          console.log('stopped')
                          
                          // reset this variable 
                          // so we can track the first mouse move again
                          initialMouseMove = true
                          
                          gsap.to(FollowBox, {
                            scale: 1,
                            stagger: 0.02,
                            ease: 'sine.out'
                          })
                        }
                        
                        gsap.to(FollowBox, {
                          duration: 0.5,
                          overwrite: "auto",
                          x: e.clientX - 220,
                          y: e.clientY - 350,
                          stagger: 0.2,
                          ease: "none"
                        });
                      });
                  `,
          }}
        ></script>
      </body>
    </html>
  );
}

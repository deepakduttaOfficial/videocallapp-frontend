import { ContextProvider } from "@/socketio/SocketContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

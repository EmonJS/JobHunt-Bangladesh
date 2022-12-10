import Head from "next/head";
import CandidatesList from "../components/CandidatesList";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HireAndApply from "../components/HireAndApply";
import JobsList from "../components/JobsList";
import Newsletter from "../components/Newsletter";
import Navbar from "../components/Utilities/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home || Job Hunt - Bangladesh</title>
        <meta
          name="description"
          content="Job Hunt - Bangladesh || This Website is for job seekers in Bangladesh"
        />
        <meta
          property="og:image"
          content="https://jobhunt-bangladesh.vercel.app/media/img/JobHunt.png"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <header>
        <Navbar />
        <Header />
      </header>
      
      <main>
        <JobsList />
        <CandidatesList />
        <HireAndApply />
        <Newsletter />
      </main>
      
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import MovieDashboard from "@/components/MovieDashboard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LogoutButton from "@/components/LogoutButton";

export default async function () {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main>
      {user ? (
        <div>
          <div className="container mx-auto p-4 bg-black">
            <h1 className="text-emerald-300 text-5xl">
              Hello !!, {user?.email}
            </h1>
            <h2 className="text-emerald-300 text-3xl">
              {" "}
              Welcome to your dashboard
            </h2>
            <p className="text-white text-lg">
              <br />
              We're thrilled to have you join us on this cinematic journey. In a
              world where entertainment options are limitless, we've curated a
              one-stop destination for all your movie needs. Whether you're a
              seasoned cinephile or just looking for a casual movie night, our
              Movie Dashboard is designed to cater to your every film-related
              whim.
            </p>
            <br />
            <br />
            <h3 className="text-emerald-300 text-2xl">
              Explore the World of Cinema
            </h3>
            <p className="text-white text-lg">
              Movies have the incredible power to transport us to different
              worlds, evoke a myriad of emotions, and spark conversations that
              last long after the credits roll. Our Movie Dashboard is your
              gateway to this enchanting realm of storytelling. With a vast and
              diverse selection of films, you can embark on adventures, explore
              far-off galaxies, or dive deep into compelling human dramas—all
              from the comfort of your home.
            </p>
            <br />
            <br />
            <h3 className="text-emerald-300 text-2xl">
              Your Personalized Movie Experience
            </h3>
            <p className="text-white text-lg">
              Stay up-to-date with the latest happenings in the world of cinema.
              From release dates and trailers to reviews and behind-the-scenes
              insights, our Movie Dashboard keeps you well-informed. We also
              provide access to a treasure trove of movie trivia, so you can
              impress your friends with your newfound knowledge.
            </p>

            <div className="bg-black mt-10">
              <form action="/auth/logout" method="post">
                <button className="text-white p-5 border border-white">
                  Log Out
                </button>
              </form>
            </div>
          </div>

          <MovieDashboard />
        </div>
      ) : (
        <div>
          <div className="container mx-auto p-4  h-screen">
            <h1 className="text-emerald-300 text-5xl">Hello !!, Random User</h1>
            <h2 className="text-emerald-300 text-3xl">
              {" "}
              Welcome to our dashboard
            </h2>
            <p className="text-black text-lg">
              <br />
              We would be thrilled to have you join us on this cinematic
              journey. In a world where entertainment options are limitless,
              we've curated a one-stop destination for all your movie needs.
              Whether you're a seasoned cinephile or just looking for a casual
              movie night, our Movie Dashboard is designed to cater to your
              every film-related whim.
            </p>
            <br />
            <br />
            <Link href={"/login"}>
              <Button> Sign Up</Button>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

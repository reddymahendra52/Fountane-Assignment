"use client";

import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function MovieDashboard() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_API_TMDB,
    },
  };

  const { data, status } = useQuery({
    queryKey: ["episodes"],
    queryFn: () =>
      fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        options
      ).then((response) => response.json()),
  });

  console.log(data);

  return (
    <div class="container mx-auto p-4 bg-black">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.results?.map((movie) => (
          <div key={movie.id}>
            <Card className="w-[400px]">
              <CardHeader>
                <CardTitle>{movie.title}</CardTitle>
                <CardDescription>{movie.overview}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  width={380}
                  height={200}
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex h-5 items-center space-x-4 text-sm">
                  <div>
                    Release Date <br /> {movie.release_date}{" "}
                  </div>
                  <Separator orientation="vertical" />
                  <div>
                    Popularity <br /> {movie.popularity}{" "}
                  </div>
                  <Separator orientation="vertical" />
                  <div>
                    Vote Average <br /> {movie.vote_average}{" "}
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

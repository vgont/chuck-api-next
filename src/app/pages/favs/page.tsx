"use client";
import ChangeScreenButton from "@/app/components/ChangeScreenButton";
import ChuckIcon from "@/app/components/ChuckIcon";
import FavJokesList from "@/app/components/FavJokesList";
import Title from "@/app/components/Title";

function favJokesPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 p-10">
        <ChangeScreenButton name="Change to jokes" href="/" />
        <ChuckIcon />
        <Title children="Your fav Jokes" />
        <FavJokesList />
      </div>
    </>
  );
}

export default favJokesPage;

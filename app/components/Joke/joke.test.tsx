import { screen } from "@testing-library/react";
import { JokeDisplay } from "./index";
import type { Joke } from "@prisma/client";
import { render } from "../../utils/test";

describe("components/JokeDisplay", () => {
  const MOCK_JOKE: Pick<Joke, "content" | "name"> = {
    content:
      "My first time using an elevator was an uplifting experience. The second time let me down.",
    name: "Elevator",
  };
  const MOCK_TITLE = "Here's your hilarious joke:";
  test("Should be render title", () => {
    render(<JokeDisplay joke={MOCK_JOKE} isOwner={false} />);
    expect(screen.getByText(MOCK_TITLE)).toBeInTheDocument();
  });

  test("Should be render name", () => {
    render(<JokeDisplay joke={MOCK_JOKE} isOwner={false} />);
    expect(screen.getByText(MOCK_JOKE.name + " Permalink")).toBeInTheDocument();
  });

  test("Should be render content", () => {
    render(<JokeDisplay joke={MOCK_JOKE} isOwner={false} />);
    expect(screen.getByText(MOCK_JOKE.content)).toBeInTheDocument();
  });

  test("Should be render delete button", () => {
    render(<JokeDisplay joke={MOCK_JOKE} isOwner={true} />);
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });

  test("Should be render delete button with correctly style", () => {
    render(<JokeDisplay joke={MOCK_JOKE} isOwner={true} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveStyle({
      backgroundColor: "hsl(48deg 100% 50%)",
    });
  });
});

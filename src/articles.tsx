import type { ReactNode } from "react";
import {
  Em,
  Formula,
  H2,
  Note,
  P,
  Prose,
  Questions,
  Quote,
  Stack,
  Step,
} from "./prose";

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  year: string;
  readingTime: string;
  Body: () => ReactNode;
};

function LuckBody() {
  return (
    <Prose>

      <Note>
        I'm not a billionaire — not yet. So read this as a thesis, not a memoir.
        This is the model I'm betting my own life on for how outsized wealth actually
        gets built. I'd rather write it down while I'm still climbing than wait
        until I've arrived to say it.
      </Note>

      <P>
        Becoming a billionaire is not mainly about hard work. It is about luck —
        but not in the way people usually think about luck.
      </P>

      <P>
        Most people treat luck like something random. Something that happens to
        you. But there is another kind of luck: the kind you create by putting
        yourself in places where rare outcomes can reach you.
      </P>

      <P>
        I call this <Em>luck engineering</Em>.
      </P>

      <H2 label="The Formula">The Formula</H2>

      <P>The formula is simple:</P>

      <Formula>luck = hard work × positioning</Formula>

      <P>
        <Em>Hard work</Em> is the sustained effort applied long enough to create
        skill, output, or advantage.
      </P>

      <P>
        <Em>Positioning</Em> is choosing the right arena for that effort. It is
        finding opportunities where your work has a chance to produce an outcome
        much bigger than the input.
      </P>

      <P>This is where asymmetric opportunities come in.</P>

      <P>
        An <Em>asymmetric opportunity</Em> is a situation where the downside is
        limited, but the upside can be much larger than the risk, cost, or
        effort required.
      </P>

      <P>
        In 2024, I worked a job that paid me 200,000 naira a month. As a
        second-year university student, that was enough to take care of myself
        and buy some of the things I wanted. But I still felt trapped, because
        every meaningful expense had to be planned months ahead. I wasn't poor —
        I just didn't want to live like that anymore.
      </P>

      <P>Then I started doing hackathons.</P>

      <P>
        I entered one with a friend, and we won 2 million naira. That was the
        equivalent of ten months of my salary, in a single month.
      </P>

      <P>That changed how I understood work.</P>

      <P>
        The effort was still intense, but the outcome was completely different.
        A few days or weeks of focused building could produce a result my job
        could not match in almost a year.
      </P>

      <Quote>So I quit my job and started doing hackathons full time.</Quote>

      <P>
        Hackathons were not easy money. They were an asymmetric opportunity. I
        could spend a few intense days building, presenting, and competing — and
        one win could produce more than months of predictable salary. That
        doesn't mean the work was easier. The upside was just that much more
        attractive.
      </P>

      <H2 id="identify" label="Identifying Asymmetry">
        How to Identify Asymmetric Opportunities
      </H2>

      <P>
        Most asymmetric opportunities work like this: they do not remove effort.
        They change what effort can become.
      </P>

      <P>
        If you put hard work into a low-upside system, you'll only grow at linear time. If you put that same hard work into a
        high-upside system, one good result can change your options entirely.
      </P>

      <P>
        So the better question is not,{" "}
        <em style={{ fontStyle: "italic" }}>"What should I do now?"</em> The
        better question is,{" "}
        <em style={{ fontStyle: "italic" }}>
          "Where can I find opportunities where my effort has the chance to
          multiply?"
        </em>
      </P>

      <P>Whenever you find an opportunity, ask yourself three questions.</P>

      <Questions
        items={[
          {
            q: "What do I have to lose?",
            a: "This is the cost of choosing this opportunity over others. It could be time, money, energy, reputation, focus, or comfort.",
          },
          {
            q: "What can I gain?",
            a: "One sign of an asymmetric opportunity is that the upside dwarfs the input. Spending $20 for a chance at $2,000 is asymmetric. So is spending a few weeks building something that could open doors, create income, build proof, or attract powerful people.",
          },
          {
            q: "What advantage do I have that increases my chances?",
            a: "This could be your location, strategy, skills, network, taste, speed, context, or access to information. It doesn't need to be something nobody else has. It only needs to make you better suited for that opportunity than the average person.",
          },
        ]}
      />

      <P>
        In my case, hackathons made sense because I had a knack for ideas, I
        could build quickly, and I had soft skills most technical people didn't.
        I could write pitch decks, set team strategy, and communicate my ideas
        clearly to judges.
      </P>

      <P>
        Those advantages did not guarantee I would win — but they improved my
        odds by a lot.
      </P>

      <P>
        Write yours down. Then give yourself a realistic estimate of the risk,
        the upside, and the odds.
      </P>

      <H2 id="scaling" label="Scaling to Billions">
        How This Can Make You a Billionaire
      </H2>

      <P>This same pattern applies at a much larger scale.</P>

      <P>
        For billionaires, asymmetric opportunities often appear as large-scale
        changes in the world. Most extreme wealth is created when something new
        changes how people live, work, buy, communicate, or move.
      </P>

      <Stack
        lines={[
          "John D. Rockefeller became a billionaire during the Industrial Revolution.",
          "Henry Ford became one during the Gilded Age.",
          "Bill Gates, Jeff Bezos, and Larry Ellison became billionaires during the Dot-Com Boom.",
        ]}
      />

      <P>
        These eras were not easy. They were uncertain, competitive, and full of
        failure. But they were asymmetric, because the people who entered early
        with the right advantages could build ownership in markets that were
        expanding faster than most people understood.
      </P>

      <P>That is the pattern:</P>

      <Stack
        bold
        lines={[
          "Opportunity.",
          "Unusual advantage.",
          "Strategy.",
          "Relentless execution.",
        ]}
      />

      <H2 label="Luck Engineering 101">Luck Engineering 101</H2>

      <P>
        So if you want to engineer luck, start by identifying the outcome you
        want and the skills that would increase your odds of getting it.
      </P>

      <Step lead="First, learn soft skills that multiply the skills you already have.">
        In my case, I could build good products quickly — but creating beautiful
        pitch decks helped me communicate those ideas clearly. That one
        complementary skill increased my chances of winning hackathons
        dramatically.
      </Step>

      <Step lead="Second, learn how to strategize.">
        A strategy is a clear roadmap from where you are to where you want to be.
        It should include the opportunity you are chasing, the competitors in
        that space, their strengths, their weaknesses, and the angle you can use
        to win.
      </Step>

      <Step lead="Third, tell yourself the truth.">
        Do not enter asymmetric opportunities with hopes and dreams. Ask what
        the real risk is, what the real upside is, and whether you have any
        advantage that improves your odds.
      </Step>

      <H2 label="Conclusion">Conclusion</H2>

      <P>
        If your plan is grounded in reality, luck will have more room to do its
        work.
      </P>

      <P>That is luck engineering in a nutshell.</P>

      <P style={{ marginBottom: 0 }}>Good luck on your endeavors.</P>
    </Prose>
  );
}

export const articles: Article[] = [
  {
    slug: "luck-engineering",
    title: "Luck Engineering",
    description:
      "Most people think the answer is hard work. The real formula is luck engineering — putting yourself where rare outcomes can reach you.",
    date: "June 2026",
    year: "2026",
    readingTime: "8 min read",
    Body: LuckBody,
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

import type { ReactNode } from "react";
import { RevealGroup } from "./Reveal";

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  year: string;
  readingTime: string;
  Body: () => ReactNode;
};

/* Shared inline styles so article copy blends with the rest of the site */
const para = {
  fontSize: "1.7rem",
  lineHeight: 1.85,
  color: "var(--text-secondary)",
  marginBottom: "2rem",
} as const;

const heading = {
  fontSize: "1.3rem",
  fontWeight: 500,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  margin: "4.5rem 0 2rem",
} as const;

const emphasis = { color: "var(--text)", fontWeight: 400 } as const;

function LuckBody() {
  return (
    <RevealGroup>
      <p style={para}>
        Work harder, stay consistent, never give up, and somehow the outcome
        will come. That is the story most of us are told. But I don't think it
        is the full truth.
      </p>

      <p style={para}>
        Becoming a billionaire is not mainly about hard work. It is about luck —
        but not in the way people usually think about luck.
      </p>

      <p style={para}>
        Most people treat luck like something random. Something that happens to
        you. But there is another kind of luck: the kind you create by putting
        yourself in places where rare outcomes can reach you.
      </p>

      <p style={para}>
        I call this <span style={emphasis}>luck engineering</span>.
      </p>

      <h2 style={heading}>Luck Engineering</h2>

      <p style={para}>The formula is simple:</p>

      <div
        className="formula-box"
        style={{
          fontSize: "1.9rem",
          textAlign: "center",
          color: "var(--text)",
          background: "rgba(4, 26, 59, 0.03)",
          border: "1px solid var(--border)",
          borderLeft: "3px solid var(--accent)",
          borderRadius: "0.6rem",
          padding: "2rem 2.4rem",
          margin: "0 0 3rem",
          letterSpacing: "0.01em",
        }}
      >
        luck = hard work × positioning
      </div>

      <p style={para}>
        <span style={emphasis}>Hard work</span> is the sustained effort applied
        long enough to create skill, output, or advantage.
      </p>

      <p style={para}>
        <span style={emphasis}>Positioning</span> is choosing the right arena
        for that effort. It is finding opportunities where your work has a
        chance to produce an outcome much bigger than the input.
      </p>

      <p style={para}>This is where asymmetric opportunities come in.</p>

      <p style={para}>
        An <span style={emphasis}>asymmetric opportunity</span> is a situation
        where the downside is limited, but the upside can be much larger than
        the risk, cost, or effort required.
      </p>

      <p style={para}>
        In 2024, I worked a job that paid me 200,000 naira a month. As a
        second-year university student, that was enough to take care of myself
        and buy some of the things I wanted. But I still felt trapped, because
        every meaningful expense had to be planned months ahead. I wasn't poor —
        I just didn't want to live like that anymore.
      </p>

      <p style={para}>Then I started doing hackathons.</p>

      <p style={para}>
        I entered one with a friend, and we won 2 million naira. That was the
        equivalent of ten months of my salary, in a single month.
      </p>

      <p style={para}>That changed how I understood work.</p>

      <p style={para}>
        The effort was still intense, but the outcome was completely different.
        A few days or weeks of focused building could produce a result my job
        could not match in almost a year.
      </p>

      <blockquote
        style={{
          margin: "3rem 0",
          padding: "0.4rem 0 0.4rem 2.4rem",
          borderLeft: "3px solid var(--accent)",
          fontSize: "2.3rem",
          lineHeight: 1.5,
          fontStyle: "italic",
          color: "var(--text)",
          fontWeight: 300,
        }}
      >
        So I quit my job and started doing hackathons full time.
      </blockquote>

      <p style={para}>
        Hackathons were not easy money. They were an asymmetric opportunity. I
        could spend a few intense days building, presenting, and competing — and
        one win could produce more than months of predictable salary. That
        doesn't mean the work was easier. The upside was just that much more
        attractive.
      </p>

      <h2 style={heading}>How to Identify Asymmetric Opportunities</h2>

      <p style={para}>
        Most asymmetric opportunities work like this: they do not remove effort.
        They change what effort can become.
      </p>

      <p style={para}>
        If you put hard work into a low-upside system, you may become dependable
        but stay financially trapped. If you put that same hard work into a
        high-upside system, one good result can change your options entirely.
      </p>

      <p style={para}>
        So the better question is not,{" "}
        <em style={{ fontStyle: "italic" }}>"What should I do now?"</em> The
        better question is,{" "}
        <em style={{ fontStyle: "italic" }}>
          "Where can I find opportunities where my effort has the chance to
          multiply?"
        </em>
      </p>

      <p style={para}>
        Whenever you find an opportunity, ask yourself three questions.
      </p>

      <ol
        style={{
          listStyle: "none",
          margin: "0 0 2rem",
          padding: 0,
          counterReset: "q",
        }}
      >
        {[
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
        ].map((item, i) => (
          <li
            key={i}
            className="q-item"
            style={{
              position: "relative",
              padding: "2rem 0 2rem 5.6rem",
              borderTop: "1px solid var(--border)",
              ...(i === 2 ? { borderBottom: "1px solid var(--border)" } : {}),
            }}
          >
            <span
              className="q-num"
              style={{
                position: "absolute",
                left: 0,
                top: "2rem",
                width: "3.6rem",
                height: "3.6rem",
                lineHeight: "3.6rem",
                textAlign: "center",
                borderRadius: "50%",
                background: "var(--accent)",
                color: "var(--bg)",
                fontSize: "1.5rem",
                fontWeight: 500,
              }}
            >
              {i + 1}
            </span>
            <span
              style={{
                display: "block",
                fontSize: "1.8rem",
                color: "var(--text)",
                marginBottom: "0.4rem",
              }}
            >
              {item.q}
            </span>
            <span
              style={{
                fontSize: "1.6rem",
                color: "var(--text-muted)",
                lineHeight: 1.65,
              }}
            >
              {item.a}
            </span>
          </li>
        ))}
      </ol>

      <p style={para}>
        In my case, hackathons made sense because I had a knack for ideas, I
        could build quickly, and I had soft skills most technical people didn't.
        I could write pitch decks, set team strategy, and communicate my ideas
        clearly to judges.
      </p>

      <p style={para}>
        Those advantages did not guarantee I would win — but they improved my
        odds by a lot.
      </p>

      <p style={para}>
        Write yours down. Then give yourself a realistic estimate of the risk,
        the upside, and the odds.
      </p>

      <h2 style={heading}>How This Can Make You a Billionaire</h2>

      <p style={para}>This same pattern applies at a much larger scale.</p>

      <p style={para}>
        For billionaires, asymmetric opportunities often appear as large-scale
        changes in the world. Most extreme wealth is created when something new
        changes how people live, work, buy, communicate, or move.
      </p>

      <p style={para}>
        John D. Rockefeller became a billionaire during the Industrial
        Revolution.
        <br />
        Henry Ford became one during the Gilded Age.
        <br />
        Bill Gates, Jeff Bezos, and Larry Ellison became billionaires during the
        Dot-Com Boom.
      </p>

      <p style={para}>
        These eras were not easy. They were uncertain, competitive, and full of
        failure. But they were asymmetric, because the people who entered early
        with the right advantages could build ownership in markets that were
        expanding faster than most people understood.
      </p>

      <p style={para}>That is the pattern:</p>

      <p style={{ ...para, color: "var(--text)", fontWeight: 400 }}>
        Opportunity.
        <br />
        Unusual advantage.
        <br />
        Strategy.
        <br />
        Relentless execution.
      </p>

      <h2 style={heading}>Luck Engineering 101</h2>

      <p style={para}>
        So if you want to engineer luck, start by identifying the outcome you
        want and the skills that would increase your odds of getting it.
      </p>

      <p style={para}>
        <span style={emphasis}>
          First, learn soft skills that multiply the skills you already have.
        </span>
        <br />
        In my case, I could build good products quickly — but creating beautiful
        pitch decks helped me communicate those ideas clearly. That one
        complementary skill increased my chances of winning hackathons
        dramatically.
      </p>

      <p style={para}>
        <span style={emphasis}>Second, learn how to strategize.</span>
        <br />A strategy is a clear roadmap from where you are to where you want
        to be. It should include the opportunity you are chasing, the
        competitors in that space, their strengths, their weaknesses, and the
        angle you can use to win.
      </p>

      <p style={para}>
        <span style={emphasis}>Third, tell yourself the truth.</span>
        <br />
        Do not enter asymmetric opportunities with hopes and dreams. Ask what
        the real risk is, what the real upside is, and whether you have any
        advantage that improves your odds.
      </p>

      <h2 style={heading}>Conclusion</h2>

      <p style={para}>
        If your plan is grounded in reality, luck will have more room to do its
        work.
      </p>

      <p style={para}>That is luck engineering in a nutshell.</p>

      <p style={{ ...para, marginBottom: 0 }}>Good luck on your endeavors.</p>
    </RevealGroup>
  );
}

export const articles: Article[] = [
  {
    slug: "what-billionaires-understand-about-luck",
    title: "What Billionaires Understand About Luck",
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

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Activity,
  CalendarDays,
  MessageCircle,
  Radio,
  Share2,
  Users,
} from "lucide-react";

const heroMetrics = [
  { label: "Student stories today", value: "42", detail: "Shared across 4 campuses" },
  { label: "Events surfaced", value: "19", detail: "Club fairs, mixers, AMAs" },
  { label: "Platforms tracked", value: "11", detail: "Reddit, Instagram, Threads, more" },
];

const universitySpotlights = [
  {
    id: "stanford",
    name: "Stanford University",
    location: "Stanford, California",
    highlight: "Human-centered AI collabs",
    description:
      "Student-run labs livestream sprint recaps, while Cardinal Nights promotes weekly social takeovers and arts pop-ups.",
    tags: ["Startup mixers", "Sustainability labs", "Resident fellows"],
    stats: [
      { label: "Active clubs talking", value: "38", detail: "Robotics, AR/VR, service" },
      { label: "Dorm socials posted", value: "14", detail: "Frosh courtyard jams" },
      { label: "Community shoutouts", value: "62", detail: "Advisors & mentors" },
    ],
    miniFeed: [
      {
        source: "Instagram",
        snippet:
          "Cardinal Nights shared the Friday rooftop lineup featuring jazz, design showcases, and late-night snacks.",
        time: "2h ago",
      },
      {
        source: "Reddit",
        snippet: "Students dropped slides + tips for the HCI showcase and offered ride shares for demo day.",
        time: "4h ago",
      },
    ],
  },
  {
    id: "harvard",
    name: "Harvard University",
    location: "Cambridge, Massachusetts",
    highlight: "Civic debates & arts nights",
    description:
      "Lowell House forums, Institute of Politics town halls, and student arts collectives keep the Yard buzzing after class.",
    tags: ["Policy salons", "House formals", "Gallery crawls"],
    stats: [
      { label: "Clubs streaming", value: "27", detail: "Debate + service orgs" },
      { label: "Residences hosting", value: "9", detail: "House teas + music rooms" },
      { label: "Performances posted", value: "21", detail: "Poetry + chamber shows" },
    ],
    miniFeed: [
      {
        source: "Threads",
        snippet:
          "Harvard College Women in Business posted a lightning mentorship night with alumnae joining virtually.",
        time: "35m ago",
      },
      {
        source: "Instagram",
        snippet: "Quadball community shared highlights from the inter-house charity matches and open practices.",
        time: "3h ago",
      },
    ],
  },
  {
    id: "mit",
    name: "MIT",
    location: "Cambridge, Massachusetts",
    highlight: "Tech-powered community hacks",
    description:
      "Media Lab pop-ups, maker dorm hallway expos, and StartLabs pitch critiques keep tinkering energy high every night.",
    tags: ["Hack nights", "Maker dorms", "Open research"],
    stats: [
      { label: "Workshops promoted", value: "31", detail: "AI, climate, mobility" },
      { label: "Dorm collabs", value: "16", detail: "East Campus build nights" },
      { label: "Student spotlights", value: "48", detail: "Startup + music collabs" },
    ],
    miniFeed: [
      {
        source: "Discord",
        snippet:
          "Room of Requirement hack chat added a shared dashboard of climate-tech prototypes for Saturday's expo.",
        time: "1h ago",
      },
      {
        source: "X",
        snippet: "Rocket Team posted real-time clips from the desert test and invited frosh to tonight's recap stream.",
        time: "5h ago",
      },
    ],
  },
  {
    id: "berkeley",
    name: "UC Berkeley",
    location: "Berkeley, California",
    highlight: "Activism meets maker culture",
    description:
      "Sproul Plaza hosts rallies by day and acoustic sessions by night, while Jacobs Institute makers share sustainability hacks.",
    tags: ["Campus activism", "Eco design", "Community markets"],
    stats: [
      { label: "Forums buzzing", value: "44", detail: "Housing + policy threads" },
      { label: "Events livestreamed", value: "18", detail: "Co-ops + a cappella" },
      { label: "New opportunities", value: "29", detail: "Fellowships + teach-outs" },
    ],
    miniFeed: [
      {
        source: "Reddit",
        snippet:
          "Students compare co-op kitchens and share grocery budgets ahead of the community open house tour.",
        time: "47m ago",
      },
      {
        source: "Instagram",
        snippet: "Berkeley Eco Social highlighted solar co-op signups plus free repair cafe appointments for Sunday.",
        time: "3h ago",
      },
    ],
  },
];

const socialPosts = [
  {
    id: 1,
    author: "Sasha Malik",
    role: "STEM council lead · Toronto",
    university: "Stanford University",
    channel: "Reddit",
    time: "12m ago",
    content:
      "Just hopped off the Cardinal Nights Discord call—tons of students sharing how they mix design club meetups with service trips. Love seeing the social side of the AI labs.",
    highlights: ["Cardinal Nights", "Design for Extreme Affordability", "Service weekend"],
  },
  {
    id: 2,
    author: "Ethan Park",
    role: "Future Public Policy major · Seattle",
    university: "Harvard University",
    channel: "Instagram",
    time: "26m ago",
    content:
      "Clipped panels from the Institute of Politics town hall + Lowell House forum—students are debating equity in housing stipends and it is electric.",
    highlights: ["IOP town hall", "Lowell House forum", "Housing stipend Q&A"],
  },
  {
    id: 3,
    author: "Priya Raman",
    role: "Robotics mentor · Austin",
    university: "MIT",
    channel: "X",
    time: "41m ago",
    content:
      "Media Lab open studio tonight featured cross-club mashups (Dance Troupe + RAS). Posting clips to inspire my high school makerspace crew.",
    highlights: ["Media Lab", "Dance Troupe", "Rocket Team"],
  },
  {
    id: 4,
    author: "Luis Martinez",
    role: "Entrepreneurship club · Miami",
    university: "UC Berkeley",
    channel: "Threads",
    time: "1h ago",
    content:
      "Berkeley co-ops just shared their sustainability sprint scoreboard + open kitchen dates. Co-op meets have such a social vibe for first-gen founders.",
    highlights: ["Co-op council", "Eco sprint", "Founders social"],
  },
];

const liveMetrics = [
  {
    icon: Users,
    title: "Clubs reporting",
    value: "128",
    detail: "Campus orgs pushed updates within the last 24h",
  },
  {
    icon: Activity,
    title: "Moments curated",
    value: "312",
    detail: "Quotes, clips, and opportunities shared to Embark",
  },
  {
    icon: Radio,
    title: "Social platforms",
    value: "11",
    detail: "Reddit, Discord, Instagram, Threads, X, newsletters",
  },
];

const topicTracker = [
  { label: "#WomenInAI", momentum: "+22 mentions", context: "Stanford, MIT" },
  { label: "Housing transparency", momentum: "+13 posts", context: "Harvard, Berkeley" },
  { label: "Green fellowships", momentum: "+9 links", context: "Berkeley, Stanford" },
  { label: "Maker dorm collabs", momentum: "+15 videos", context: "MIT" },
];

const upcomingEvents = [
  {
    title: "Housing & Dining AMA",
    campus: "Stanford",
    time: "Thu · 7:00 PM PT",
    detail: "Resident fellows answer live social questions about dorm life.",
  },
  {
    title: "Policy & Pizza Night",
    campus: "Harvard",
    time: "Fri · 6:30 PM ET",
    detail: "IOP fellows host a casual salon on civic internships.",
  },
  {
    title: "Maker Dorm Expo",
    campus: "MIT",
    time: "Sat · 4:00 PM ET",
    detail: "Open hallway demos + music mashups from East Campus.",
  },
];

export default function SocialPage() {
  return (
    <div className="bg-background">
      <section className="bg-linear-to-br from-primary/5 to-accent/30 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
                Real-time campus social intel
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                University Social Pulse
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Explore how Stanford, Harvard, MIT, and UC Berkeley students are connecting right now—club announcements, dorm socials, civic debates, and maker night recaps in one place.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button size="lg">Share your update</Button>
                <Button variant="ghost" size="lg" className="gap-2">
                  Follow all campuses
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Card className="border-primary/30 bg-white/70 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-primary">Today&apos;s snapshot</CardTitle>
                <CardDescription>
                  Refreshed every few minutes from public posts, newsletters, and campus feeds.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                    <p className="text-3xl font-bold">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.detail}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-primary">Campus spotlights</p>
                <h2 className="text-3xl font-bold">Info + social life snapshots</h2>
                <p className="text-muted-foreground">
                  Quick reads on what students are saying, planning, and posting at each campus this week.
                </p>
              </div>
              <Button variant="outline">Suggest another university</Button>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {universitySpotlights.map((uni) => (
                <Card key={uni.id} className="h-full">
                  <CardHeader className="pb-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-sm text-muted-foreground">{uni.location}</p>
                        <CardTitle className="text-2xl">{uni.name}</CardTitle>
                      </div>
                      <Badge variant="secondary">{uni.highlight}</Badge>
                    </div>
                    <CardDescription className="pt-3 text-base text-foreground">
                      {uni.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {uni.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                      {uni.stats.map((stat) => (
                        <div key={stat.label} className="rounded-xl border bg-muted/40 p-4">
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                          <p className="text-2xl font-semibold">{stat.value}</p>
                          <p className="text-xs text-muted-foreground">{stat.detail}</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {uni.miniFeed.map((update) => (
                        <div
                          key={`${uni.id}-${update.source}`}
                          className="rounded-xl border bg-card/60 p-4"
                        >
                          <div className="flex items-center justify-between text-sm">
                            <p className="font-semibold">{update.source}</p>
                            <span className="text-muted-foreground">{update.time}</span>
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">{update.snippet}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.4fr,0.9fr]">
            <Card>
              <CardHeader className="border-b pb-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-primary">Social buzz</p>
                    <CardTitle className="text-2xl">Student posts we&apos;re tracking</CardTitle>
                    <CardDescription>
                      Curated from public channels with source links so you can keep the conversation going.
                    </CardDescription>
                  </div>
                  <Button size="sm" variant="outline">
                    Submit a post
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 py-6">
                {socialPosts.map((post) => (
                  <div key={post.id} className="rounded-2xl border bg-accent/30 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold">{post.author}</p>
                        <p className="text-sm text-muted-foreground">{post.role}</p>
                      </div>
                      <Badge variant="secondary">{post.channel}</Badge>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {post.university} · {post.time}
                    </p>
                    <p className="mt-3 text-base text-foreground">{post.content}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.highlights.map((item) => (
                        <Badge key={item} variant="outline">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Live social metrics</CardTitle>
                  <CardDescription>
                    High-level numbers showing the volume of campus chatter Embark is surfacing.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {liveMetrics.map((metric) => (
                    <div
                      key={metric.title}
                      className="flex items-start gap-4 rounded-xl border bg-muted/30 p-4"
                    >
                      <metric.icon className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground">
                          {metric.title}
                        </p>
                        <p className="text-2xl font-bold">{metric.value}</p>
                        <p className="text-sm text-muted-foreground">{metric.detail}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-primary" />
                    <CardTitle>Topic tracker</CardTitle>
                  </div>
                  <CardDescription>Hashtags and themes trending across spotlight campuses.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {topicTracker.map((topic) => (
                    <div
                      key={topic.label}
                      className="flex items-center justify-between rounded-xl border bg-card/60 px-3 py-2"
                    >
                      <div>
                        <p className="font-semibold">{topic.label}</p>
                        <p className="text-xs text-muted-foreground">{topic.context}</p>
                      </div>
                      <Badge variant="outline">{topic.momentum}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    <CardTitle>Upcoming highlights</CardTitle>
                  </div>
                  <CardDescription>Social events and AMAs you can plug into or follow remotely.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.title} className="rounded-xl border bg-muted/30 p-4">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">{event.title}</p>
                        <Badge variant="secondary">{event.campus}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.time}</p>
                      <p className="mt-2 text-sm text-foreground">{event.detail}</p>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Input placeholder="Share an upcoming event" />
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


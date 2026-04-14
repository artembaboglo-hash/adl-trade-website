/**
 * Department / topic routing — test emails & phones per office.
 * Replace with production addresses when ready.
 */
export type TopicChannelId = "general" | "suppliers" | "buyers" | "career";

export type OfficeChannel = {
  email: string;
  phone: string;
};

export type ContactTopicChannel = {
  id: TopicChannelId;
  moldova: OfficeChannel;
  romania: OfficeChannel;
};

export const contactTopicChannels: ContactTopicChannel[] = [
  {
    id: "general",
    moldova: { email: "info.md@test.adltrade.com", phone: "+373 22 111 111" },
    romania: { email: "info.ro@test.adltrade.com", phone: "+40 21 111 1111" }
  },
  {
    id: "suppliers",
    moldova: { email: "suppliers.md@test.adltrade.com", phone: "+373 22 222 222" },
    romania: { email: "suppliers.ro@test.adltrade.com", phone: "+40 21 222 2222" }
  },
  {
    id: "buyers",
    moldova: { email: "buyers.md@test.adltrade.com", phone: "+373 22 333 333" },
    romania: { email: "buyers.ro@test.adltrade.com", phone: "+40 21 333 3333" }
  },
  {
    id: "career",
    moldova: { email: "career.md@test.adltrade.com", phone: "+373 22 444 444" },
    romania: { email: "career.ro@test.adltrade.com", phone: "+40 21 444 4444" }
  }
];

/**
 * Department / topic routing — emails & phones per office (by topic).
 */
export type TopicChannelId = "orders" | "sales" | "suppliers" | "buyers" | "accounting" | "career";

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
    id: "orders",
    moldova: { email: "order.md@adltrade.com", phone: "+373 22 101 010" },
    romania: { email: "order.ro@adltrade.com", phone: "+40 21 202 0202" }
  },
  {
    id: "sales",
    moldova: { email: "sales.md@adltrade.com", phone: "+373 22 101 010" },
    romania: { email: "sales.ro@adltrade.com", phone: "+40 21 202 0202" }
  },
  {
    id: "suppliers",
    moldova: { email: "supplier@adltrade.com", phone: "+373 22 101 010" },
    romania: { email: "supplier@adltrade.com", phone: "+40 21 202 0202" }
  },
  {
    id: "buyers",
    moldova: { email: "buyer@adltrade.com", phone: "+373 22 101 010" },
    romania: { email: "buyer@adltrade.com", phone: "+40 21 202 0202" }
  },
  {
    id: "accounting",
    moldova: { email: "acc.md@adltrade.com", phone: "+373 22 101 010" },
    romania: { email: "acc.ro@adltrade.com", phone: "+40 21 202 0202" }
  },
  {
    id: "career",
    moldova: { email: "career.md@adltrade.com", phone: "+373 22 444 444" },
    romania: { email: "career.ro@adltrade.com", phone: "+40 21 444 4444" }
  }
];

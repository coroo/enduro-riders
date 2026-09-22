export type InboxMessage = {
  id: string;
  name: string;
  email: string;
  city: string;
  chapter: string;
  message: string;
  createdAt: string;
};

const inbox: InboxMessage[] = [];

export function addMessage(input: Omit<InboxMessage, "id" | "createdAt">) {
  const entry: InboxMessage = {
    ...input,
    id: `msg_${Date.now().toString(36)}`,
    createdAt: new Date().toISOString(),
  };
  inbox.unshift(entry);
  return entry;
}

export function inboxCount() {
  return inbox.length;
}

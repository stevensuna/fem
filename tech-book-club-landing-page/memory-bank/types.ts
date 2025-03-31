export interface MemoryEntry {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface MemoryBank {
  entries: MemoryEntry[];
  version: string;
  lastUpdated: Date;
}

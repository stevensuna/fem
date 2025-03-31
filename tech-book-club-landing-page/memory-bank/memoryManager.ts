import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { v4 as uuidv4 } from "uuid";
import type { MemoryBank, MemoryEntry } from "./types";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export class MemoryManager {
  private dataPath: string;
  private bank: MemoryBank;

  constructor() {
    this.dataPath = path.join(__dirname, "data.json");
    this.bank = this.loadMemoryBank();
  }

  private loadMemoryBank(): MemoryBank {
    try {
      const data = fs.readFileSync(this.dataPath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error loading memory bank:", error);
      return {
        entries: [],
        version: "1.0.0",
        lastUpdated: new Date(),
      };
    }
  }

  private saveMemoryBank(): void {
    try {
      this.bank.lastUpdated = new Date();
      fs.writeFileSync(this.dataPath, JSON.stringify(this.bank, null, 2));
    } catch (error) {
      console.error("Error saving memory bank:", error);
    }
  }

  addEntry(title: string, content: string, tags: string[] = []): MemoryEntry {
    const newEntry: MemoryEntry = {
      id: uuidv4(),
      title,
      content,
      tags,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.bank.entries.push(newEntry);
    this.saveMemoryBank();
    return newEntry;
  }

  updateEntry(id: string, updates: Partial<MemoryEntry>): MemoryEntry | null {
    const entryIndex = this.bank.entries.findIndex((entry) => entry.id === id);
    if (entryIndex === -1) return null;

    const updatedEntry = {
      ...this.bank.entries[entryIndex],
      ...updates,
      updatedAt: new Date(),
    };

    this.bank.entries[entryIndex] = updatedEntry;
    this.saveMemoryBank();
    return updatedEntry;
  }

  deleteEntry(id: string): boolean {
    const initialLength = this.bank.entries.length;
    this.bank.entries = this.bank.entries.filter((entry) => entry.id !== id);

    if (initialLength !== this.bank.entries.length) {
      this.saveMemoryBank();
      return true;
    }
    return false;
  }

  getEntry(id: string): MemoryEntry | null {
    return this.bank.entries.find((entry) => entry.id === id) || null;
  }

  searchEntries(query: string): MemoryEntry[] {
    const searchTerm = query.toLowerCase();
    return this.bank.entries.filter(
      (entry) =>
        entry.title.toLowerCase().includes(searchTerm) ||
        entry.content.toLowerCase().includes(searchTerm) ||
        entry.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    );
  }

  getEntriesByTag(tag: string): MemoryEntry[] {
    return this.bank.entries.filter((entry) => entry.tags.includes(tag));
  }

  getAllTags(): string[] {
    const tagSet = new Set<string>();
    this.bank.entries.forEach((entry) => {
      entry.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet);
  }
}

export const memoryManager = new MemoryManager();

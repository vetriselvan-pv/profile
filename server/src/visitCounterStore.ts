import { mkdir, readFile, writeFile } from 'fs/promises';
import path from 'path';

type VisitCounterData = {
  count: number;
  updatedAt: string;
};

class VisitCounterStore {
  private readonly filePath: string;
  private queue: Promise<unknown> = Promise.resolve();

  constructor(filePath?: string) {
    this.filePath =
      filePath ?? process.env.VISIT_COUNTER_FILE ?? path.join(process.cwd(), 'data', 'visit-count.json');
  }

  private async readData(): Promise<VisitCounterData> {
    try {
      const raw = await readFile(this.filePath, 'utf-8');
      const parsed = JSON.parse(raw) as Partial<VisitCounterData>;

      if (typeof parsed.count !== 'number' || Number.isNaN(parsed.count)) {
        return { count: 0, updatedAt: new Date(0).toISOString() };
      }

      return {
        count: parsed.count,
        updatedAt: parsed.updatedAt ?? new Date(0).toISOString(),
      };
    } catch {
      return { count: 0, updatedAt: new Date(0).toISOString() };
    }
  }

  private async writeData(data: VisitCounterData): Promise<void> {
    await mkdir(path.dirname(this.filePath), { recursive: true });
    await writeFile(this.filePath, JSON.stringify(data, null, 2), 'utf-8');
  }

  private runExclusive<T>(operation: () => Promise<T>): Promise<T> {
    const next = this.queue.then(operation, operation);
    this.queue = next.then(
      () => undefined,
      () => undefined,
    );
    return next;
  }

  increment(): Promise<VisitCounterData> {
    return this.runExclusive(async () => {
      const current = await this.readData();
      const next = {
        count: current.count + 1,
        updatedAt: new Date().toISOString(),
      };

      await this.writeData(next);
      return next;
    });
  }
}

export const visitCounterStore = new VisitCounterStore();

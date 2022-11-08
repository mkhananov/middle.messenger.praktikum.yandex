export interface IEventBus {
  on: (event: string, callback: () => void) => void;
  off: (event: string, callback: () => void) => void;
  emit: (event: string, ...args: unknown[]) => void;
}

export class EventBus {
  listener: { [key: string]: { (props?: unknown): void }[] };

  constructor() {
    this.listener = {};
  }

  on(event: string, callback: () => void): void {
    if (!this.listener[event]) {
      this.listener[event] = [];
    }

    this.listener[event].push(callback);
  }

  off(event: string, callback: () => void): void {
    if (!this.listener[event]) {
      throw new Error(`Нет события: ${event}`);
    } else {
      this.listener[event] = this.listener[event].filter(
        listener => listener !== callback
      );
    }
  }

  emit(event: string, ...args: unknown[]): void {
    if (!this.listener[event]) {
      throw new Error(`Нет события: ${event}`);
    } else {
      this.listener[event].forEach(listener => {
        listener(...args);
      });
    }
  }
}

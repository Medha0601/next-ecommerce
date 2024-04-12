export type DebounceFunction<T extends (...args: any[]) => any> = (
    func: T,
  ) => (...args: Parameters<T>) => ReturnType<T>;
export function createVariants<
  T extends Record<string, Record<string, string>>
>(config: T) {
  return {
    config,
    get: (variant: { [K in keyof T]?: keyof T[K] }) => {
      return Object.entries(variant)
        .map(([key, value]) => config[key][value as string])
        .join(" ");
    }
  };
}
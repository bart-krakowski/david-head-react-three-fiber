type BreakpointsProps<TValues extends { [key: string]: number | string }> = {
  values: TValues;
  unit?: string;
  step?: number;
};

export const createBreakpoints = <TValues extends {}>(
  breakpoints: BreakpointsProps<TValues>
) => {
  const { values, unit = "px", step = 5, ...other } = breakpoints;

  const keys = Object.keys(values);

  const up = (key: keyof TValues | number): string => {
    const predefinedValue = values[key as keyof TValues];
    const value = typeof predefinedValue === "number" ? predefinedValue : key;
    return `@media (min-width:${value}${unit})`;
  };

  const down = (key: keyof TValues | number): string => {
    const endIndex = keys.indexOf(key as string) + 1;
    const upperbound = values[keys[endIndex] as keyof TValues];

    if (endIndex === keys.length) {
      // down from the biggest breakpoint applies to all sizes
      return up(0);
    }

    const value =
      typeof upperbound === "number" && endIndex > 0
        ? upperbound
        : (key as number);
    return `@media (max-width:${value - step / 100}${unit})`;
  };

  const between = (
    start: keyof TValues | number,
    end: keyof TValues | number
  ): string => {
    const endIndex = keys.indexOf(end as string);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    const predefinedValue = values[keys[endIndex + 1] as keyof TValues];

    return (
      `@media (min-width:${
        typeof values[start as keyof TValues] === "number"
          ? values[start as keyof TValues]
          : start
      }${unit}) and ` +
      `(max-width:${
        (endIndex !== -1 && typeof predefinedValue === "number"
          ? (predefinedValue as number)
          : (end as number)) -
        step / 100
      }${unit})`
    );
  };

  const only = (key: keyof TValues | number) => {
    return between(key, key);
  };

  function width(key: keyof TValues) {
    return values[key];
  }

  return {
    keys,
    values,
    up,
    down,
    between,
    only,
    width,
    ...other,
  };
};

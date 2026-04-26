export const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

export const calculateSum = (a: number, b: number): number => {
  return a + b;
};

// 👇 新增这个函数作为示例变更
export const getCurrentTime = (): string => {
  return new Date().toISOString();
};

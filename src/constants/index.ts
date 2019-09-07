export const greetingsList: string[] = [
  '만나서 반갑습니다',
  'Nice to meet you',
  '很高兴见到你',
  'Ravi de vous rencontrer',
  'Vos noscere'
];
export const generateGreetings = (): string => {
  return greetingsList[Math.floor(Math.random() * greetingsList.length)];
};

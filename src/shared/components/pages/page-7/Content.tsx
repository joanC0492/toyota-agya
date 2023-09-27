interface IProps {
  className?: string;
  children: React.ReactNode;
}

export const Content = ({ children, className = "" }: IProps) => {
  return <div className={className}>{children}</div>;
};

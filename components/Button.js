export const Button = ({ isLoading, children, className, ...props }) => {
  isLoading ? (className += 'cursor-loading rounded-r-lg') : (className += '');
  return (
    <button className={className} {...props} disabled={isLoading}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

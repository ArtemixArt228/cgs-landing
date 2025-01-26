interface IConnectionProps {
  effectiveType?: string;
  saveData?: boolean;
  type?: string;
}

export const isMobileConnection = () => {
  const connection: IConnectionProps = navigator.connection;
  return (
    connection?.type === "cellular" ||
    connection?.effectiveType === "slow-2g" ||
    connection?.effectiveType === "2g" ||
    connection?.effectiveType === "3g" ||
    connection?.saveData === true
  );
};

export const defer = (callback: () => void) => {
  if (window.requestIdleCallback) {
    const handle = window.requestIdleCallback(callback);
    return () => window.cancelIdleCallback(handle);
  }
  const handle = setTimeout(callback, 2345 + Math.random() * 1000);
  return () => clearTimeout(handle);
};

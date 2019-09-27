import { useState } from "react";

export const useModal = (initialVisible = false) => {
  const [visible, setVisible] = useState(initialVisible);
  return [visible, setVisible];
};

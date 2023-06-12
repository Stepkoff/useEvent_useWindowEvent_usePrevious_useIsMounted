import {useEffect, useRef, useState} from "react";

const useIsMounted = () => {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export const UseIsMountedExample = () => {
  const [items, setItems] = useState<TodoItem[]>([]);
  const isMounted = useIsMounted();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((items) => {
        if (!isMounted.current) {
          return;
        }
        setItems(items);
      });
  }, [isMounted]);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}
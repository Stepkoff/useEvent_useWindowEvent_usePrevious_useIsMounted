import {useState} from "react";
import {UseWindowEventExampleWithEvent} from "./hooks/useWindowEvent";
import {UseIsMountedExample} from "./hooks/useIsMounted";
import {usePrevious} from "./hooks/usePrevious";

const examplesMap = {
  UseWindowEventExampleWithEvent: UseWindowEventExampleWithEvent,
  useIsMounted: UseIsMountedExample,
};

type Example = keyof typeof examplesMap;

function App() {
  const [example, setExample] = useState<Example>("UseWindowEventExampleWithEvent");
  const prevState = usePrevious(example);
  console.log('PrevState', prevState);

  const Component = examplesMap[example];
  return (
    <div>
      <div style={{ marginBottom: 80 }}>
        {Object.keys(examplesMap).map((example) => (
          <button key={example} onClick={() => setExample(example as Example)}>
            {example}
          </button>
        ))}
      </div>

      <Component />
    </div>
  )
}

export default App

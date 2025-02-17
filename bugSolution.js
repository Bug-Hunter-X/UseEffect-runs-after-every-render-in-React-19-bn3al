```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    if (count !== prevCount.current) {
      console.log('Count updated:', count);
    }
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```